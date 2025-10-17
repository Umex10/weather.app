
//? Necassary for the input react element
export type InputArgs = {
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClickIcon: () => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}