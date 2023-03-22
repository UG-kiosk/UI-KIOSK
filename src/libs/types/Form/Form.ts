export interface FormData {
  name: string;
}

type SubmitHandler = (data: FormData) => void;

export interface SearchBarProps {
  query: string;
  onSubmit: SubmitHandler;
}
