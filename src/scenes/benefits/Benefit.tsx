import { SelectedPageEnum } from "@/shared/typesEnum";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
};

type Props = {
    icon: JSX.Element;
    title: string;
    description: string;
    setSelectedPage: (value: SelectedPageEnum) => void;
};

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
    return (
        <motion.div
            variants={childVariant}
            className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
        >
            <div className="mb-4 flex justify-center">
                <div className="rounded-full border-2 border-gray-100 bg-secondary-400 p-4">
                    {icon}
                </div>
            </div>

            <h4 className="font-bold">{title}</h4>
            <p className="my-3">{description}</p>
            <AnchorLink
                className="text-sm font-bold text-primary-100 underline hover:text-white"
                onClick={() => setSelectedPage(SelectedPageEnum.ContactUs)}
                href={`#${SelectedPageEnum.ContactUs}`}
            >
                <p>Learn More</p>
            </AnchorLink>
        </motion.div>
    );
};

export default Benefit;