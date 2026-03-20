/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from './components/Hero';
import { WorkExperience } from './components/WorkExperience';
import { SkillTree } from './components/SkillTree';
import { Certifications } from './components/Certifications';
import { MissionLog } from './components/MissionLog';

export default function App() {
  return (
    <div className="relative w-full min-h-screen bg-obsidian text-white font-mono overflow-x-hidden">
      {/* Global Scanline Effect */}
      <div className="scanlines pointer-events-none"></div>

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <WorkExperience />
        <SkillTree />
        <Certifications />
        <MissionLog />
      </main>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-ash/10 bg-gunmetal/50 mt-24">
        <p className="text-ash text-sm font-mono flex items-center justify-center gap-2">
          <span className="text-electric-purple">&copy;</span> 2026 ARYAN BENDRE. All systems operational.
        </p>
      </footer>
    </div>
  );
}
