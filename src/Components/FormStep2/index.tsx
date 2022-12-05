import * as Styled from "./styles";
import Theme from "../styles/render-theme";

import { useForm, FormActions } from "../../contexts/FormContext";

import { useNavigate } from "react-router-dom";
import { ChangeEvent, useEffect } from "react";
import Option from "../SelectOption";
import { Link } from "react-router-dom";

const Step2 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === "") {
      navigate("/");
    } else
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2,
      });
  });

  //setando rota com UseNavigate
  const handleNextStep = () => {
    if (state.name !== "") {
      navigate("/Step2");
    } else {
      alert("Preencha o formulario");
    }
  };

  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level,
    });
  };

  return (
    <Theme>
      <Styled.Container>
        <Styled.P>Passo 2/3 - </Styled.P>
        <Styled.H1>Atendimento Integral Clinic</Styled.H1>
        <Styled.P>Selecione a opção de atendimento</Styled.P>
        <hr />
        <Option
          title="Atendimento conveniado"
          description="Unimed, Amil, Bradesco, HapVida "
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />

        <Option
          title="Atendimento particular"
          description="Consultas acessives a partir de R$99,99"
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />

        <Link to="/" className="back-bnt">
          Voltar
        </Link>
        <Styled.Btn onClick={handleNextStep}>Proximo</Styled.Btn>
      </Styled.Container>
    </Theme>
  );
};

export default Step2;
