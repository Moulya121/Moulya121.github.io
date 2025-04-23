// import { motion } from "framer-motion";
// import { Github, Linkedin, Mail } from "lucide-react";
// import Typewriter from "typewriter-effect";
// import profile from "../assets/profile1.png";
// import background from "../assets/background.jpeg"; // Import your background image

// export default function Hero() {
//   return (
//     <div 
//       className="h-screen flex items-center justify-between px-16 overflow-hidden relative"
//       style={{
//         backgroundImage: `url(${background})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//       }}
//     >
//       {/* Dark overlay to ensure text readability */}
//       <div className="absolute inset-0 bg-black/60 z-0"></div>

//       {/* Left Side - Text Content */}
//       <motion.div
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8 }}
//         className="w-1/2 text-left z-10 pl-12"
//       >
//         <h1 className="text-4xl font-bold text-white mb-4">
//           Hello! I am<br></br>
//         </h1>
//         <h1> <br></br></h1>
//         <h1 className="text-6xl font-bold text-white mb-4">
//           Moulya Vishwanath
//         </h1>
//         <h1> <br></br></h1>
//         <p className="text-2xl text-gray-300 flex items-center">
//           I am a{" "}
//           <span className="ml-2 font-bold text-blue-400">
//             <Typewriter
//               options={{
//                 strings: ["Full Stack Developer", "AI enthusiast", "Tech Presenter"],
//                 autoStart: true,
//                 loop: true,
//                 delay: 50,
//                 deleteSpeed: 30,
//               }}
//             />
//           </span>
//           <h1> <br></br></h1>
//         </p>

//         {/* Social Links */}
//         <div className="flex space-x-6 mt-8">
        
//           <a href="https://github.com/Moulya121" className="text-gray-400 hover:text-white transition-colors">
//             <Github size={30} />
//           </a>
//           <a href="https://www.linkedin.com/in/moulya-vish/" className="text-gray-400 hover:text-white transition-colors">
//             <Linkedin size={30} />
//           </a>
//           <a href="mailto:moulya.vish@gmail.com" className="text-gray-400 hover:text-white transition-colors">
//             <Mail size={30} />
//           </a>
//         </div>
//       </motion.div>

//       {/* Right Side - Bright 3D Image */}
//       <motion.div 
//         className="w-1/2 flex justify-center items-center relative z-20"
//       >
//         <motion.div
//           className="relative"
//           initial={{ rotateY: 15 }}
//           animate={{
//             rotateY: [10, -10, 10],
//             y: [0, -15, 0],
//           }}
//           transition={{
//             duration: 6,
//             repeat: Infinity,
//             repeatType: "reverse",
//             ease: "easeInOut"
//           }}
//           style={{
//             transformStyle: "preserve-3d",
//             perspective: "1000px"
//           }}
//         >
//           {/* Bright Image Container */}
//           <div className="clip-hexagon w-72 h-72 relative bg-white/5">
//             {/* Vibrant Main Image */}
//             <img 
//               src={profile} 
//               alt="Profile"
//               className="w-full h-full object-cover absolute inset-0"
//               style={{
//                 transform: "translateZ(30px)",
//                 filter: "brightness(1.1) contrast(1.05) drop-shadow(0 20px 25px rgba(0,0,0,0.5))",
//               }}
//             />
            
//             {/* 3D Edge */}
//             <div className="absolute inset-0 clip-hexagon border-2 border-white/20"
//               style={{
//                 transform: "translateZ(-15px)",
//                 backfaceVisibility: "hidden"
//               }}
//             />
//           </div>

//           {/* Subtle Glow */}
//           <div className="absolute inset-0 rounded-full -z-10 bg-blue-500/20 blur-xl" />
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }






import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Typewriter from "typewriter-effect";
import profile from "../assets/profile1.png";
import background from "../assets/background.jpeg";
import resume from "../assets/Moulya_resume.pdf";

export default function Hero() {
  return (
    <div 
      id="hero" 
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 md:py-0 overflow-hidden relative pt-24 md:pt-0"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 text-center md:text-left z-10 px-4 md:pl-12 flex flex-col justify-center"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Hello! I am
        </h1>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Moulya Vishwanath
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 flex justify-center md:justify-start items-center mb-8">
          I am a{" "}
          <span className="ml-2 font-bold text-blue-400">
            <Typewriter
              options={{
                strings: ["Full Stack Developer", "AI enthusiast", "Tech Presenter"],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </span>
        </p>

        {/* Resume Button */}
        <div className="mb-8">
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-base sm:text-lg"
          >
            Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start space-x-6">
          <a href="https://github.com/Moulya121" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
            <Github size={28} />
          </a>
          <a href="https://www.linkedin.com/in/moulya-vish/" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
            <Linkedin size={28} />
          </a>
          <a href="mailto:moulya.vish@gmail.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Email">
            <Mail size={28} />
          </a>
        </div>
      </motion.div>

      {/* Image Container */}
      <motion.div 
        className="w-full md:w-1/2 flex justify-center items-center relative z-20 mt-8 md:mt-0 px-4 md:px-0 max-w-md md:max-w-none mx-auto"
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
          <div className="clip-hexagon w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 relative bg-white/5">
            <img 
              src={profile} 
              alt="Profile"
              className="w-full h-full object-cover absolute inset-0 rounded-[1.5rem]"
              style={{
                transform: "translateZ(30px)",
                filter: "brightness(1.1) contrast(1.05) drop-shadow(0 20px 25px rgba(0,0,0,0.5))",
              }}
            />
            <div className="absolute inset-0 clip-hexagon border-2 border-white/20 rounded-[1.5rem]"
              style={{
                transform: "translateZ(-15px)",
                backfaceVisibility: "hidden"
              }}
            />
          </div>
          <div className="absolute inset-0 rounded-full -z-10 bg-blue-500/20 blur-xl" />
        </motion.div>
      </motion.div>
    </div>
  );
}

