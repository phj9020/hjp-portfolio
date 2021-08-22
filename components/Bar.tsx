import { FunctionComponent,useRef  } from "react";
import { ISKill } from "../type";
import Tooltips from "@material-tailwind/react/Tooltips";
import TooltipsContent from "@material-tailwind/react/TooltipsContent";
import { motion } from "framer-motion";

export const Bar:FunctionComponent<{data:ISKill}> = ({data : {name, Icon, level}}) => {
    const levelRef = useRef();

    const variants = {
        initial: {
            width:0
        },
        animate: {
            width: level,
            transition: {
                duration: 0.4,
                type: "spring",
                damping:10,
                stiffness: 100,
            }
        }
    }

    return (
        <div className="mb-2 text-white bg-gray-300 rounded-full dark:bg-grayish">
            <motion.div variants={variants} initial="initial" animate="animate" className="flex items-center px-4 py-1 rounded-full cursor-pointer bg-gradient-to-r from-green to-blue dark:from-pinkyStart dark:to-pinkyEnd"
            style={{width: level}} ref={levelRef}>
                <Icon className="mr-2 md:mr-3" />
                <span>{name}</span>
            </motion.div>
            <Tooltips placement="right" ref={levelRef}>
                <TooltipsContent>{level}</TooltipsContent>
            </Tooltips>
        </div>
    )
};
