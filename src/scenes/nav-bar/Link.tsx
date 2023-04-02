import { SelectedPageEnum } from "@/shared/typesEnum";
import AnchorLink from "react-anchor-link-smooth-scroll";


type LinkProps = {
  page: string;
  selectedPage: SelectedPageEnum;
  setSelectedPage: (value: SelectedPageEnum) => void;
}

const Link = ({ page, selectedPage, setSelectedPage }: LinkProps) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPageEnum;
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-secondary-300" : "text-white"}
    transition duration-500 hover:text-primary-100 cursor-pointer
    `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}
export default Link;