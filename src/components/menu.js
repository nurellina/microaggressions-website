import React, { useState, useRef, useEffect } from "react"
import { Link } from 'gatsby'
import { Image } from 'gatsby'
import { Close } from "../images/icons"
import "../styles/menu.css"
import { motion, AnimatePresence } from "framer-motion"
import menuList from "../data/menu-items.json"

// Transition
const transition = { duration: .8, ease: [0.6, -.05, 0.1, 0.9] }

// Variants
const parent = {
    animate: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 1,
        },
    },
}
const titleSlideUp = {
    initial: { y: 200 },
    animate: { y: 0 }
}
const maskAnimation = {
    initial: { width: "100%" },
    animate: { width: 0 }
}

const Menu = ({ menuState, setMenuState, x, y}) => {
    const closeMenu = () => {
        setMenuState(!menuState)
      }
    
    return (
        <AnimatePresence>
            {menuState && (
                <>
                    <motion.div
                        initial={{ visibility: "hidden" }}
                        exit={{
                            visibility: "hidden",
                            transition: { delay: 1 },
                        }}
                        animate={{
                            visibility: "visible",
                            transition: { delay: 1 },
                        }}
                        className="items"
                        >
                        <div className="menu-title">Menu</div>
                        <div 
                            onClick={() => closeMenu()}
                            className="close" 
                            // onClick={() => setMenuState(false)}
                        >
                            <Close />
                        </div>
                        <div className="menu">
                            <div className="container-menu">
                                <div className="menu-inner">
                                    <motion.ul
                                        variants={parent}
                                        initial='initial'
                                        animate="animate"
                                        exit="exit"
                                    >
                                       {menuList.map(list => (
                        <List
                          key={list.id}
                          leftLineFlex={list.leftLineFlex}
                          rightLineFlex={list.rightLineFlex}
                          title={list.title}
                          offset={list.offset}
                          src={list.src}
                          id={list.id}
                          x={x}
                          y={y}
                        />
                      ))}
                                    </motion.ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <Panels />
                </>
               
            )}
            
        </AnimatePresence>
    )
}

const List = ({
    leftLineFlex,
    rightLineFlex,
    title,
    offset,
    src,
    id,
    x,
    y,
  }) => {
    const [hoverState, setHoverState] = useState(false)
    const list = useRef()
    const [state, setState] = useState({
      top: 0,
      left: 0,
    })
    useEffect(() => {
      setState({
        top: list.current.getBoundingClientRect().top,
        left: list.current.getBoundingClientRect().left,
      })
    }, [hoverState])
  
    return (
      <motion.li ref={list}>
        <Link to={`/${id}`}>
          <div className="wrapper-menu">
            <div className={`line left flex-${leftLineFlex}`}>
              <motion.div
                variants={maskAnimation}
                className="mask"
                transition={{ ...transition, duration: 1 }}
              ></motion.div>
            </div>
            <motion.div
              onHoverStart={() => setHoverState(true)}
              onHoverEnd={() => setHoverState(false)}
              className="title-menu"
            >
              <h2 className="h2-menu">
                <motion.div
                  variants={titleSlideUp}
                  transition={transition}
                  className="text-menu"
                >
                  {title}
                </motion.div>
              </h2>
            </motion.div>
            {/* <motion.div
              initial={{ opacity: 0 }}
              className="floating-image"
              animate={{
                opacity: hoverState ? 1 : 0,
                x: x - state.left + offset,
                y: y - state.top,
              }}
              transition={{
                ease: "linear",
              }}
            >
               <img src={shard1} />
            </motion.div> */}
            <div className={`line right flex-${rightLineFlex}`}>
              <motion.div
                variants={maskAnimation}
                className="mask right"
                transition={{ ...transition, duration: 1 }}
              ></motion.div>
            </div>
          </div>
        </Link>
      </motion.li>
    )
  }

const Panels = () => {
    // const [panelComplete, setPanelComplete] = useState(false)
    return (
        <>
            <motion.div
                initial={{ height: 0 }}
                animate={{
                    height: [0, window.innerHeight, 0],
                    bottom: [null, 0, 0],
                }}
                exit={{
                    height: [0, window.innerHeight, 0],
                    top: [null, 0, 0],
                }}
                transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
                // style={{ background: panelComplete ? "#e7e7de" : "#e7dee7" }}
                className="left-panel-background"
            ></motion.div>
            <motion.div
                style={{
                    // background: panelComplete ? "#e7e7de" : "#e7dee7",
                }}
                initial={{ height: 0 }}
                animate={{
                    height: [0, window.innerHeight, 0],
                    bottom: [0, 0, window.innerHeight],
                }}
                exit={{
                    height: [0, window.innerHeight, 0],
                    bottom: [null, 0, 0],
                }}
                transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
                className="right-panel-background"
                // onAnimationComplete={() => {
                //     setPanelComplete(!panelComplete)
                // }}
            ></motion.div>
        </>
    )
}
export default Menu
