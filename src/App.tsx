import { useEffect, useState } from "react"
import { NavBar } from "./components/navbar/NavBar"
import { SelectedPage } from "./components/navbar/shared/Types.ts";
import Home from "./components/Home/Home.tsx";



function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(()=> ()=> {
      const handleScroll = () => {
          if(window.scrollY !== 0){
              setIsTopOfPage(true);
              setSelectedPage(SelectedPage.Home);
          }else{
              setIsTopOfPage(false)
          }
          window.addEventListener("scroll", handleScroll)
          return () => window.removeEventListener("scroll", handleScroll)
          
      }
  }, []);
  return (
    <div className='app bg-gray-20 flex flex-col'>
      <NavBar selectedPage={selectedPage} setSelectedPage={setSelectedPage} isTopOfPage = {isTopOfPage}/>
      <Home setSelectedPage={setSelectedPage}/>
    </div>
  )
}

export default App
