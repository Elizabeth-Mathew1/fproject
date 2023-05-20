import { motion } from "framer-motion";
import "./App.scss";
import { FaBehance, FaDribbble } from "react-icons/fa";
import { IoMailOutline, IoChevronForwardCircle, IoStar, IoAdd, IoAddCircle, IoArrowUpCircle } from "react-icons/io5";
import { IconContext } from "react-icons";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


let easeing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const fadeInUp = {
  initial: {
    y: -60,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: easeing,
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.5,
      ease: easeing,
    },
  },
};

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  initial: {
    y: -20,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const lastName = {
  initial: {
    y: -20,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

const btnGroup = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.6, ease: easeing },
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: easeing,
    },
  },
};
const star = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.8, ease: easeing },
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: easeing,
    },
  },
};

const header = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.05, ease: easeing },
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: easeing,
    },
  },
};

const Results = (props) => {
  const navigate = useNavigate();
    const location = useLocation();
    const pName = location.state && location.state.p_name;
    const result = "  (not cancerous)";
    const navigateHome = () => {
      navigate('/');
    }
    
    return(
        <motion.div initial="initial" animate="animate">
      <motion.header variants={stagger}>
        <motion.div className="logo_wrapper" variants={header}>
          cancer<span>Pred</span>
        </motion.div>
        <motion.div className="menu_container" variants={stagger}>
          <motion.span variants={header}>
            <IconContext.Provider
              value={{
                color: "#000",
                size: "18px",
                className: "icons_container",
              }}
            >
              <div className="icon">
                <FaBehance />
              </div>
              <div className="icon">
                <FaDribbble />
              </div>
            </IconContext.Provider>
          </motion.span>
          <motion.span variants={header}>
            <IconContext.Provider value={{ color: "#000", size: "18px" }}>
              <div className="icon">
                <IoMailOutline />
              </div>
              <div className="tomail">cpred@gmail.com</div>
            </IconContext.Provider>
          </motion.span>
          <motion.span className="menu" variants={header}>
            <span></span>
            <span></span>
            <span></span>
          </motion.span>
        </motion.div>
      </motion.header>
      <motion.div
        className="content_wrapper"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: easeing }}
        style={{
          paddingBottom:'5%'
        }}
      >
        <motion.div
          className="top_content_wrapper"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "80px",
          }}
        >
          <motion.div 
          style={{
            width: '100%',
            display: "flex",
            flexDirection: "column",}}>
            <motion.div style={{
            width: '100%',
            display: "flex",
            flexDirection: "row",}}>
            <motion.label
              htmlFor="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              style={{
                paddingBottom: "0.2rem",
                fontSize: "32px",
                fontWeight: "bold",
              }}>
            Results:
          </motion.label>
          <motion.label
              htmlFor="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              style={{
                paddingBottom: "0.2rem",
                fontSize: "32px",
                fontWeight: "bold",
                color: "#0BB7A1"
              }}>
            {result}
          </motion.label>
            </motion.div>
          
          <motion.img
            src={process.env.PUBLIC_URL + "/lungCT.png"}
            alt="lung"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            style={{ width: "100%", paddingBottom: "5%", marginTop: "20px"}}
          />
        <motion.div style={{display: "flex",
          flexDirection: "column", marginBottom: "20px"}}>
          <motion.label
              htmlFor="age"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              style={{
                paddingBottom: "0.2rem",
                fontSize: "14px",
              }}
            >
              <b>Patient Name:</b> 
            </motion.label>{pName}
            <motion.label
              htmlFor="age"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              style={{
                paddingBottom: "0.2rem",
                fontSize: "14px",
              }}
            >
              <b>Status:</b> Non-cancerous
            </motion.label>
            <motion.label
              htmlFor="age"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              style={{
                paddingBottom: "0.2rem",
                fontSize: "14px",
              }}
            >
              <b>Size:</b> 42.9KB
            </motion.label>
            <motion.label
              htmlFor="age"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              style={{
                paddingBottom: "0.2rem",
                fontSize: "14px",
              }}
            >
              <b>PPI:</b> 512
            </motion.label>
          </motion.div>
          <motion.label
              htmlFor="age"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              style={{
                paddingBottom: "0.2rem",
                fontSize: "12px",
              }}
            >
              <b>*</b> Please note that our model has an accuracy of 98.6%
            </motion.label>
            <motion.div className="btn btn_secondary" 
          variants={btnGroup}
          style={{backgroundColor: 'black', color: 'white',
              height:'56px',
              padding:'0.5rem',
              marginTop: '15px',
              fontSize: '20px',
              borderRadius: '8px',
              fontWeight: '600',
              display:'flex',
              justifyContent: 'center',
              alignItems: 'center'}}
          whileHover={{scale:1.05}} 
          whileTap={{scale:0.95}}
          onClick={navigateHome}
          > 
          Back to Home Page
          <IconContext.Provider value={{ color: "#14da8f", size: "25px", marginLeft: "20%"}}>
                <IoChevronForwardCircle />
          </IconContext.Provider>
        </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
    );
};
export default Results;