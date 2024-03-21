import { useEffect, useState } from "react"
import Header from "./components/header"
import Aside from "./components/aside";
import Viewer from "./components/viewer";
import useLanguage from "./utils/useLanguage";
import designs from "./utils/designs";
import defaultInfo from "./utils/defaultInfo.js";

function App() {
  
  const {text, setLanguage} = useLanguage();
  const [design, setDesign] = useState(designs[0]);
  const [information, setInformation] = useState(defaultInfo);
  
  return(
    <>
      <Header setLanguage={setLanguage} text={text}></Header>
      <main className="tablet:flex min-h-full">
        <Aside text={text} selectedDesign={design} setDesign={setDesign} information={information} setInformation={setInformation}></Aside>
        <Viewer information={information} design={design} text={text}></Viewer>
      </main>
    </>
  )
}

export default App
