import { CityContextGiver } from "./com/CityContext";
import Header from "./com/Header";
import Main from "./com/Main";
import { SearchProvider } from "./context/SearchContext";

function App() {
  return (
    <div className="mx-auto max-w-[1600px] h-screen relative">
    <CityContextGiver>
      <SearchProvider>
        <Header></Header>
        <Main></Main>
      </SearchProvider>
    </CityContextGiver>
    </div>
  );
}

export default App;
