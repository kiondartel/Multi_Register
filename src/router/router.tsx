import { BrowserRouter, Routes, Route } from "react-router-dom";
import Step1 from "../Components/FormStep1";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Step1 />} />
      </Routes>
    </BrowserRouter>
  );
};
