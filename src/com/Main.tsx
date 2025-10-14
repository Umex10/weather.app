import { useSearch } from "../context/SearchContext";
import Input from "./Input";


const Main = () => {

  const {setInput} = useSearch();

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.currentTarget.value);
  }

  return (
    <main className="flex flex-col">
      <div className="hidden md:block px-32 py-6 w-[70%]">
         <Input className="w-full flex items-center relative" handleInput={handleInput}></Input>
      </div>
     
    </main>
   
  );
};

export default Main;
