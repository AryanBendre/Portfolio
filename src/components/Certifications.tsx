import { motion } from 'motion/react';
import { ShieldCheck, ExternalLink, Award } from 'lucide-react';

const certifications = [
  {
    title: "Essential for Data Science",
    issuer: "L&T EduTech",
    date: "2025",
    link: "https://birlacollege-my.sharepoint.com/:b:/g/personal/5144984_bkbck_edu_in/IQD1Pt59IL9wSq0QHJ4ggnJoAQGBa-npDQhTiN49xcoOhi8?e=PFcrZf",
    color: "from-blue-500 to-cyan"
  },
  {
    title: "Programming for Data Analytics (Python)",
    issuer: "L&T EduTech",
    date: "2025",
    link: "https://birlacollege-my.sharepoint.com/:b:/g/personal/5144984_bkbck_edu_in/IQAGJRmIge3NTKMuaA_krCeYARVmopYDJnIZjGM3e58Qbfc?e=zaaphA",
    color: "from-blue-500 to-cyan"
  },
  {
    title: "Fundamentals of Data Analytics",
    issuer: "L&T EduTech",
    date: "Apr 2025",
    link: "https://birlacollege-my.sharepoint.com/:b:/g/personal/5144984_bkbck_edu_in/IQDSS12nmjLdT6jbvYjIttajASRDosHLYdqIc4UvXc2Y3Dg?e=ygxoYX",
    color: "from-blue-500 to-cyan"
  },
  {
    title: "Power BI - For Business Applications",
    issuer: "Microsoft Elevate",
    date: "2025",
    link: "https://birlacollege-my.sharepoint.com/:b:/g/personal/5144984_bkbck_edu_in/IQD70Xmt29Q0TLhipnxcHUrEAd6rxnCWRfG_9mhHBlDiPIA?e=DlsiCs",
    color: "from-yellow-400 to-orange-500"
  },
  {
    title: "Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    date: "2025",
    link: "https://birlacollege-my.sharepoint.com/:b:/g/personal/5144984_bkbck_edu_in/IQAxjjgq11s3Ra23VItzsX2AAc9TAfRjPMGmG4XCcc9siq4?e=vCaU18",
    color: "from-green-400 to-emerald-500"
  },
  {
    title: "Data Science & Analytics",
    issuer: "HP LIFE",
    date: "2025",
    link: "https://birlacollege-my.sharepoint.com/:b:/g/personal/5144984_bkbck_edu_in/IQBMcS2HWGRLSpF3coqlxPj3ARvqFNmZrZrabROoQiHQmLw?e=C9hVho",
    color: "from-electric-purple to-pink-500"
  }
];

export function Certifications() {
  return (
    <section className="py-24 px-4 relative z-10 max-w-6xl mx-auto" id="certifications">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          Verified Credentials
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-electric-purple to-cyan mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative flex flex-col p-6 bg-obsidian/40 backdrop-blur-md border border-ash/10 rounded-xl hover:bg-obsidian/80 transition-all duration-300 overflow-hidden cursor-pointer"
          >
            {/* Animated Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
            
            {/* Top Accent Line */}
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${cert.color} opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>

            <div className="flex justify-between items-start mb-4 relative z-10">
              <div className="p-3 bg-gunmetal/80 rounded-lg shadow-inner border border-ash/10 group-hover:border-ash/30 transition-colors">
                <ShieldCheck className="w-6 h-6 text-ash group-hover:text-white transition-colors" />
              </div>
              <ExternalLink className="w-5 h-5 text-ash/50 group-hover:text-cyan transition-colors" />
            </div>

            <div className="relative z-10 flex-grow">
              <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-cyan transition-colors">
                {cert.title}
              </h3>
              <div className="flex items-center gap-2 text-sm font-mono text-ash mb-4">
                <Award className="w-4 h-4" />
                <span>{cert.issuer}</span>
              </div>
            </div>

            <div className="relative z-10 mt-auto pt-4 border-t border-ash/10 flex justify-between items-center">
              <span className="text-xs font-mono text-ash/70 tracking-widest uppercase">
                Acquired
              </span>
              <span className="text-xs font-mono text-electric-purple font-bold bg-electric-purple/10 px-2 py-1 rounded">
                {cert.date}
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
