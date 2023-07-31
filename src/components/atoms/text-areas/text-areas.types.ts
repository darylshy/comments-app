import { FormEvent } from "react";

export interface ITextArea {
  onChange: (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  id: string;
  name: string;
  rows: number;
  cols: number;
  placeholder: string;
  required?: boolean;
  value: string;
}
