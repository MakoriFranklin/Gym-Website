import { useEffect, useState } from "react"
import { NavBar } from "./components/navbar/NavBar"
import { SelectedPage } from "./components/navbar/shared/Types.ts";



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
    <div className='app bg-gray-20'>
      <NavBar selectedPage={selectedPage} setSelectedPage={setSelectedPage} isTopOfPage = {isTopOfPage}/>
    </div>
  )
}

export default App
