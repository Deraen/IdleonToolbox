import { cleanUnderscore, prefix } from "../../Utilities";
import styled from 'styled-components';

const Looty = ({ items }) => {
  return <LootyWrapper>
    {items?.map(({ name, rawName }, index) => (
      <img height={50} width={50} title={cleanUnderscore(name)} src={`${prefix}data/${rawName}.png`} alt={''} key={rawName + index}/>))}
  </LootyWrapper>;
};

const LootyWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
  gap: 10px;
  
  img {
    margin: 0 auto;
    object-fit: contain;
    height: 50px;
    width: 50px;
  }
`;

export default Looty;