import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Target, Wrench, ExternalLink, BarChart2, Bus, Cpu, Activity, Server } from 'lucide-react';

const liveProjects = [
  {
    title: "Financial Awareness AI",
    type: "NEURAL NETWORK",
    icon: <Cpu className="w-8 h-8 text-electric-purple" />,
    loadout: ["React", "FastAPI", "Python", "Hugging Face"],
    objective: "Built and deployed an AI-based personal financial assistant to guide users on smart financial habits.",
    color: "from-electric-purple to-pink-600",
    link: "https://aryanbendre-finsightai2006.hf.space/"
  },
  {
    title: "PocketPath – AI Travel Itinerary Generator",
    type: "NEURAL NETWORK",
    icon: <Cpu className="w-8 h-8 text-cyan" />,
    loadout: ["Python", "Streamlit", "Gemini API", "Unsplash API", "GitHub Actions", "Hugging Face"],
    objective: "Built an AI-powered travel planning application that generates budget-optimized itineraries with day-wise schedules. Implemented dynamic UI theming using Unsplash API image luminance detection and enabled PDF export. Deployed using GitHub Actions CI/CD and Hugging Face Spaces.",
    color: "from-cyan to-blue-600",
    link: "https://aryanbendre-pocketpath.hf.space/"
  }
];

const dashboards = [
  {
    title: "National Grid Analysis",
    type: "DATA MATRIX",
    icon: <BarChart2 className="w-8 h-8 text-green-400" />,
    loadout: ["Power BI", "Ember Energy Data", "Data Modeling"],
    objective: "Interactive dashboard analyzing India's electricity generation trends using Power BI and Ember Energy Data.",
    color: "from-green-400 to-emerald-600",
    link: "https://github.com/AryanBendre/National-Electricity-Generation-Dashboard/blob/main/Dashboard_Preview.pdf"
  },
  {
    title: "T20 World Cup 2022 Analytics",
    type: "DATA MATRIX",
    icon: <Trophy className="w-8 h-8 text-yellow-500" />,
    loadout: ["Power BI", "DAX", "Star Schema"],
    objective: "Power BI dashboard evaluating player performance, featuring a star schema data model and advanced DAX metrics for Best XI selection.",
    color: "from-yellow-500 to-orange-600",
    link: "https://github.com/AryanBendre/T20-Cricket-Dashboard/blob/main/DashBoard_Preview.pdf"
  },
  {
    title: "Intercity Bus Travel Analytics",
    type: "DATA MATRIX",
    icon: <Bus className="w-8 h-8 text-red-500" />,
    loadout: ["Excel", "Data Analysis", "Pivot Tables"],
    objective: "Interactive Excel dashboard analyzing 500k+ booking records to identify revenue drivers, route demands, and agency performance.",
    color: "from-red-500 to-rose-600",
    link: "https://github.com/AryanBendre/Intercity-Bus-Travel-Analytics/blob/main/DashBoard_Preview.pdf"
  }
];

export function MissionLog() {
  const [activeTab, setActiveTab] = useState<'live' | 'telemetry'>('live');
  const currentData = activeTab === 'live' ? liveProjects : dashboards;

  useEffect(() => {
    const handleTabChange = (e: Event) => {
      const customEvent = e as CustomEvent<'live' | 'telemetry'>;
      setActiveTab(customEvent.detail);
    };
    window.addEventListener('changeProjectTab', handleTabChange);
    return () => window.removeEventListener('changeProjectTab', handleTabChange);
  }, []);

  return (
    <section className="py-24 px-4 relative z-10 max-w-6xl mx-auto" id="projects">
      <div className="text-center mb-12">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          Active Operations
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-electric-purple to-cyan mx-auto mb-8"></div>
        
        {/* Cyberpunk Tabs */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <button
            onClick={() => setActiveTab('live')}
            className={`flex items-center gap-2 px-6 py-3 font-mono text-sm tracking-widest uppercase transition-all duration-300 border-b-2 ${
              activeTab === 'live' 
                ? 'border-cyan text-cyan bg-cyan/10 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]' 
                : 'border-ash/20 text-ash hover:text-white hover:border-ash/50'
            }`}
          >
            <Server className="w-4 h-4" />
            Live Deployments
          </button>
          <button
            onClick={() => setActiveTab('telemetry')}
            className={`flex items-center gap-2 px-6 py-3 font-mono text-sm tracking-widest uppercase transition-all duration-300 border-b-2 ${
              activeTab === 'telemetry' 
                ? 'border-electric-purple text-electric-purple bg-electric-purple/10 drop-shadow-[0_0_8px_rgba(188,19,254,0.5)]' 
                : 'border-ash/20 text-ash hover:text-white hover:border-ash/50'
            }`}
          >
            <Activity className="w-4 h-4" />
            Telemetry Arrays
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-8"
        >
          {currentData.map((campaign, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-panel p-8 rounded-xl border-l-4 border-l-ash/20 relative overflow-hidden group rgb-hover"
            >
              <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${campaign.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-obsidian/60 rounded-full shadow-inner border border-ash/10">
                    {campaign.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white tracking-wider flex items-center gap-3">
                    {campaign.link ? (
                      <a href={campaign.link} target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors flex items-center gap-2">
                        {campaign.title}
                        <ExternalLink className="w-6 h-6" />
                      </a>
                    ) : (
                      campaign.title
                    )}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-ash text-sm font-mono bg-obsidian/50 px-4 py-2 rounded-sm border border-ash/10">
                  <span className={activeTab === 'live' ? 'text-cyan font-bold' : 'text-electric-purple font-bold'}>
                    {campaign.type}
                  </span>
                  <span className="mx-2 opacity-50">|</span>
                  <span className="text-green-400">STATUS:</span> ONLINE
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-4 bg-obsidian/40 p-4 rounded-lg border border-ash/5">
                  <div className="flex items-center gap-2 mb-3 text-ash font-bold tracking-widest text-sm uppercase">
                    <Wrench className={activeTab === 'live' ? 'w-4 h-4 text-cyan' : 'w-4 h-4 text-electric-purple'} />
                    Tech Loadout
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {campaign.loadout.map((tech, tIndex) => (
                      <span 
                        key={tIndex}
                        className="px-2 py-1 bg-gunmetal text-white text-xs font-mono rounded-sm border border-ash/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="md:col-span-8 bg-obsidian/40 p-4 rounded-lg border border-ash/5">
                  <div className="flex items-center gap-2 mb-3 text-ash font-bold tracking-widest text-sm uppercase">
                    <Target className={activeTab === 'live' ? 'w-4 h-4 text-cyan' : 'w-4 h-4 text-electric-purple'} />
                    Objective
                  </div>
                  <p className="text-white text-lg leading-relaxed">
                    {campaign.objective}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
