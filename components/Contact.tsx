import React from 'react';
import { Send, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-24 text-center space-y-4">
        <span className="text-prestige-red font-bold text-[10px] uppercase tracking-[0.4em]">Inquiries</span>
        <h2 className="font-sora text-4xl md:text-7xl font-extrabold text-white tracking-tighter">
          Let's <span className="text-prestige-gray">Connect</span>
        </h2>
        <p className="text-prestige-gray text-lg max-w-2xl mx-auto mt-6">
          Every elite digital product begins with a strategic conversation. 
          Ready to elevate your vision?
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Contact Info */}
        <div className="lg:col-span-2 space-y-8">
          <div className="glass-panel rounded-prestige p-10 space-y-12">
            <h3 className="text-2xl font-bold text-white font-sora">Information</h3>
            
            <div className="space-y-10">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-prestige-gray group-hover:text-prestige-red group-hover:bg-prestige-red/10 transition-all border border-white/5 group-hover:border-prestige-red/20">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-[10px] text-prestige-gray uppercase tracking-[0.2em] font-bold mb-1">Email</div>
                  <div className="text-white font-bold text-base md:text-lg tracking-tight">mouadmekrech12@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-prestige-gray group-hover:text-prestige-red group-hover:bg-prestige-red/10 transition-all border border-white/5 group-hover:border-prestige-red/20">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-[10px] text-prestige-gray uppercase tracking-[0.2em] font-bold mb-1">Based In</div>
                  <div className="text-white font-bold text-lg tracking-tight">Agadir, Morocco</div>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-prestige-gray group-hover:text-prestige-red group-hover:bg-prestige-red/10 transition-all border border-white/5 group-hover:border-prestige-red/20">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-[10px] text-prestige-gray uppercase tracking-[0.2em] font-bold mb-1">Let's Talk</div>
                  <div className="text-white font-bold text-lg tracking-tight">+212 768-636308</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-prestige-red rounded-prestige p-10 text-white shadow-2xl shadow-prestige-red/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
              <Send size={80} />
            </div>
            <p className="text-xl font-bold leading-relaxed italic relative z-10 font-sora">
                "Behind every line of code is an even greater story."
              
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3">
          <form className="glass-panel p-10 md:p-14 rounded-prestige space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] text-prestige-gray font-bold ml-1">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white outline-none focus:border-prestige-red transition-all font-medium placeholder:text-white/20"
                  placeholder="Enter your name"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] text-prestige-gray font-bold ml-1">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white outline-none focus:border-prestige-red transition-all font-medium placeholder:text-white/20"
                  placeholder="name@email.com"
                />
              </div>
            </div>
            
            <div className="space-y-3">
              <label className="text-[10px] uppercase tracking-[0.2em] text-prestige-gray font-bold ml-1">Message</label>
              <textarea 
                rows={6}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white outline-none focus:border-prestige-red transition-all font-medium resize-none placeholder:text-white/20"
                placeholder="Briefly describe your project goals..."
              ></textarea>
            </div>

            <button className="w-full py-5 rounded-full bg-white text-prestige-black font-extrabold flex items-center justify-center gap-3 hover:bg-prestige-red hover:text-white transition-all shadow-xl hover:shadow-prestige-red/30 group">
              Send Message 
              <div className="w-8 h-8 rounded-full bg-prestige-black text-white flex items-center justify-center group-hover:bg-white group-hover:text-prestige-black transition-all">
                <ArrowRight size={18} />
              </div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;