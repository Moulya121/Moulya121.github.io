import { motion } from 'framer-motion';
import { Award, Mic, Users } from 'lucide-react';

const activities = [
  {
    icon: Award,
    title: "Top 20 in Hackathon",
    description: "Conducted in SKIT ‘Build for Bengaluru’ 12 hour Hackathon with an GoTogether: Smart Ride-Sharing & Rewards Platform for Smart Mobility",
    count: "Latest",
    date: "2025"
  },
  {
    icon: Award,
    title: "Coding Competition",
    description: "Achieved top 5 position in college level python coding competition",
    date: "2024"
  },
  {
    icon: Users,
    title: "Hacathon event",
    description: "Participated in SIET Tumkur 24 hour ‘National Level Hackathon with a PillPal: Your Daily Dose Wingman’",
    date: "2024"
  },
  {
    icon: Mic,
    title: "Awareness Program",
    description: "Conducted a week-long social media awareness program for high school students.",
    date: "2024"
  }
];

export default function Activities() {
  return (
    <section id="activities" className="min-h-screen bg-gray-900 py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Activities Timeline</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My journey through various activities, competitions, and events that have shaped my skills and experiences.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 -translate-x-1/2"></div>

          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-12 ${index % 2 === 0 ? 'pr-8 pl-24' : 'pl-8 pr-24'}`}
            >
              {/* Timeline dot */}
              <div className={`absolute top-1/2 w-5 h-5 rounded-full bg-blue-400 ${index % 2 === 0 ? '-right-9' : '-left-9'}`}></div>
              
              {/* Content card */}
              <div className="bg-gray-800 rounded-xl p-6 relative group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mt-1 flex-shrink-0">
                    <activity.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-semibold text-white">{activity.title}</h3>
                      <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">{activity.date}</span>
                    </div>
                    <p className="text-gray-300 mb-2">{activity.description}</p>
                    <span className="text-sm text-blue-400 font-medium">{activity.count}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}