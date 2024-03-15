import { useState } from "react"
import Header from "./components/header"

function App() {
  
  const [language, setLanguage] = useState(null);
  
  return(
    <>
      <Header setLanguage={setLanguage}></Header>
      <main className="tablet:flex min-h-full">
        <aside className="overflow-auto tablet:w-1/3 dark:text-white">
          <button>Designs</button>
          <button>Information</button>
        </aside>
        <section className="bg-gray-800 grid grid-c tablet:w-2/3 overflow-auto">
          <article className="bg-white aspect-a4 mx-auto my-8 w-2/3">
            
          </article>
        </section>
      </main>
    </>
  )
}

export default App
