import * as Styled from "./styles";
import Theme from "../styles/render-theme";

import { useForm, FormActions } from "../../contexts/FormContext";

import { useNavigate } from "react-router-dom";
import { ChangeEvent, useEffect } from "react";
import { Link } from "react-router-dom";

const Step3 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (state.name === "") {
      navigate("/");
    } else
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3,
      });
  });
  const { state, dispatch } = useForm();

  //setando rota com UseNavigate
  const handleNextStep = () => {
    console.log(state);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //usamos o ChangeEvent do proprio react para captruar eventos

    dispatch({
      type: FormActions.setName, // acessa o tipo de set
      payload: e.target.value, // pegamos o valor do nosso event e setamos
    });
  };

  return (
    <Theme>
      <Styled.Container>
        <Styled.P>Passo 1/3 - </Styled.P>
        <Styled.P>{state.name}, faça seu agendamento</Styled.P>

        <hr style={{ marginBottom: "0.8rem" }} />

        <Styled.Label>
          Dia
          <Styled.Input type="date" className="date-component" />
        </Styled.Label>

        <Styled.Label>
          Horario
          <Styled.Input type="time" min="12:00" max="18:00" />
        </Styled.Label>

        <Link to="/Step2" className="back-bnt">
          Voltar
        </Link>
        <Styled.Btn onClick={handleNextStep}>Finalizar Agendamento</Styled.Btn>
      </Styled.Container>
    </Theme>
  );
};

export default Step3;
