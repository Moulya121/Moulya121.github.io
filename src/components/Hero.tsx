import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Typewriter from "typewriter-effect";
import profile from "../assets/profile1.png";
import background from "../assets/background.jpeg"; // Import your background image

export default function Hero() {
  return (
    <div 
      className="h-screen flex items-center justify-between px-16 overflow-hidden relative"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Left Side - Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-1/2 text-left z-10 pl-12"
      >
        <h1 className="text-4xl font-bold text-white mb-4">
          Hello! I am<br></br>
        </h1>
        <h1> <br></br></h1>
        <h1 className="text-6xl font-bold text-white mb-4">
          Moulya Vishwanath
        </h1>
        <h1> <br></br></h1>
        <p className="text-2xl text-gray-300 flex items-center">
          I am a{" "}
          <span className="ml-2 font-bold text-blue-400">
            <Typewriter
              options={{
                strings: ["Web Developer", "UI/UX Designer", "Tech Presenter"],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </span>
          <h1> <br></br></h1>
        </p>

        {/* Social Links */}
        <div className="flex space-x-6 mt-8">
        
          <a href="https://github.com/Moulya121" className="text-gray-400 hover:text-white transition-colors">
            <Github size={30} />
          </a>
          <a href="https://www.linkedin.com/in/moulya-vish/" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin size={30} />
          </a>
          <a href="mailto:moulya.vish@gmail.com" className="text-gray-400 hover:text-white transition-colors">
            <Mail size={30} />
          </a>
        </div>
      </motion.div>

      {/* Right Side - Bright 3D Image */}
      <motion.div 
        className="w-1/2 flex justify-center items-center relative z-20"
      >
        <motion.div
          className="relative"
          initial={{ rotateY: 15 }}
          animate={{
            rotateY: [10, -10, 10],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          style={{
            transformStyle: "preserve-3d",
            perspective: "1000px"
          }}
        >
          {/* Bright Image Container */}
          <div className="clip-hexagon w-72 h-72 relative bg-white/5">
            {/* Vibrant Main Image */}
            <img 
              src={profile} 
              alt="Profile"
              className="w-full h-full object-cover absolute inset-0"
              style={{
                transform: "translateZ(30px)",
                filter: "brightness(1.1) contrast(1.05) drop-shadow(0 20px 25px rgba(0,0,0,0.5))",
              }}
            />
            
            {/* 3D Edge */}
            <div className="absolute inset-0 clip-hexagon border-2 border-white/20"
              style={{
                transform: "translateZ(-15px)",
                backfaceVisibility: "hidden"
              }}
            />
          </div>

          {/* Subtle Glow */}
          <div className="absolute inset-0 rounded-full -z-10 bg-blue-500/20 blur-xl" />
        </motion.div>
      </motion.div>
    </div>
  );
}