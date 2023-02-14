import { FC, PropsWithChildren, useState } from "react";
import FormContext from "./FormContext";

const FormContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const setAnswer = (fieldName: string, value: string) => {
    setAnswers((answers) => ({ ...answers, [fieldName]: value }));
  };

  const Provider = FormContext.Provider;

  return <Provider value={{ answers, setAnswer }}>{children}</Provider>;
};

export default FormContextProvider;
