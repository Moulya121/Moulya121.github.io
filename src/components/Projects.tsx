// import { motion } from 'framer-motion';
// import { Github } from 'lucide-react';
// import project1 from "../assets/project1.jpeg";
// import project2 from "../assets/project2.jpeg";
// import project3 from "../assets/project3.jpeg";
// import project5 from "../assets/project5.jpg";

// const projects = [
//   {
//     title: 'ReGenX',
//     description: 'Revolutionizing waste, regenerating resources',
//     image: project5,
//     tech: ['Flutter', 'Google cloud', 'Firebase', 'MongoDB'],
//     github: 'https://github.com/Moulya121/ReGenX'
//   },
//   {
//     title: 'GoTogether',
//     description: 'Smart Ride-Sharing & Rewards Platform for Smart Mobility (Progressive Web App)',
//     image: project1,
//     tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
//     github: 'https://github.com/yourusername/gotogether'
//   },
//   {
//     title: 'CogniChat',
//     description: 'A Cognitive Assessment Therapist',
//     image: project2,
//     tech: ['Node.js', 'Socket.io', 'MongoDB'],
//     github: 'https://github.com/yourusername/cognichat'
//   },
//   {
//     title: 'PillPal',
//     description: 'Your Daily Dose Wingman',
//     image: project3,
//     tech: ['React Native', 'TypeScript', 'Styled Components'],
//     github: 'https://github.com/yourusername/pillpal'
//   },
// ];

// export default function Projects() {
//   return (
//     <div className="min-h-screen bg-gray-900 py-12 px-4">
//       <h2 className="text-3xl font-bold text-center text-white mb-12">
//         Projects
//         <h1><br></br></h1>
//       </h2>
//       {/* Only this line changed */}
//       <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12">
//         {projects.map((project) => (
//           <div key={project.title} className="relative group">
//             <div className="absolute inset-0 bg-blue-500/10 rounded-lg blur-sm group-hover:bg-blue-500/20 transition-all duration-300 -z-10"></div>
            
//             <motion.div
//               className="relative bg-gray-800 rounded-lg overflow-hidden h-full"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//             >
//               <div className="aspect-[5/3] w-full relative">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               <div className="absolute bottom-0 left-0 w-full bg-gray-900/80 text-white text-center py-2 text-sm font-semibold">
//                 {project.title}
//               </div>
              
//               <motion.div 
//                 className="absolute inset-0 bg-gray-900/90 p-4 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//               >
//                 <div className="text-center mb-4">
//                   <p className="text-sm text-gray-300 mb-3">{project.description}</p>
//                   <div className="flex flex-wrap gap-1 justify-center">
//                     {project.tech.map((tech) => (
//                       <span
//                         key={tech}
//                         className="px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded-full text-xs"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 {project.github && (
//                   <motion.a
//                     href={project.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="absolute bottom-4 right-4 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full shadow-lg transition-all"
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ 
//                       opacity: 1, 
//                       y: 0,
//                       transition: { delay: 0.2 } 
//                     }}
//                   >
//                     <Github size={20} />
//                     <span className="sr-only">GitHub Repository</span>
//                   </motion.a>
//                 )}
//               </motion.div>
//             </motion.div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }










import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import project1 from "../assets/project1.jpeg";
import project2 from "../assets/project2.jpeg";
import project3 from "../assets/project3.jpeg";
import project5 from "../assets/project5.jpg";

const projects = [
  {
    title: 'ReGenX',
    description: 'Revolutionizing waste, regenerating resources',
    image: project5,
    tech: ['Flutter', 'Google cloud', 'Firebase', 'MongoDB'],
    github: 'https://github.com/Moulya121/ReGenX'
  },
  {
    title: 'GoTogether',
    description: 'Smart Ride-Sharing & Rewards Platform for Smart Mobility (Progressive Web App)',
    image: project1,
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/yourusername/gotogether'
  },
  {
    title: 'CogniChat',
    description: 'A Cognitive Assessment Therapist',
    image: project2,
    tech: ['Node.js', 'Socket.io', 'MongoDB'],
    github: 'https://github.com/yourusername/cognichat'
  },
  {
    title: 'PillPal',
    description: 'Your Daily Dose Wingman',
    image: project3,
    tech: ['React Native', 'TypeScript', 'Styled Components'],
    github: 'https://github.com/yourusername/pillpal'
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-white mb-12">
        Projects
        <h1><br></br></h1>
      </h2>
      <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-16">
        {projects.map((project) => (
          <div key={project.title} className="relative group">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-blue-500/10 rounded-lg blur-sm group-hover:bg-blue-500/20 transition-all duration-300 -z-10"></div>
            
            {/* Project Card */}
            <motion.div
              className="relative bg-gray-800 rounded-lg overflow-hidden h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-[3/2] w-full relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute bottom-0 left-0 w-full bg-gray-900/80 text-white text-center py-2 text-sm font-semibold">
                {project.title}
              </div>
              
              <motion.div 
                className="absolute inset-0 bg-gray-900/90 p-4 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div className="text-center mb-4">
                  <p className="text-sm text-gray-300 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* GitHub Link - Appears on hover */}
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -bottom-8 left-0 right-0 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-blue-400 hover:text-blue-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={18} />
                <span className="text-sm font-medium">View on GitHub</span>
              </motion.a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
