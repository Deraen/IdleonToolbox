import React from 'react';
import { cleanUnderscore, prefix } from "../../Utilities";
import styled from 'styled-components';

const EquippedCards = ({ cards }) => {
  return (
    <EquippedCardsStyled>
      {cards?.cardSet?.rawName ? <div className={'card-set'}>
        {cards?.cardSet?.stars > 0 ?
          <img className='border' title={cleanUnderscore(cards?.cardSet?.name)}
               src={`${prefix}data/CardsBorder${cards?.cardSet?.stars + 1}.png`} alt=""/> : null}
        <img className={'card'} title={cleanUnderscore(cards?.cardSet?.name)}
             src={`${prefix}data/${cards?.cardSet?.rawName}.png`}
             alt=""/>
      </div> : null}
      {cards?.equippedCards?.map(({ cardName, cardIndex, stars }, index) => {
        const cleanCardName = cardName?.split("(", 2)[0].trim().replace(/ /, '_') || '';
        return cardName && cardName !== 'None' ? <CardWrapper stars={stars} key={cleanCardName + index}>
            {stars > 0 ?
              <img title={cardName} className='border' src={`${prefix}cards/Tier${stars}_Border.png`} alt=""/> : null}
            <img className='card' title={cardName}
                 src={`${prefix}data/2Cards${cardIndex}.png`} alt=""/>
          </CardWrapper> :
          <CardWrapper key={cleanCardName + index}><img src={`${prefix}data/EmptyCard.png`}
                                                        alt=""/></CardWrapper>;
      })}
    </EquippedCardsStyled>
  );
};

const EquippedCardsStyled = styled.div`
  position: relative;
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(4, minmax(36px, 60px));
  grid-template-rows: repeat(3, minmax(36px, 100px));;
  justify-content: center;

  .card-set {
    grid-column: span 4;
    justify-self: center;

    .border {
      position: absolute;
      z-index: 1;
      height: 88px;
      width: 65px;
    }

    .card {
      width: 58px;
      height: 72px;
    }
  }
`;

const CardWrapper = styled.div`
  position: relative;

  .border {
    position: absolute;
    z-index: 1;
  }

  .card {
    width: 58px;
    height: 72px;
    justify-self: center;
    position: absolute;
    left: 5px;
    top: 4px;
    object-fit: contain;
  }
`

export default EquippedCards;
