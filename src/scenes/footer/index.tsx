import Logo from "@/assets/Logo.png";
import HText from "@/shared/HText";
import { PlusIcon } from "@heroicons/react/24/solid";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Link from "../nav-bar/Link";


const Footer = () => {
    return (
        <footer className="bg-gray-20 py-16">
            <div className="mx-auto w-5/6 md:pb-10 pb-0">
                <HText>
                    <span className="text-primary-100">Find</span> us in
                </HText>
                <div className="gap-4 sm:flex my-5">
                    <a
                        className="flex gap-3 justify-center items-center rounded-md bg-primary-300 px-10 py-2 cursor-pointer transition duration-500 hover:bg-primary-500 hover:text-white mb-4"
                        href="#"
                        target="_blank"
                    >
                        <span>Facebook</span>
                        <PlusIcon className="w-5 h-5" />
                    </a>
                    <a
                        className="flex gap-3 justify-center items-center rounded-md bg-primary-300 px-10 py-2 cursor-pointer transition duration-500 hover:bg-primary-500 hover:text-white mb-4"
                        href="#"
                        target="_blank"
                    >
                        <span>Instagram</span>
                        <PlusIcon className="w-5 h-5" />
                    </a>
                    <a
                        className="flex gap-3 justify-center items-center rounded-md bg-primary-300 px-10 py-2 cursor-pointer transition duration-500 hover:bg-primary-500 hover:text-white mb-4"
                        href="#"
                        target="_blank"
                    >
                        <span>Twitter</span>
                        <PlusIcon className="w-5 h-5" />
                    </a>
                </div>
            </div>
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <img alt="logo" src={Logo} />
                    <p className="my-5">
                        Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
                        purus et arcu massa dictum condimentum. Augue scelerisque iaculis
                        orci ut habitant laoreet. Iaculis tristique.
                    </p>
                    <p>© FitZone All Rights Reserved.</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Links</h4>
                    <p className="my-5">Massa orci senectus</p>
                    <p className="my-5">Et gravida id et etiam</p>
                    <p>Ullamcorper vivamus</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Contact Us</h4>
                    <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
                    <p>(333)425-6825</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;