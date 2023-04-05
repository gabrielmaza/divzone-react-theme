import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/logo-nav.svg";
import Link from "./Link";
import { SelectedPageEnum } from "@/shared/typesEnum";
import useMediaQuery from "@/hooks/useMediaQ";
import ActionButton from "@/shared/ActionButton";

type IndexProps = {
  isTopOfPage: boolean;
  selectedPage: SelectedPageEnum;
  setSelectedPage: (value: SelectedPageEnum) => void;
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: IndexProps) => {
  const flexBetween = "flex items-center justify-between"
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  const navbarBackground = isTopOfPage ? "" : "bg-primary-500 drop-shadow"
  return (
    <nav>
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-50 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Left side */}
            <img src={Logo} alt="Logo" className="h-5" />
            {/* Right side */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link selectedPage={selectedPage} setSelectedPage={setSelectedPage} page="Home" />
                  <Link selectedPage={selectedPage} setSelectedPage={setSelectedPage} page="Benefits" />
                  <Link selectedPage={selectedPage} setSelectedPage={setSelectedPage} page="Categories" />
                  <Link selectedPage={selectedPage} setSelectedPage={setSelectedPage} page="Contact Us" />
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>Become a member</ActionButton>
                </div>
              </div>
            ) :
              <button className="rounded-full bg-secondary-400 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            }
          </div>
        </div>
      </div>
      {/* Mobile menu modal */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 top-0 z-50 w-[300px] bg-primary-500 drop-shadow-xl">
          {/*Close icon*/}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="w-6 h-6 text-gray-400" />
            </button>
          </div>
          {/*Menu items*/}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link selectedPage={selectedPage} setSelectedPage={setSelectedPage} page="Home" />
            <Link selectedPage={selectedPage} setSelectedPage={setSelectedPage} page="Benefits" />
            <Link selectedPage={selectedPage} setSelectedPage={setSelectedPage} page="Categories" />
            <Link selectedPage={selectedPage} setSelectedPage={setSelectedPage} page="Contact Us" />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar;