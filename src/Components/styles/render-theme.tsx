import { ReactNode } from "react";
import Header from "../Header";
import * as Styled from "./styles";

type Props = {
  children: ReactNode;
};

const Theme = ({ children }: Props) => {
  return (
    <Styled.Container>
      <Styled.Area>
        <Header />
        <Styled.Steps>
          <Styled.SideBar>...</Styled.SideBar>
          <Styled.Page>{children}</Styled.Page>
        </Styled.Steps>
      </Styled.Area>
    </Styled.Container>
  );
};

export default Theme;
