import { ReactNode } from "react";
import { useForm } from "../../contexts/FormContext";
import Header from "../Header";
import SideBarItem from "../SideBarItem";
import * as Styled from "./styles";

type Props = {
  children: ReactNode;
};

const Theme = ({ children }: Props) => {
  const { state } = useForm();

  return (
    <Styled.Container>
      <Styled.Area>
        <Header />
        <Styled.Steps>
          <Styled.SideBar>
            <SideBarItem
              title="Identificação"
              description="dados do paciente"
              icon="profile"
              path="/"
              active={state.currentStep === 1}
            />

            <SideBarItem
              title="Atendimento"
              description="escolha o atendimento"
              icon="hospital"
              path="/Step2"
              active={state.currentStep === 2}
            />

            <SideBarItem
              title="Agendamento"
              description="agende seu horario"
              icon="book"
              path="/Step3"
              active={state.currentStep === 3}
            />
          </Styled.SideBar>
          <Styled.Page>{children}</Styled.Page>
        </Styled.Steps>
      </Styled.Area>
    </Styled.Container>
  );
};

export default Theme;
