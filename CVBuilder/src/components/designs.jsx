export default function Designs({text, selectedDesign, designs, setDesign}){
    
    function changeDesign(event){
        let button = event.target;
        while(button.tagName != "BUTTON"){
            button = button.parentElement;
        }
        setDesign(designs[parseInt(button.id) - 1]);
    }
    
    return(
    <section className="p-3">
        <h2>{text.designs}</h2>
            <div className="grid grid-cols-3 gap-3">
                {
                    designs.map((design) => 
                        <button key={design.id} id={design.id} onClick={changeDesign} className={(selectedDesign.id != design.id) ? "flex items-center justify-center bg-gray-400 dark:bg-gray-800 p-3 w-full" : "flex items-center justify-center bg-gray-900 dark:bg-gray-300 p-3 w-full"}>
                            {design.preview}
                        </button>
                    )
                }
        </div>
                    
    </section>
    )
}