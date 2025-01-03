import "./Home.css";
import Typewriter from "typewriter-effect";
import img2 from "../../assets/gym5.png";
import { Link } from "react-router-dom";
import { FaHeartbeat, FaDumbbell, FaSmile } from "react-icons/fa";
import { MdFitnessCenter } from "react-icons/md";
import { FcSportsMode } from "react-icons/fc";
import { GiBiceps } from "react-icons/gi";
import { GiBodyBalance } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import img1 from "../../assets/aiImage.avif";
import nutritionImg from "../../assets/nutrition.png";
import { motion } from "framer-motion";
import Carousel from "../carousel/Carousel";
// import  from "../../assets/women-fitness.jpg";
import img3 from "../../assets/pregnancy.jpg"

const Home = () => {
  // Enhanced animation variants
  const pageLoad = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.25,
      },
    },
  };

  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const scaleIn = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.6,
      },
    },
  };

  const slideIn = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        duration: 0.8,
      },
    },
  };

  const slideInFromRight = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={pageLoad}>
      <motion.div className="home-container" variants={fadeInUp}>
        <motion.div className="home-left" variants={slideIn}>
          <motion.div className="logo-container" variants={staggerContainer}>
            {[MdFitnessCenter, GiBodyBalance, GiBiceps, FcSportsMode].map(
              (Icon, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.4 },
                  }}
                >
                  <Icon className="home-logo" />
                </motion.div>
              )
            )}
          </motion.div>

          <motion.h1 variants={fadeInUp}>
            <Typewriter
              options={{
                strings: [
                  "Fitness Hub",
                  "IronEdge",
                  "FitHaven",
                  "FlexZone",
                  "MuscleForge",
                  "GymGrit",
                ],
                autoStart: true,
                loop: true,
                delay: 90,
                deleteSpeed: 50,
              }}
            />
          </motion.h1>
          <motion.p variants={fadeInUp}>
            Push yourself because no one else is going to do it for you!
          </motion.p>

          <motion.div
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/exercises">
              <button>Explore Now</button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="home-right"
          variants={slideInFromRight}
          whileHover={{ scale: 1.02 }}
        >
          <img src={img2} alt="Gym" />
        </motion.div>
      </motion.div>

      <motion.div
        className="benefits-section"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h1 variants={fadeInUp}>
          Benefits of <span>Exercises</span>
        </motion.h1>
        <motion.div className="benefits-cards" variants={staggerContainer}>
          {[
            {
              icon: FaHeartbeat,
              title: "Improves Heart Health",
              description:
                "Exercise strengthens your heart, reduces the risk of cardiovascular diseases, and improves circulation.",
            },
            {
              icon: FaDumbbell,
              title: "Builds Muscle Strength",
              description:
                "Regular workouts help in building muscle, improving endurance, and enhancing overall strength.",
            },
            {
              icon: FaSmile,
              title: "Boosts Mental Health",
              description:
                "Exercise releases endorphins, reduces stress, and uplifts mood for a happier life.",
            },
            {
              icon: FaDumbbell,
              title: "Builds Muscle Strength",
              description:
                "Regular workouts help in building muscle, improving endurance, and enhancing overall strength.",
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              className="benefit-card"
              variants={scaleIn}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <benefit.icon className="benefit-icon" />
              <h2>{benefit.title}</h2>
              <p>{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="container"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="content" variants={staggerContainer}>
          <motion.div
            className="img-container"
            variants={slideIn}
            whileHover={{ scale: 1.05 }}
          >
            <img src={img1} alt="Gym" />
          </motion.div>
          <motion.div className="text-container" variants={fadeInUp}>
            <h3>Introducing AI workout planner</h3>
            <p>
              Consistency is the key to success in any journey. Start today!
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/workout-planner">
                <button>Explore Now</button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="calculators-section"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h1 variants={fadeInUp}>
          Our <span>Calculators</span>
        </motion.h1>
        <motion.div className="calculator-cards" variants={staggerContainer}>
          {[
            { path: "/bmi-calculator", icon: CgGym, title: "BMI Calculator" },
            {
              path: "/calorie-calculator",
              icon: MdOutlineSportsGymnastics,
              title: "Calorie Calculator",
            },
            {
              path: "/body-fat-calculator",
              icon: MdOutlineSportsGymnastics,
              title: "Body Fat Calculator",
            },
          ].map((calc, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to={calc.path} className="calculator-card">
                <calc.icon />
                <h2>{calc.title}</h2>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="women-container"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h1 
          className="women-main-title"
          variants={fadeInUp}
        >
          Women`s Health Section
        </motion.h1>
        
        <motion.div className="women-div" variants={staggerContainer}>
          <motion.div className="women-text-contain" variants={fadeInUp}>
            
            <div className="features-grid">
              <motion.div 
                className="feature-item"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <Link to="/pregnancy-weight-gain-calculator" style={{ textDecoration: 'none' }}>
                  <h3>Pregnancy Weight Gain Calculator</h3>
                </Link>
              </motion.div>
              
              <motion.div 
                className="feature-item"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <Link to='/periods-calculator' style={{ textDecoration: 'none' }}>
                <h3>Period Calculator</h3>
                </Link>
              </motion.div>
              
              <motion.div 
                className="feature-item"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <Link to='/conception-calculator' style={{ textDecoration: 'none' }}>
                <h3>Conception Calculator</h3>
                </Link>
              </motion.div>
              
              <motion.div 
                className="feature-item"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <h3>Community Support</h3>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="women-image-container"
            variants={slideInFromRight}
            whileHover={{ scale: 1.02 }}
          >
            <img src={img3} alt="Women's Fitness" />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="nutri-section"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h1 variants={fadeInUp}>
          Personalized <span>Nutrition</span> Plans
        </motion.h1>
        <motion.div className="nutri-content" variants={staggerContainer}>
          <motion.div className="nutri-text" variants={slideIn}>
            {/* <h2>AI-Powered Nutrition Plans</h2> */}
            <motion.ul className="nutri-features" variants={staggerContainer}>
              {[
                { icon: "🥗", text: "Balanced macro and micronutrients" },
                { icon: "📊", text: "Detailed calorie tracking" },
                { icon: "🔄", text: "Regular plan adjustments" },
                // { icon: "📈", text: "Personalized recommendations" }
              ].map((feature, index) => (
                <motion.li
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="icon">{feature.icon}</span>
                  {feature.text}
                </motion.li>
              ))}
            </motion.ul>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/nutrition">
                <button className="get-started-btn">Get Your Plan</button>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            className="nutri-image"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
          >
            <img src={nutritionImg} alt="Nutrition Planning" />
          </motion.div>
        </motion.div>
      </motion.div>

      <Carousel />
    </motion.div>
  );
};

export default Home;
