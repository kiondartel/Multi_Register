import * as Styled from "./styles";
import Theme from "../styles/render-theme";

import { useForm, FormActions } from "../../contexts/FormContext";

import { useNavigate } from "react-router-dom";
import { ChangeEvent, useEffect } from "react";

const Step1 = () => {
  const navigate = useNavigate();

  //Passo atual
  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1,
    });
  });
  const { state, dispatch } = useForm();

  //setando rota com UseNavigate
  const handleNextStep = () => {
    if (state.name !== "") {
      navigate("/Step2");
    } else {
      alert("Preencha o formulario");
    }
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
        <Styled.P>Preenja com seu nome completo</Styled.P>

        <hr style={{ marginBottom: "0.8rem" }} />
        <Styled.Label>
          Nome Completo:
          <Styled.Input
            type="text"
            autoFocus
            value={state.name}
            onChange={handleChange}
          />
        </Styled.Label>
        <Styled.Label>
          CPF
          <Styled.Input type="text" />
        </Styled.Label>
        <Styled.Label>
          Data de nascimento:
          <Styled.Input type="date" className="date-component" />
        </Styled.Label>

        <Styled.Btn onClick={handleNextStep}>Proximo</Styled.Btn>
      </Styled.Container>
    </Theme>
  );
};

export default Step1;
