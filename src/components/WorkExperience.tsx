import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const experiences = [
  {
    role: "Intern",
    company: "Microsoft",
    duration: "Feb 2026 - Mar 2026",
    location: "India · Remote",
    description: "Acquired comprehensive knowledge of Microsoft Power BI and data visualization techniques. Learned the end-to-end process of designing, building, and optimizing interactive business dashboards.",
    techStack: ["Microsoft Power BI", "Dashboard Building", "Data Analytics"],
    color: "from-blue-400 to-indigo-600",
    borderColor: "border-blue-400",
    iconColor: "text-blue-400",
    certificateLink: "https://birlacollege-my.sharepoint.com/:b:/g/personal/5144984_bkbck_edu_in/IQCSnYYO6x4-TLTiA1OZnOzAAeqf-48hpJzmhiPO1NvkX2I?e=IKqavm"
  },
  {
    role: "Intern",
    company: "All India Council for Technical Education (AICTE)",
    duration: "Jan 2026 - Feb 2026",
    location: "India · Remote",
    description: "Learned core concepts of Machine Learning and Artificial Intelligence, focusing on building and deploying AI-integrated applications. Developed the PocketPath Project as part of the program.",
    techStack: ["Software Deployment", "Artificial Intelligence (AI)", "Machine Learning", "Python"],
    color: "from-cyan to-blue-600",
    borderColor: "border-cyan",
    iconColor: "text-cyan",
    certificateLink: "https://birlacollege-my.sharepoint.com/:b:/g/personal/5144984_bkbck_edu_in/IQDQlbUOnnq8S61aEZWvmSS2AWV5yEjXg_8uARaK2cbyye4?e=Tu2Iw6"
  },
  {
    role: "Intern",
    company: "CSRBOX®",
    duration: "Dec 2025 - Jan 2026",
    location: "India · Remote",
    description: "Gained hands-on experience in Machine Learning and AI application development. Built and deployed the AI Financial Awareness Project (FinsightAI), learning how to integrate AI models into functional applications.",
    techStack: ["Python", "Software Deployment", "Data Analytics"],
    color: "from-electric-purple to-pink-600",
    borderColor: "border-electric-purple",
    iconColor: "text-electric-purple",
    certificateLink: "https://birlacollege-my.sharepoint.com/:b:/g/personal/5144984_bkbck_edu_in/IQCFU5XBtxtQRbjCWiTD_Hv_AVzdsGQjsvU80puXlitKLfI?e=yseydD"
  },
  {
    role: "Intern",
    company: "IBM Cloud",
    duration: "Jul 2025 - Aug 2025",
    location: "India · Remote",
    description: "Received in-depth training on the IBM Cloud Platform and its core infrastructure. Successfully developed, trained, and deployed a Machine Learning model directly within the IBM Cloud environment.",
    techStack: ["Machine Learning", "Cloud Computing", "AI Integration"],
    color: "from-green-400 to-emerald-600",
    borderColor: "border-green-400",
    iconColor: "text-green-400",
    certificateLink: "https://birlacollege-my.sharepoint.com/:b:/g/personal/5144984_bkbck_edu_in/IQAyDfajaLnzTZH7dEookTwdAV5dbkzZyxYDQhzq6nJNPso?e=EgmO2S"
  }
];

export function WorkExperience() {
  return (
    <section className="py-24 px-4 relative z-10 max-w-6xl mx-auto" id="experience">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          Operational History
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-electric-purple to-cyan mx-auto"></div>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`glass-panel p-8 rounded-xl border-l-4 ${exp.borderColor} relative overflow-hidden group rgb-hover`}
          >
            <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
            
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white tracking-wider flex items-center gap-3 mb-2">
                  <div className={`p-3 bg-obsidian/60 rounded-lg shadow-inner border border-ash/10`}>
                    <Briefcase className={`w-6 h-6 ${exp.iconColor}`} />
                  </div>
                  <a 
                    href={exp.certificateLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-cyan transition-colors duration-300 flex items-center gap-2 group/link"
                  >
                    {exp.company}
                    <ExternalLink className="w-5 h-5 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 -translate-y-1 translate-x-1" />
                  </a>
                </h3>
                <div className="text-xl text-cyan font-medium ml-16 uppercase tracking-widest">{exp.role}</div>
              </div>
              
              <div className="flex flex-col gap-2 text-ash text-sm font-mono bg-obsidian/50 px-4 py-3 rounded-sm border border-ash/10">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-cyan" />
                  {exp.duration}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-electric-purple" />
                  {exp.location}
                </div>
              </div>
            </div>

            <p className="text-white text-lg leading-relaxed mb-6 ml-0 md:ml-16">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-2 ml-0 md:ml-16">
              {exp.techStack.map((tech, tIndex) => (
                <span 
                  key={tIndex}
                  className="px-3 py-1 bg-gunmetal text-white text-xs font-mono rounded-sm border border-ash/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
