import { CityContextGiver } from "./context/giver/CityContextGiver";
import Header from "./com/Semantic/Header";
import Main from "./com/Semantic/Main";
import { SearchContextGiver } from "./context/giver/SearchContextGiver";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="mx-auto max-w-[1600px]
    my-auto
     relative">
      <BrowserRouter>
        <CityContextGiver>
          <SearchContextGiver>

            <Header></Header>
            <Main></Main>
            
          </SearchContextGiver>
        </CityContextGiver>
      </BrowserRouter>
    </div>
  );
}

export default App;
