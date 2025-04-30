// import { motion } from 'framer-motion';
// import { Globe, Smartphone, Server, Video } from 'lucide-react';

// const roles = [
//   {
//     title: 'Web Developer',
//     icon: Globe,
//     color: 'from-blue-400 to-cyan-400',
//   },
//   {
//     title: 'React Native Developer',
//     icon: Smartphone,
//     color: 'from-purple-400 to-pink-400',
//   },
//   {
//     title: 'Backend Developer',
//     icon: Server,
//     color: 'from-green-400 to-emerald-400',
//   },
//   {
//     title: 'AI Enthusiast',
//     icon: Video,
//     color: 'from-orange-400 to-red-400',
//   },
// ];

// export default function Overview() {
//   return (
//     <div id="overview" className="min-h-screen bg-gray-900 py-20 px-4 relative">
//       <div className="max-w-6xl mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-4xl font-bold mb-8"
//         >
//           About Me.
//         </motion.h2>
        
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="text-gray-300 mb-16 max-w-3xl text-lg"
//         >
//           Hey, I’m Moulya Vishwanath!
//           I build cool stuff with code—from Full stack webs to AI-powered solutions. 
//           Currently crafting ReGenX, Revolutionizing waste, regenerating resources.
//           <br></br>

//         ⚡ Love: Breaking things, fixing them better.
//         <br></br>
//         🎯 Focus: Blockchain, AI, full-stack magic.<br></br>

//         Always up for tech, hackathons, and wild ideas—let’s connect!
//         </motion.p>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {roles.map((role, index) => (
//             <motion.div
//               key={role.title}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{ y: -10 }}
//               className="relative group"
//             >
//               <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"
//                 style={{ background: `linear-gradient(to right, ${role.color.split('from-')[1].split(' ')[0]}, ${role.color.split('to-')[1]})` }}
//               />
//               <div className="relative bg-gray-800 p-8 rounded-2xl h-full transform transition-transform duration-300 group-hover:scale-105">
//                 <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${role.color} p-4 mb-6`}>
//                   <role.icon className="w-full h-full text-white" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
//                 <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${role.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }







import { motion } from 'framer-motion';
import { Globe, Smartphone, Server, Video } from 'lucide-react';
import deskImage from '../assets/icon1.png'; // Add this line (update path to your image)

const roles = [
  {
    title: 'Web Developer',
    icon: Globe,
    color: 'from-blue-400 to-cyan-400',
  },
  {
    title: 'React Native Developer',
    icon: Smartphone,
    color: 'from-purple-400 to-pink-400',
  },
  {
    title: 'Backend Developer',
    icon: Server,
    color: 'from-green-400 to-emerald-400',
  },
  {
    title: 'AI Enthusiast',
    icon: Video,
    color: 'from-orange-400 to-red-400',
  },
];

export default function Overview() {
  return (
    <div id="overview" className="min-h-screen bg-gray-900 py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8"
        >
          About Me.
        </motion.h2>
        
        {/* Modified text + image container */}
        <div className="flex flex-col lg:flex-row items-start gap-8 mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 text-lg flex-1"
          >
            Hey, I’m Moulya Vishwanath! I build cool stuff with code-from Full stack webs to AI-powered solutions. 
            Currently crafting ReGenX, Revolutionizing waste, regenerating resources.<br />
            <span className="inline-block mr-2">⚡</span> Love: Breaking things, fixing them better.<br />
            <span className="inline-block mr-2">🎯</span> Focus: Blockchain, AI, full-stack magic.<br /><br />
            "I have a joke on recursion... but you’ll have to read it again to get it."<br /><br />
            Always up for tech, hackathons, and wild ideas-let’s connect!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden lg:block flex-shrink-0 w-[340px] h-[200px] rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={deskImage}
              alt="Desk"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"
                style={{ background: `linear-gradient(to right, ${role.color.split('from-')[1].split(' ')[0]}, ${role.color.split('to-')[1]})` }}
              />
              <div className="relative bg-gray-800 p-6 rounded-2xl h-full transform transition-transform duration-300 group-hover:scale-105">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${role.color} p-3 mb-6`}>
                  <role.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${role.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
