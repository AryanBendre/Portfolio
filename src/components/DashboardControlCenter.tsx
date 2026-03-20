import { motion } from 'motion/react';
import { Activity, BarChart2, PieChart, ExternalLink, Trophy, Bus } from 'lucide-react';

const dashboards = [
  {
    title: "National Grid Analysis",
    icon: <BarChart2 className="w-10 h-10 text-cyan" />,
    description: "Interactive dashboard analyzing India's electricity generation trends using Power BI and Ember Energy Data.",
    link: "https://github.com/AryanBendre/National-Electricity-Generation-Dashboard/blob/main/Dashboard_Preview.pdf",
    color: "from-cyan to-blue-600"
  },
  {
    title: "T20 World Cup 2022 Analytics",
    icon: <Trophy className="w-10 h-10 text-electric-purple" />,
    description: "Power BI dashboard evaluating player performance, featuring a star schema data model and advanced DAX metrics for Best XI selection.",
    link: "https://github.com/AryanBendre/T20-Cricket-Dashboard/blob/main/DashBoard_Preview.pdf",
    color: "from-electric-purple to-pink-600"
  },
  {
    title: "Intercity Bus Travel Analytics",
    icon: <Bus className="w-10 h-10 text-green-400" />,
    description: "Interactive Excel dashboard analyzing 500k+ booking records to identify revenue drivers, route demands, and agency performance.",
    link: "https://github.com/AryanBendre/Intercity-Bus-Travel-Analytics/blob/main/DashBoard_Preview.pdf",
    color: "from-green-400 to-emerald-600"
  }
];

export function DashboardControlCenter() {
  return (
    <section className="py-24 px-4 relative z-10 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          Dashboard Control Center
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-electric-purple to-cyan mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {dashboards.map((dashboard, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-panel p-8 rounded-xl border border-ash/20 relative overflow-hidden group rgb-hover flex flex-col items-center text-center"
          >
            <div className={`absolute inset-0 bg-gradient-to-b ${dashboard.color} opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none`}></div>
            
            <div className="p-6 bg-obsidian/60 rounded-full shadow-inner mb-6 border border-ash/10 relative z-10">
              <div className="absolute inset-0 rounded-full border border-cyan/30 animate-ping opacity-20"></div>
              {dashboard.icon}
            </div>

            <h3 className="text-2xl font-display font-bold text-white tracking-wider mb-4">
              {dashboard.title}
            </h3>
            
            <p className="text-ash text-sm leading-relaxed mb-8 flex-grow">
              {dashboard.description}
            </p>

            <a 
              href={dashboard.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 px-6 py-3 bg-gunmetal text-white font-bold uppercase tracking-wider rounded-sm border border-ash/20 hover:border-cyan hover:text-cyan transition-colors flex items-center gap-2"
            >
              <ExternalLink size={16} />
              Launch Interface
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
