import { CityContextGiver } from "./context/giver/CityContextGiver";
import Header from "./com/Header";
import Main from "./com/Main";
import { SearchContextGiver } from "./context/giver/SearchContextGiver";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="mx-auto max-w-[1600px] h-screen relative">
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
