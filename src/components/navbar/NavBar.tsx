import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid"
import Logo from "../../assets/images/Logo.png"
import Link from "./Link"
import { SelectedPage } from "../shared/Types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useEffect, useState } from "react";
import ActionButton from "./ActionButton";
type Props = {
    isTopOfPage: boolean
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

export const NavBar = ({ isTopOfPage, selectedPage, setSelectedPage}: Props) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false)
    const flexBetween = "flex item-center justify-between"
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow"
   

  return (
    <nav>
        <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6 `}>
                <div className={`${flexBetween} w-full gap-16`}>
                    <img src={Logo} alt="logo" className="sm:h-4"/>
                </div>
                {isAboveMediumScreens ? (<div className={`${flexBetween} w-full gap-9`}>
                    <div className={`${flexBetween} gap-8 text-sm`}>
                        <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page="About" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page="Our classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    </div>
                    <div className={`${flexBetween} gap-8`}>
                        <p>Sign In</p>
                        <ActionButton setSelectedPage={setSelectedPage}>Become a member</ActionButton>
                    </div>
                </div>) : (
                    <button className="rounded-full bg-secondary-500 p-2" 
                    onClick={()=>setIsMenuToggled(!isMenuToggled)}
                    ><Bars3Icon className="h-6 w-6 text-white"/>
                    </button>
                )}
            </div>
        </div>
        {!isAboveMediumScreens && isMenuToggled && (
            <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                <div className="flex justify-end p-12">
                    <button onClick={()=>setIsMenuToggled(!isMenuToggled)}>
                        <XMarkIcon className="h-6 w-6 text-gray-400"/>
                    </button>
                </div>
                <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                        <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page="About" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page="Our classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                </div>
            </div>
        )}
    </nav>
  )
}