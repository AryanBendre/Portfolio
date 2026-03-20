import { motion } from 'motion/react';
import { Database, LineChart, Cpu, Wrench, Code2 } from 'lucide-react';

const skillCategories = [
  {
    title: "Core Logic",
    icon: <Code2 className="w-6 h-6 text-electric-purple" />,
    skills: ["Python", "SQL"],
    color: "from-electric-purple to-red-600"
  },
  {
    title: "Data Manipulation",
    icon: <Database className="w-6 h-6 text-cyan" />,
    skills: ["Pandas", "NumPy"],
    color: "from-cyan to-blue-600"
  },
  {
    title: "Vision & Insight",
    icon: <LineChart className="w-6 h-6 text-green-400" />,
    skills: ["Power BI", "Matplotlib", "Seaborn"],
    color: "from-green-400 to-emerald-600"
  },
  {
    title: "AI Integration",
    icon: <Cpu className="w-6 h-6 text-yellow-400" />,
    skills: ["FastAPI", "Hugging Face Spaces", "LLM APIs (Gemini)"],
    color: "from-yellow-400 to-orange-500"
  },
  {
    title: "Tools & Platforms",
    icon: <Wrench className="w-6 h-6 text-purple-400" />,
    skills: ["Excel", "Streamlit", "Docker", "Git", "Power Query"],
    color: "from-purple-400 to-indigo-600"
  }
];

export function SkillTree() {
  return (
    <section className="py-24 px-4 relative z-10 max-w-6xl mx-auto" id="skills">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          Skill Tree
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-electric-purple to-cyan mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-panel p-6 rounded-xl border border-ash/20 relative overflow-hidden group rgb-hover"
          >
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color} opacity-50 group-hover:opacity-100 transition-opacity`}></div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-obsidian/60 rounded-lg shadow-inner">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white tracking-wider">{category.title}</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, sIndex) => (
                <span 
                  key={sIndex}
                  className="px-3 py-1.5 bg-gunmetal/80 text-ash text-sm font-medium rounded-sm border border-ash/10 hover:border-cyan hover:text-white transition-colors cursor-crosshair"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
