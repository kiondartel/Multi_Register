import styled from "styled-components";

export const Container = styled.div`
  .back-bnt {
    background-color: #25cd89;
    color: white;
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 30px;
    text-decoration: none;
    cursor: pointer;
    margin-right: 10px;
  }
`;

export const P = styled.p`
  font-size: 13px;
  color: #000;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  font-size: 0.9;
  color: #000;
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
