import Header from "./com/Header"
import Main from "./com/Main"
import { SearchProvider } from "./context/SearchContext"

function App() {

  return (
    <SearchProvider>
    <Header></Header>
    <Main></Main>
    </SearchProvider>
  )
}

export default App
