import zoomOutIcon from "../assets/zoom_out.svg";
import zoomInIcon from "../assets/zoom_in.svg";
import printIcon from "../assets/print.svg";
import { useRef, useState } from "react";

const zoomsAvailable = [50, 75, 90, 100, 105, 125]

export default function Viewer(){
    
  const [zoom, setZoom] = useState(100);
  const zoomInButton = useRef(null);
  const zoomOutButton = useRef(null);

  function zoomIn(){
    doZoom((currentIndex) => currentIndex+1);
  }

  function zoomOut(){
    doZoom((currentIndex) => currentIndex-1);
  }

  function doZoom(cbIndex){
    let indexCurrentZoom = zoomsAvailable.findIndex((item) => item == zoom)

    indexCurrentZoom = cbIndex(indexCurrentZoom);
    setZoom(zoomsAvailable[indexCurrentZoom]);

    if(indexCurrentZoom == 0)
      zoomOutButton.current.disabled = true;
    else
    zoomOutButton.current.disabled = false;

    if(indexCurrentZoom == zoomsAvailable.length - 1)
      zoomInButton.current.disabled = true;
    else
      zoomInButton.current.disabled = false;
  }

  function print(){
    window.print()
  }

  return(
        <section className="bg-gray-400 dark:bg-gray-800 tablet:w-2/3 overflow-auto" id="viewer">
          <span className="border-2 rounded-3xl text-white my-2 flex text-xl items-center justify-center mx-auto gap-3 w-fit p-1 print:hidden">
            <button onClick={zoomOut} ref={zoomOutButton} className="disabled:invert-[0.3] hidden laptop-l:inline">
              <img src={zoomOutIcon} alt="Zoom out icon" className="size-8"/>
            </button>
            <span className="hidden laptop-l:inline">
              {`${zoom}%`}
            </span>
            <button onClick={zoomIn} ref={zoomInButton} className="disabled:invert-[0.3] hidden laptop-l:inline">
              <img src={zoomInIcon} alt="Zoom in icon" className="size-8"/>
            </button>
            <button onClick={print}>
              <img src={printIcon} alt="Print icon" className="size-8"/>
            </button>
          </span>
          <article className={(zoom == 50) ? "bg-white aspect-a4 my-8 mx-auto w-[210mm] [zoom:0.2] mobile-s:[zoom:0.35] mobile-m:[zoom:0.42] mobile-l:[zoom:0.5] tablet:[zoom:0.6] laptop:[zoom:0.75] print:block print:m-0 print:[zoom:1] laptop-l:[zoom:0.5]" : (zoom == 75) ? "bg-white aspect-a4 my-8 mx-auto w-[210mm] [zoom:0.2] mobile-s:[zoom:0.35] mobile-m:[zoom:0.42] mobile-l:[zoom:0.5] tablet:[zoom:0.6] laptop:[zoom:0.75] print:block print:m-0 print:[zoom:1] laptop-l:[zoom:0.75]" : (zoom == 90) ? "bg-white aspect-a4 my-8 mx-auto w-[210mm] [zoom:0.2] mobile-s:[zoom:0.35] mobile-m:[zoom:0.42] mobile-l:[zoom:0.5] tablet:[zoom:0.6] laptop:[zoom:0.75] print:block print:m-0 print:[zoom:1] laptop-l:[zoom:0.9]" : (zoom == 105) ? "bg-white aspect-a4 my-8 mx-auto w-[210mm] [zoom:0.2] mobile-s:[zoom:0.35] mobile-m:[zoom:0.42] mobile-l:[zoom:0.5] tablet:[zoom:0.6] laptop:[zoom:0.75] print:block print:m-0 print:[zoom:1] laptop-l:[zoom:1.05]" : (zoom == 125) ? "bg-white aspect-a4 my-8 mx-auto w-[210mm] [zoom:0.2] mobile-s:[zoom:0.35] mobile-m:[zoom:0.42] mobile-l:[zoom:0.5] tablet:[zoom:0.6] laptop:[zoom:0.75] print:block print:m-0 print:[zoom:1] laptop-l:[zoom:1.25]" : "bg-white aspect-a4 my-8 mx-auto w-[210mm] [zoom:0.2] mobile-s:[zoom:0.35] mobile-m:[zoom:0.42] mobile-l:[zoom:0.5] tablet:[zoom:0.6] laptop:[zoom:0.75] print:block print:m-0 print:[zoom:1] laptop-l:[zoom:1]"}>
            <h1>John Doe</h1>
          </article>
        </section>
    )
}