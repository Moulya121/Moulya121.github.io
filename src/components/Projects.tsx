
// import { motion } from 'framer-motion';

// const projects = [
//   {
//     title: 'Project 1',
//     description: 'A modern web application built with React and Three.js',
//     image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80',
//     tech: ['React', 'Three.js', 'TailwindCSS'],
//   },
//   {
//     title: 'Project 2',
//     description: 'Full-stack application with real-time features',
//     image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80',
//     tech: ['Node.js', 'Socket.io', 'MongoDB'],
//   },
//   {
//     title: 'Project 3',
//     description: 'Mobile-first responsive design system',
//     image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80',
//     tech: ['React Native', 'TypeScript', 'Styled Components'],
//   },
// ];

// export default function Projects() {
//   return (
//     <div className="min-h-screen bg-gray-900 py-12 px-4">
//       <h2 className="text-3xl font-bold text-center text-white mb-12">Projects</h2>
//       <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {projects.map((project) => (
//           <div key={project.title} className="relative group">
//             {/* Glow effect */}
//             <div className="absolute inset-0 bg-blue-500/10 rounded-lg blur-sm group-hover:bg-blue-500/20 transition-all duration-300 -z-10"></div>
            
//             <motion.div
//               className="relative bg-gray-800 rounded-lg overflow-hidden h-full"
//               whileHover={{ scale: 1.05 }} // Slightly reduced zoom
//               transition={{ duration: 0.3 }}
//             >
//               {/* Image container */}
//               <div className="aspect-[3/4] w-full relative">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
              
//               {/* Overlay content centered on hover */}
//               <motion.div 
//                 className="absolute inset-0 bg-gray-900/90 p-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//               >
//                 {/* Description and tech stack */}
//                 <div className="text-center">
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
//               </motion.div>
//             </motion.div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



import { motion } from 'framer-motion';
import project1 from "../assets/project1.jpeg";
import project2 from "../assets/project2.jpeg";
import project3 from "../assets/project3.jpeg";

const projects = [
  {
    title: 'GoTogether',
    description: 'Smart Ride-Sharing & Rewards Platform for Smart Mobility  (Progressive Web App)',
    image: project1,
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    title: 'CogniChat',
    description: 'A Cognitive Assessment Therapist',
    image: project2,
    tech: ['Node.js', 'Socket.io', 'MongoDB'],
  },
  {
    title: 'PillPal',
    description: 'Your Daily Dose Wingman',
    image: project3,
    tech: ['React Native', 'TypeScript', 'Styled Components'],
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-white mb-12">
        Projects
        <h1><br></br></h1>
      </h2>
      <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project) => (
          <div key={project.title} className="relative group">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-blue-500/10 rounded-lg blur-sm group-hover:bg-blue-500/20 transition-all duration-300 -z-10"></div>
            
            <motion.div
              className="relative bg-gray-800 rounded-lg overflow-hidden h-full"
              whileHover={{ scale: 1.1 }} // Increased zoom
              transition={{ duration: 0.3 }}
            >
              {/* Image container */}
              <div className="aspect-[3/5] w-full relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Title (always visible) */}
              <div className="absolute bottom-0 left-0 w-full bg-gray-900/80 text-white text-center py-2 text-sm font-semibold">
                {project.title}
              </div>
              
              {/* Overlay content on hover */}
              <motion.div 
                className="absolute inset-0 bg-gray-900/90 p-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                {/* Description and tech stack */}
                <div className="text-center">
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
          </div>
        ))}
      </div>
    </div>
  );
}
