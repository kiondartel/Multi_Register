import styled from "styled-components";

export const Container = styled.div<{ selected: boolean }>`
  display: flex;
  border: 2px solid ${(props) => (props.selected ? "#25cd89" : "white")};
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 15px;
  padding: 20px;
  cursor: pointer;

  &:hover {
    border: 2px solid #496459;
  }
`;

export const Info = styled.div`
  flex: 1;
  margin-left: 20px;
`;

export const Title = styled.div`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 7px;
  color: black;
`;

export const Description = styled.div`
  font-size: 14px;
  color: #696969;
`;
