import React, { useContext, useMemo } from "react";
import { Card, CardContent, Stack, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { cleanUnderscore, growth, prefix } from "utility/helpers";
import { AppContext } from "components/common/context/AppProvider";
import styled from "@emotion/styled";
import { isPast, previousThursday, startOfToday } from "date-fns";
import Timer from "components/common/Timer";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const insideDungeonUpgradeMaxLevel = 100;
const flurboUpgradeMaxLevel = 50;

const calcHappyHours = (happyHours) => {
  const secondsInHour = 60 * 60;
  let lastThursday = previousThursday(startOfToday());
  lastThursday = lastThursday.getTime() - lastThursday.getTimezoneOffset() * 60 * 1000;
  return happyHours?.map((time) => {
    return time + Math.round(lastThursday / 1000) - secondsInHour;
  });
};

const Dungeons = () => {
  const { state } = useContext(AppContext);
  const { dungeons } = state?.account;

  const happyHours = useMemo(() => calcHappyHours(state?.serverVars?.HappyHours) || [], [state]);
  const nextHappyHours = happyHours?.filter((time) => !isPast(time * 1000)).map((time) => time * 1000);
  return (
    <>
      <Typography my={2} variant="h2">
        Dungeons
      </Typography>
      <Stack direction="row" gap={4}>
        <CardContainer>
          <CurrencyIcon src={`${prefix}data/Dung_Rank${dungeons.rank}.png`} alt="" />
          <Stack>
            <Typography>Rank: {dungeons.rank}</Typography>
            <Typography>
              {dungeons.progress} / {dungeons.rankReq}
            </Typography>
          </Stack>
        </CardContainer>
        <CardContainer>
          <Typography>Boosted Runs: {dungeons.boostedRuns}</Typography>
        </CardContainer>
        <CardContainer>
          <CurrencyIcon src={`${prefix}data/DungCredits1.png`} alt="" />
          {dungeons.credits}
        </CardContainer>
        <CardContainer>
          <CurrencyIcon src={`${prefix}data/DungCredits2.png`} alt="" />
          {dungeons.flurbos}
        </CardContainer>
      </Stack>
      {nextHappyHours?.length > 0 ? (
        <Stack my={2} direction="row" gap={4}>
          <Accordion>
            <AccordionSummary expandIcon={nextHappyHours.length > 1 ? <ExpandMoreIcon /> : null}>
              <Stack direction="row" gap={2}>
                <Typography>Next happy hour:</Typography>
                <Timer date={nextHappyHours?.[0]} lastUpdated={state?.lastUpdated} />
              </Stack>
            </AccordionSummary>
            {nextHappyHours.length > 1 ? (
              <AccordionDetails>
                <Typography mb={1}>Future happy hours</Typography>
                <Stack gap={2}>
                  {nextHappyHours.map((nextHappyHour, index) => {
                    if (index === 0) return null;
                    return <Timer key={`happy-${index}`} date={nextHappyHour} lastUpdated={state?.lastUpdated} />;
                  })}
                </Stack>
              </AccordionDetails>
            ) : null}
          </Accordion>
        </Stack>
      ) : null}
      <Stack direction="row" gap={4}>
        <DungeonUpgrades upgrades={dungeons?.insideUpgrades} />
        <DungeonUpgrades isFlurbo upgrades={dungeons?.upgrades} />
      </Stack>
    </>
  );
};

const CardContainer = ({ column, sx = {}, children }) => {
  return (
    <Card sx={sx}>
      <CardContent sx={{ height: "100%", display: "flex" }}>
        <Stack direction={column ? "column" : "row"} gap={1} justifyContent="center" alignItems="center">
          {children}
        </Stack>
      </CardContent>
    </Card>
  );
};

const CurrencyIcon = styled.img`
  width: 25px;
  object-fit: contain;
`;

const DungeonUpgrades = ({ isFlurbo, upgrades = [] }) => {
  const calcBonus = (upgrade) => {
    return growth(upgrade?.func, upgrade?.level, upgrade?.x1, upgrade?.x2);
  };

  const calcCostToMax = (level) => {
    let total = 0;
    for (let i = level; i < (isFlurbo ? 50 : 100); i++) {
      total += calcUpgradeCost(i);
    }
    return total;
  };

  const calcUpgradeCost = (level) => {
    if (isFlurbo) {
      const baseMath = Math.pow(1.7 * level, 1.05);
      const moreMath = 1.027 + ((level - 30) / (level + 30)) * 0.01 * Math.floor((level + 970) / 1000);
      return Math.floor(1 + baseMath * Math.pow(moreMath, level));
    } else {
      const baseMath = Math.pow(1.5 * level, 1.04);
      const moreMath = 1.024 + ((level - 60) / (level + 60)) * 0.01 * Math.floor((level + 940) / 1000);
      return Math.floor(2 + baseMath * Math.pow(moreMath, level));
    }
  };

  return (
    <Stack>
      <Typography my={2} variant="h4">
        {isFlurbo ? "Flurbo" : "Dungeon"} Upgrades
      </Typography>
      <Stack gap={1}>
        {upgrades.map((upgrade, index) => {
          const { level, type, effect } = upgrade;
          const isMaxed = level >= (isFlurbo ? flurboUpgradeMaxLevel : insideDungeonUpgradeMaxLevel);
          return (
            <Card key={`${effect}-${index}`} sx={{ width: 450 }}>
              <CardContent>
                <Stack direction="row" justifyContent="space-between" gap={2}>
                  <Stack>
                    <Typography>
                      +{calcBonus(upgrade)}
                      {type === "%" ? type : ""} {cleanUnderscore(effect)}
                    </Typography>
                    <Typography color={isMaxed ? "success.light" : ""}>{isMaxed ? "MAXED" : `Lv. ${level} / ${isFlurbo ? flurboUpgradeMaxLevel : insideDungeonUpgradeMaxLevel}`}</Typography>
                  </Stack>
                  <Stack direction="row" gap={3}>
                    <Stack>
                      <Typography color={"info.light"}>Cost</Typography>
                      <Typography>{calcUpgradeCost(level)}</Typography>
                    </Stack>
                    <Stack>
                      <Typography color={"info.light"}>Cost to max</Typography>
                      <Typography>{calcCostToMax(level)}</Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default Dungeons;