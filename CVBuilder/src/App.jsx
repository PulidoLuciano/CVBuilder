import { useState } from "react"
import Header from "./components/header"
import Aside from "./components/aside";
import Viewer from "./components/viewer";

function App() {
  
  const [language, setLanguage] = useState(null);
  
  return(
    <>
      <Header setLanguage={setLanguage}></Header>
      <main className="tablet:flex min-h-full">
        <Aside></Aside>
        <Viewer></Viewer>
      </main>
    </>
  )
}

export default App
