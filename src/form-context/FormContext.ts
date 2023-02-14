import { createContext } from "react";

interface IFormContext {
  answers: Record<string, string>;
  setAnswer: (fieldName: string, value: string) => void;
}

const initialValue: IFormContext = {
  answers: {},
  setAnswer: () => {},
};

const FormContext = createContext<IFormContext>(initialValue);

export default FormContext