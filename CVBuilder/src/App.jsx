import { useEffect, useState } from "react"
import Header from "./components/header"
import Aside from "./components/aside";
import Viewer from "./components/viewer";
import useLanguage from "./utils/useLanguage";

function App() {
  
  const {text, setLanguage} = useLanguage();
  const [design, setDesign] = useState(null);
  
  return(
    <>
      <Header setLanguage={setLanguage} text={text}></Header>
      <main className="tablet:flex min-h-full">
        <Aside text={text} setDesign={setDesign}></Aside>
        <Viewer></Viewer>
      </main>
    </>
  )
}

export default App
