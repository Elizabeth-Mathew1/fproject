import { motion } from "framer-motion";
import "./App.scss";
import { FaBehance, FaDribbble } from "react-icons/fa";
import { IoMailOutline, IoChevronForwardCircle, IoStar } from "react-icons/io5";
import { IconContext } from "react-icons";
import { useState } from "react";

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

const Testme = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleUploadClick = () => {
    document.getElementById('upload').click();
  };
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };
  return (
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
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "80px",
            flexDirection: "column",
          }}
        >
          <motion.img
            src={process.env.PUBLIC_URL + "/testme.svg"}
            alt="testme"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            style={{ width: "35%", paddingBottom: "5%" }}
          />

          <motion.div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingBottom: "3%",
            }}
          >
            <motion.label
              htmlFor="name"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              style={{
                paddingBottom: "0.2rem",
                fontSize: "19px",
              }}
            >
              Name:
            </motion.label>
            <motion.input
              id="name"
              type="text"
              value={name}
              onChange={handleNameChange}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              style={{
                padding: "0.5rem",
                borderRadius: "0.25rem",
                border: "1px solid #0BB7A1",
                outline: "none",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                marginBottom: "0.5rem",
                width: "100%",
                fontSize: "1rem",
              }}
            />
            <motion.label
              htmlFor="age"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              style={{
                paddingBottom: "0.2rem",
                fontSize: "19px",
              }}
            >
              Age:
            </motion.label>
            <motion.input
              id="age"
              type="number"
              value={age}
              onChange={handleAgeChange}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              style={{
                padding: "0.5rem",
                marginBottom:'0.3rem',
                borderRadius: "0.25rem",
                border: "1px solid #0BB7A1",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                
                width: "100%",
                fontSize: "1rem",
              }}
            />
          </motion.div>
          <motion.div className="btn_group" variants={stagger}>
            <motion.div
              className="btn btn_primary"
              variants={btnGroup}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{backgroundColor: 'black', color: 'white',width:'100%',
              height:'56px',
              padding:'0.5rem',
              marginBottom:'2px',
              fontSize: '20px',
              borderRadius: '8px',
              fontWeight: '600',
              display:'flex',
              justifyContent: 'center',
              alignItems: 'center'}}
              onClick={handleUploadClick}
            >
              Upload Scan
              
              <IconContext.Provider value={{ color: "#14da8f", size: "25px", marginLeft: "20%"}}>
                <IoChevronForwardCircle />
              </IconContext.Provider>
            </motion.div>
            <input type="file" id="upload" style={{ display: 'none' }} />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default Testme;
