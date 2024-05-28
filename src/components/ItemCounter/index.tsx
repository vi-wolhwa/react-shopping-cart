import styled from "styled-components";
import CountingButton from "../Button/CountingButton/index";

interface ItemCountProps {
  value: number;
  handleIncrease: () => void;
  handleDecrease: () => void;
}

const ItemCounter = ({ value, handleIncrease, handleDecrease }: ItemCountProps) => {
  return (
    <ItemCounterContainer>
      <CountingButton type="decrease" onClick={handleDecrease} />
      <Value>{value}</Value>
      <CountingButton type="increase" onClick={handleIncrease} />
    </ItemCounterContainer>
  );
};

const ItemCounterContainer = styled.div`
  display: flex;
  width: 80px;
  height: 24px;
  justify-content: space-between;
  align-items: center;
`;

const Value = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  text-align: center;
`;

export default ItemCounter;
