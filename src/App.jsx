import Infolista from "./infolista.jsx";
function App(){
  const tiedot = ["React","Javascript","CSS"];
  return(
    <>
    <Infolista taulukko={tiedot}/>
    </>
  )
}

export default App