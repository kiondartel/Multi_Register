import styled from "styled-components";

export const Container = styled.div`
  h1 {
    color: #202020;
  }
`;

export const P = styled.p`
  font-size: 13px;
  color: black;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  font-size: 0.9;
  color: black;
`;
export const Input = styled.input`
  display: block;
  margin-bottom: 5px;
  padding: 10px 10px;
  width: 100%;
  border: 2px solid #25cd89;
  border-radius: 5px;
  outline: 0;

  .date-component {
    padding: 5px 5px;
  }
`;

export const Btn = styled.button`
  background-color: #25cd89;
  color: white;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 30px;
  cursor: pointer;
`;
