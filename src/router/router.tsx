import { BrowserRouter, Routes, Route } from "react-router-dom";
import Step1 from "../Components/FormStep1";
import Step2 from "../Components/FormStep2";
import Step3 from "../Components/FormStep3";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
