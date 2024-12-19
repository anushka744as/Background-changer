import { useState } from 'react'

function App() {
  const [colour, setcolour] = useState("olive")

  return (
    <>

    <div className="w-full h-screen duration-200" style={{backgroundColor: colour}}>
   <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
   <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

    <button onClick={() => setcolour("red")}
    className="outline-none px-4 py-1 rounded-full"  style={{backgroundColor: "red"}}>red</button>
    
    <button onClick={() => setcolour("yellow")}
    className="outline-none px-4 py-1 rounded-full"  style={{backgroundColor: "yellow"}}>yellow</button>

    <button onClick={() => setcolour("green")}
    className="outline-none px-4 py-1 rounded-full"  style={{backgroundColor: "green"}}>green</button>

    <button onClick={() => setcolour("lightblue")}
    className="outline-none px-4 py-1 rounded-full"  style={{backgroundColor: "lightblue"}}>blue</button>

    <button 
    onClick={() => setcolour("purple")}
    className="outline-none px-4 py-1 rounded-full"  style={{backgroundColor: "purple"}}>purple</button>

    <button onClick={() => setcolour("pink")}
    className="outline-none px-4 py-1 rounded-full"  style={{backgroundColor: "pink"}}>pink</button>
   </div>

   </div>

    </div>

     </>
  )
}

export default App
