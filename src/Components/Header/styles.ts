import styled from "styled-components";
import backg from "../../image/test5.jpg";

export const Container = styled.div`
  background-image: url(${backg});
  background-size: cover;
  background-position: center center;
  padding: 40px 0;
  border-bottom: 1px solid #16195c;
  border-radius: 2px;
  text-align: center;

  h1 {
    font-size: 2.5rem;
  }

  p {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;

    color: black;
  }
`;
