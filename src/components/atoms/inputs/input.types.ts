import { FormEvent } from "react";

export interface IInput {
  type: string;
  onChange: (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  id: string;
  name: string;
  placeholder: string;
  required?: boolean;
  value: string;
}
