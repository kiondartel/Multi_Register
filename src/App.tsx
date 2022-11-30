import Router from "./router/router";
import { FormProvider } from "./contexts/FormContext";

function App() {
  return (
    <FormProvider>
      <Router />;
    </FormProvider>
  );
}

export default App;
