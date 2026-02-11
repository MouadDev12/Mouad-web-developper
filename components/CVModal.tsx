
import React from 'react';
import { X, Download, Printer, Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

interface CVModalProps {
  onClose: () => void;
}

const CVModal: React.FC<CVModalProps> = ({ onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#060B14]/90 backdrop-blur-xl" onClick={onClose}></div>
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl h-[90vh] bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col no-print">
        {/* Header/Actions */}
        <div className="bg-slate-50 border-b p-4 flex justify-between items-center no-print shrink-0">
          <div className="flex items-center gap-4">
            <h2 className="font-sora font-bold text-slate-700 text-sm md:text-base">MOUAD_MEKRECH_CV.pdf</h2>
            <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-bold">PROFESSIONAL</span>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={handlePrint}
              className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-600 flex items-center gap-2 px-3 text-xs font-bold"
            >
              <Printer size={16} /> <span className="hidden sm:inline">Print / PDF</span>
            </button>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-600"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* CV Content (The actual "PDF" look) - flex-1 and min-h-0 ensure scroll works */}
        <div className="flex-1 overflow-y-auto bg-slate-200 p-4 md:p-12 font-inter min-h-0">
          <div id="cv-printable" className="bg-white mx-auto shadow-lg max-w-[210mm] min-h-[297mm] p-8 md:p-12 text-slate-800 relative">
            
            {/* Header Section */}
            <header className="flex flex-col md:flex-row justify-between border-b-2 border-slate-900 pb-8 mb-8">
              <div className="flex gap-6">
                <div className="w-24 h-32 md:w-32 md:h-40 rounded bg-slate-100 border overflow-hidden shrink-0">
                  <img 
                    src="https://media.licdn.com/dms/image/v2/D4E03AQF4O3F9z9-fXQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715444853037?e=1746057600&v=beta&t=U3ZJb6nF0V9Y7w-p7vYV-k-j-U-Y-v-q-Z-q-Y-j-V-k" 
                    alt="Mouad Mekrech" 
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://picsum.photos/seed/mouad/600/800";
                    }}
                  />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none mb-2">MOUAD<br/>MEKRECH</h1>
                  <p className="text-lg md:text-xl font-medium text-slate-600 uppercase tracking-widest">DÉVELOPPEUR WEB FULL-STACK</p>
                </div>
              </div>
              <div className="mt-6 md:mt-0 text-right text-xs space-y-2">
                <p className="flex items-center justify-end gap-2"><span className="font-bold">mouadmekrech12@gmail.com</span> <Mail size={14}/></p>
                <p className="flex items-center justify-end gap-2"><span className="font-bold">+212 768-636308</span> <Phone size={14}/></p>
                <p className="flex items-center justify-end gap-2"><span className="font-bold">linkedin.com/in/mouad-mekrech</span> <Linkedin size={14}/></p>
                <p className="flex items-center justify-end gap-2"><span className="font-bold">github.com/mouad-mekrech</span> <Github size={14}/></p>
                <p className="flex items-center justify-end gap-2"><span className="font-bold uppercase">Ait Melloul, Maroc</span> <MapPin size={14}/></p>
              </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Left Column */}
              <div className="md:col-span-1 space-y-8">
                <section>
                  <h3 className="text-lg font-black uppercase border-b border-slate-300 mb-4 pb-1">Formation</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-xs uppercase leading-tight">TECHNICIEN SPÉCIALISÉ EN DÉVELOPPEMENT WEB</h4>
                      <p className="text-[10px] text-slate-500">Ista AIT MELLOUL | 2024 - Présent</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-xs uppercase leading-tight">TECHNICIEN DESSINATEUR BÂTIMENT</h4>
                      <p className="text-[10px] text-slate-500">Ista INZEGANE | 2022 - 2024</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-xs uppercase leading-tight">FORMATION QUALIFIANTE MÉTREUR</h4>
                      <p className="text-[10px] text-slate-500">Ista TASSILA | 2021 - 2022</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-xs uppercase leading-tight">BACCALAURÉAT SCIENCE VIE ET TERRE</h4>
                      <p className="text-[10px] text-slate-500">Lycée Qualifiante Essafa | 2019 - 2020</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-lg font-black uppercase border-b border-slate-300 mb-4 pb-1">Compétences</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-[10px] font-black uppercase text-slate-400 mb-2">Développement</h4>
                      <ul className="text-xs font-bold space-y-1">
                        <li>HTML5 / CSS3</li>
                        <li>JavaScript</li>
                        <li>Bootstrap / Tailwind</li>
                        <li>React.js / Redux</li>
                        <li>PHP / MySQL</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase text-slate-400 mb-2">Outils & Bases</h4>
                      <ul className="text-xs font-bold space-y-1">
                        <li>MySQL</li>
                        <li>Figma UI/UX</li>
                        <li>Git et GitHub</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-lg font-black uppercase border-b border-slate-300 mb-4 pb-1">Langues</h3>
                  <div className="space-y-2 text-xs font-bold">
                    <p>ARABE : <span className="font-normal text-slate-600">LANGUE MATERNELLE</span></p>
                    <p>FRANCAIS : <span className="font-normal text-slate-600">COURANT</span></p>
                    <p>ANGLAIS : <span className="font-normal text-slate-600">INTERMÉDIAIRE</span></p>
                  </div>
                </section>

                <section>
                  <h3 className="text-lg font-black uppercase border-b border-slate-300 mb-4 pb-1">Loisirs</h3>
                  <ul className="text-xs font-bold space-y-1">
                    <li>Basketball</li>
                    <li>Aikido</li>
                    <li>Music</li>
                  </ul>
                </section>
              </div>

              {/* Right Column */}
              <div className="md:col-span-2 space-y-8">
                <section>
                  <h3 className="text-lg font-black uppercase border-b border-slate-300 mb-4 pb-1">Profil</h3>
                  <p className="text-xs leading-relaxed text-slate-600">
                    Développeur Full-Stack passionné par la création de produits numériques modernes et évolutifs. 
                    Actuellement étudiant à l'ISTA AIT MELLOUL, spécialisé dans les technologies web de pointe 
                    et les solutions innovantes.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-black uppercase border-b border-slate-300 mb-4 pb-1">Expérience Professionnelle</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-black text-sm uppercase italic">DESSINATEUR BÂTIMENT; ARCHICAD (2D ET 3D)</h4>
                      <p className="text-[10px] font-bold text-slate-500 mb-2">ARCHITECTE U.N.P.L, INZEGANE | 01-03-2024 — 31-03-2024</p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Modélisation de projets architecturaux sur ARCHICAD en 2D et 3D. 
                        Réalisation de plans d'étage, coupes et façades. 
                        Export de documents PDF, DWG et IFC pour coordination technique.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-black text-sm uppercase italic">MÉTREUR : AUTOCAD</h4>
                      <p className="text-[10px] font-bold text-slate-500 mb-2">CABINET BOULMERS, AIT MELLOUL | 20-06-2022 — 16-07-2022</p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Participation aux travaux topographiques sur le terrain. 
                        Mise au net de plans topographiques sur AutoCAD à partir de levés terrain.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-lg font-black uppercase border-b border-slate-300 mb-4 pb-1">Projets</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-black text-sm uppercase decoration-[#3FA9FF] decoration-2 underline underline-offset-4 mb-2">XREDUCATION DASHBOARD</h4>
                      <p className="text-xs text-slate-600 mb-2">
                        Plateforme d'administration éducative moderne développée pour gérer cours, étudiants, revenus et statistiques.
                      </p>
                      <p className="text-[9px] font-black text-slate-400">TECH: HTML5 / CSS3 / JAVASCRIPT / FIGMA</p>
                    </div>
                    <div>
                      <h4 className="font-black text-sm uppercase decoration-[#3FA9FF] decoration-2 underline underline-offset-4 mb-2">ZEST & CO. — PREMIUM DRINKS</h4>
                      <p className="text-xs text-slate-600 mb-2">
                        Site interactif dédié à la vente de boissons artisanales.
                      </p>
                      <p className="text-[9px] font-black text-slate-400">TECH: REACT / JAVASCRIPT / HTML5 / CSS3 / FONT AWESOME</p>
                    </div>
                    <div>
                      <h4 className="font-black text-sm uppercase decoration-[#3FA9FF] decoration-2 underline underline-offset-4 mb-2">CAN 2025 — APP WEB</h4>
                      <p className="text-xs text-slate-600 mb-2">
                        Application responsive pour suivre la Coupe d'Afrique des Nations 2025.
                      </p>
                      <p className="text-[9px] font-black text-slate-400">TECH: REACT / REDUX TOOLKIT / CSS3 / REACT ROUTER</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
              @media print {
                #root { display: none !important; }
                body { background: white !important; margin: 0 !important; }
                #cv-printable { 
                  margin: 0 !important; 
                  padding: 10mm !important; 
                  box-shadow: none !important; 
                  width: 100% !important;
                }
                .no-print { display: none !important; }
              }
            `}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVModal;
