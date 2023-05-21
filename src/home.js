import './App.scss';
import {FaBehance, FaDribbble} from 'react-icons/fa';
import {IoMailOutline, IoChevronForwardCircle, IoStar} from 'react-icons/io5';
import {IconContext} from "react-icons";
import { useState } from 'react';
import Testme from './testme';
import {motion} from 'framer-motion';
import {Link, useNavigate} from 'react-router-dom';

let easeing = [0.6,-0.05,0.01,0.99];

const stagger = {
  animate:{
    transition:{
      delayChildren:0.4,
      staggerChildren:0.2,
      staggerDirection:1
    }
  }
}

const fadeInUp = {
  initial:{
    y:-60,
    opacity:0,
    transition:{
      duration:0.6, ease:easeing
    }
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration:0.6,
      delay:0.5,
      ease:easeing
    }
  }
};

const transition = {duration:1.4,ease:[0.6,0.01,-0.05,0.9]};

const firstName = {
  initial:{
    y:-20,
  },
  animate:{
    y:0,
    transition:{
      delayChildren:0.4,
      staggerChildren:0.04,
      staggerDirection:-1
    }
  }
}

const lastName = {
  initial:{
    y:-20,
  },
  animate:{
    y:0,
    transition:{
      delayChildren:0.4,
      staggerChildren:0.04,
      staggerDirection:1
    }
  }
}

const letter = {
  initial:{
    y:400,
  },
  animate:{
    y:0,
    transition:{duration:1, ...transition}
  }
};

const btnGroup={
  initial:{
    y:-60,
    opacity:0,
    transition:{duration:0.6, ease:easeing}
  },
  animate:{
    y:0,
    opacity:1,
    animation:{
      duration:0.6,
      ease:easeing
    }
  }
};
const star={
  initial:{
    y:60,
    opacity:0,
    transition:{duration:0.8, ease:easeing}
  },
  animate:{
    y:0,
    opacity:1,
    animation:{
      duration:0.6,
      ease:easeing
    }
  }
};

const header={
  initial:{
    y:-60,
    opacity:0,
    transition:{duration:0.05, ease:easeing}
  },
  animate:{
    y:0,
    opacity:1,
    animation:{
      duration:0.6,
      ease:easeing
    }
  }
};




const Home = () => {
  const navigate = useNavigate();
  const navigateToStats = () => {
    navigate('/stats');
  }
  
  
  return (
   
      
    <motion.div initial='initial' animate='animate'>
      <motion.header variants={stagger}>
          <motion.div className="logo_wrapper" variants={header}>cancer<span>Pred</span></motion.div>
          <motion.div className="menu_container" variants={stagger}>
            <motion.span variants={header}>
              <IconContext.Provider value={{color:"#000", size:"18px", className:"icons_container"}}>
                <div className="icon"><FaBehance/></div>
                <div className="icon"><FaDribbble/></div>
              </IconContext.Provider>
            </motion.span>
            <motion.span variants={header}>
              <IconContext.Provider value={{color:"#000", size:"18px"}}>
                <div className="icon"><IoMailOutline/></div>
                <div className = "tomail" >cpred@gmail.com</div>
              </IconContext.Provider>
            </motion.span>
            <motion.span className="menu" variants={header}>
              <span></span>
              <span></span>
              <span></span>
            </motion.span>
          </motion.div>
      </motion.header>
    
      <motion.div className="content_wrapper" initial={{opacity:0,scale:0}} animate={{opacity:1, scale:1}} transition={{duration:0.3, ease:easeing}}>
        <div className="left_content_wrapper">

          <motion.h2>

            <motion.span variants={firstName} initial="initial" animate="animate" className='first'>
                <motion.span variants={letter}>G</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>t</motion.span>
                <motion.span variants={letter} className="second">t</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>s</motion.span>
                <motion.span variants={letter}>t</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>d</motion.span>
                <motion.span variants={letter} className="second">t</motion.span>
                <motion.span variants={letter}>o</motion.span>
                <motion.span variants={letter}>d</motion.span>
                <motion.span variants={letter}>a</motion.span>
                <motion.span variants={letter}>y</motion.span>
            </motion.span>
            <motion.span variants={lastName} initial="initial" animate="animate" className='last'>
                <motion.span variants={letter}>i</motion.span>
                <motion.span variants={letter}>n</motion.span>
                <motion.span variants={letter} className="second">a</motion.span>
                <motion.span variants={letter} className="second">c</motion.span>
                <motion.span variants={letter}>l</motion.span>
                <motion.span variants={letter}>i</motion.span>
                <motion.span variants={letter}>c</motion.span>
                <motion.span variants={letter}>k.</motion.span>
               
                
            </motion.span>
          </motion.h2>
          
          <motion.p variants={fadeInUp}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </motion.p>
        
          <motion.div className="btn_group" variants={stagger}> 
          
            
            <motion.div className="btn btn_primary" variants={btnGroup} whileHover={{scale:1.05}} whileTap={{scale:0.95}}>Test Me
            <Link to = "/testme">
              <IconContext.Provider value={{color:"#14da8f", size:"25px"}}>
                <IoChevronForwardCircle/>
              </IconContext.Provider>
            </Link>
            </motion.div>
          
           
            <motion.div className="btn btn_secondary" variants={btnGroup} whileHover={{scale:1.05}} whileTap={{scale:0.95}} onClick={() => {navigateToStats();}}>Check Stat</motion.div>
          </motion.div>
         

          <motion.div className="review_container" variants={stagger}>
            <motion.p className="total_review" variants={star}>64+ Reviews</motion.p>
            <IconContext.Provider value={{color:"#fff", size:"18px"}}>
                <motion.span variants={star} whileHover={{scale:1.2, rotate:180,borderRadius:'100%',cursor:'pointer'}}><IoStar/></motion.span>
                <motion.span variants={star} whileHover={{scale:1.2, rotate:180,borderRadius:'100%',cursor:'pointer'}}><IoStar/></motion.span>
                <motion.span variants={star} whileHover={{scale:1.2, rotate:180,borderRadius:'100%',cursor:'pointer'}}><IoStar/></motion.span>
                <motion.span variants={star} whileHover={{scale:1.2, rotate:180,borderRadius:'100%',cursor:'pointer'}}><IoStar/></motion.span>
                <motion.span variants={star} whileHover={{scale:1.2, rotate:180,borderRadius:'100%',cursor:'pointer'}}><IoStar/></motion.span>
            </IconContext.Provider>
            <motion.p className="more_review" variants={star}>More then 50+ people taking services.</motion.p>
          </motion.div>
        </div>

        <motion.div className="right_content_wrapper">          
          <motion.img src={process.env.PUBLIC_URL + '/bgpic.svg'} alt="bg" initial={{x:200, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:.5, delay:0.8}}/>
        </motion.div>
      </motion.div>
    </motion.div>
   
  );
}

export default Home;