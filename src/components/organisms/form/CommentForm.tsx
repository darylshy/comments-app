import { FC, FormEvent, useState } from "react";
import { StyledLabel } from "../../atoms";
import { StyledInput } from "../../atoms/inputs/Inputs.styles";
import { StyledTextArea } from "../../atoms/text-areas/TextAreas.styles";
import { CommentButton } from "../../molecules/comment-button/CommentButton";
import { IForm } from "./comment-form.types";
import axios from "axios";
import { useFetchHelpers } from "../../../hooks/use-fetch-helpers";
import { CatchError } from "../../../hooks/use-comments-manager.types";

export const Form: FC<IForm> = ({ ...rest }) => {
  const { catchError } = useFetchHelpers();
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const handleChange = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await axios.post("/createComment", formData);
      setFormData({
        name: "",
        message: "",
      });
    } catch (error) {
      catchError({
        error,
        cancelMessage: CatchError.Canceled,
        crudMessage: CatchError.NotSubmitted,
      });
    }
  };

  return (
    <form {...rest} onSubmit={handleSubmit}>
      <StyledLabel htmlFor="name" labelText="Name:" />
      <StyledInput
        type="text"
        id="name"
        name="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <StyledLabel htmlFor="message" labelText="Comment:" />
      <StyledTextArea
        id="message"
        name="message"
        rows={5}
        cols={33}
        placeholder="Write something here"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <CommentButton />
    </form>
  );
};
