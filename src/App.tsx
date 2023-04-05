import Navbar from "@/scenes/nav-bar";
import { useEffect, useState } from "react";
import { SelectedPageEnum } from "@/shared/typesEnum";
import Home from "@/scenes/home"
import Benefits from "@/scenes/benefits"
import Categories from "./scenes/categories";
import ContactUs from "./scenes/contactUs";
import Footer from "./scenes/footer";

function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPageEnum>(SelectedPageEnum.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(SelectedPageEnum.Home)
      }
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener("scroll", handleScroll)
    return () => removeEventListener("scroll", handleScroll)
  }, [])


  return (
    <div className="bg-gray-50">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <Categories setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  )
}

export default App;
