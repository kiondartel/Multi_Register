import Router from "./router/router";
import { FormProvider } from "./contexts/FormContext";
import { GlobalStyles } from "./Components/styles/globalstyles";

function App() {
  return (
    <FormProvider>
      <Router />;
      <GlobalStyles />
    </FormProvider>
  );
}

export default App;
