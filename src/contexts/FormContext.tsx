// Context (Armazena dados), Reducer, Provider, Hook
import { createContext, ReactNode, useContext, useReducer } from "react";

type State = {
  currentStep: Number;
  name: String;
  level: 0 | 1;
  email: String;
  github: String;
};

type Action = {
  type: FormActions;
  payload: any;
};

type ContextType = {
  state: State;
  dispatch: (action: Action) => void;
};

type FormProviderProps = {
  children: ReactNode;
};

//Context
const FormContext = createContext<ContextType | undefined>(undefined);

const initialData: State = {
  currentStep: 0,
  name: "",
  level: 0,
  email: "",
  github: "",
};

//Reducer
export enum FormActions {
  setCurrentStep,
  setName,
  setLevel,
  setEmail,
  setGithub,
}

const formReducer = (state: State, action: Action) => {
  switch (action.type) {
    case FormActions.setCurrentStep: //troca de passo
      return { ...state, currentStep: action.payload }; // pega o passo atual e faz a troca no current

    case FormActions.setName:
      return { ...state, name: action.payload };

    case FormActions.setLevel:
      return { ...state, level: action.payload };

    case FormActions.setEmail:
      return { ...state, email: action.payload };

    case FormActions.setGithub:
      return { ...state, github: action.payload };

    default:
      return state;
  }
};

//provider

export const FormProvider = ({ children }: FormProviderProps) => {
  const [state, dispatch] = useReducer(formReducer, initialData);
  const value = { state, dispatch };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

//hook

export const useForm = () => {
  const context = useContext(FormContext);

  if (context === undefined) {
    throw new Error("UseForm precisa ser usado dentro de form Provider");
  }
  return context;
};
