import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

const PORTFOLIO_KNOWLEDGE: { keywords: string[]; response: string }[] = [
  {
    keywords: ['hello', 'hi', 'hey', 'bonjour', 'salut', 'greetings'],
    response: "Hello! I'm Mouad's portfolio assistant. I can tell you about his skills, projects, experience, or how to get in touch. What would you like to know?"
  },
  {
    keywords: ['skill', 'tech', 'stack', 'technology', 'tools', 'what can', 'expertise'],
    response: "Mouad specializes in UI/UX Design, React (Frontend), Node.js & Databases (Backend), and Branding. He has mastered 8+ technologies over 2+ years of hands-on development, delivering 4+ production projects."
  },
  {
    keywords: ['react', 'frontend', 'front-end', 'front end'],
    response: "Mouad has deep expertise in React, building scalable, performance-driven web applications. His frontend stack includes React, Tailwind CSS, Framer Motion, and Chart.js for data visualization."
  },
  {
    keywords: ['backend', 'back-end', 'back end', 'node', 'database', 'server'],
    response: "On the backend, Mouad works with Node.js, Prisma ORM, Firebase, and WebSockets for real-time applications. He architects robust server-side logic and database systems for complex projects."
  },
  {
    keywords: ['project', 'work', 'portfolio', 'built', 'created', 'made'],
    response: "Mouad's featured projects include: a 3D Image Slider, the XREDUCATION Dashboard (academic analytics with Chart.js & Firebase), Zest & Co. (e-commerce with Framer Motion & Stripe), SweetCake Patisserie, and the CAN 2025 Maroc live sports tracker. Want details on any specific project?"
  },
  {
    keywords: ['contact', 'reach', 'email', 'phone', 'hire', 'available', 'work together'],
    response: "You can reach Mouad at:\n- Email: mouadmekrech12@gmail.com\n- Phone: +212 768-636308\n- Location: Agadir, Morocco\n\nHe is currently available for new projects. Scroll down to the contact section to send a message directly!"
  },
  {
    keywords: ['location', 'where', 'based', 'city', 'country', 'morocco', 'agadir'],
    response: "Mouad is based in Agadir (Ait Melloul), Morocco. He works with clients globally and is open to remote collaboration."
  },
  {
    keywords: ['education', 'study', 'school', 'university', 'degree', 'learn'],
    response: "Mouad has a strong academic foundation in web development and software engineering. Check out the Education section of this portfolio for his full academic timeline."
  },
  {
    keywords: ['design', 'ui', 'ux', 'interface', 'branding', 'visual'],
    response: "Mouad specializes in high-fidelity prototypes and prestige digital interfaces. He also has expertise in branding \u2014 crafting unique visual identities that resonate with premium audiences."
  },
  {
    keywords: ['experience', 'year', 'how long', 'senior'],
    response: "Mouad has 2+ years of dedicated experience crafting code, with 4+ delivered projects and 8 technologies mastered. He brings a disciplined, performance-first approach to every engagement."
  },
  {
    keywords: ['cv', 'resume', 'download'],
    response: "You can view Mouad's full CV/Resume by clicking the 'Resume CV' button in the hero section at the top of this portfolio."
  },
  {
    keywords: ['price', 'cost', 'rate', 'budget', 'charge', 'how much'],
    response: "For pricing and project estimates, please reach out directly to Mouad at mouadmekrech12@gmail.com or through the contact form. Rates depend on project scope and complexity."
  },
  {
    keywords: ['thank', 'thanks', 'merci', 'appreciate'],
    response: "You're welcome! Feel free to ask if there's anything else you'd like to know about Mouad's work. Have a great day!"
  }
];

const SUGGESTIONS = [
  "What are Mouad's skills?",
  "Show me his projects",
  "How can I contact him?",
  "Tell me about his experience"
];

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  
  for (const entry of PORTFOLIO_KNOWLEDGE) {
    if (entry.keywords.some(kw => lower.includes(kw))) {
      return entry.response;
    }
  }
  
  return "I appreciate your question! I can help you learn about Mouad's skills, projects, experience, education, or contact information. Could you try rephrasing, or pick one of those topics?";
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: "Welcome! I'm Mouad's portfolio assistant. Ask me about his skills, projects, or how to get in touch.",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSend = (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now(),
      text: messageText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    const delay = 400 + Math.random() * 800;
    setTimeout(() => {
      const response = getResponse(messageText);
      const botMessage: Message = {
        id: Date.now() + 1,
        text: response,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, delay);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-24 md:bottom-8 right-6 md:right-24 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 shadow-lg group ${
          isOpen
            ? 'bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 rotate-0'
            : 'bg-prestige-red hover:shadow-[0_0_30px_rgba(255,62,62,0.4)] hover:scale-105'
        }`}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
          {isOpen ? (
            <X size={22} className="text-white" />
          ) : (
            <MessageCircle size={22} className="text-white" />
          )}
        </div>
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-prestige-black animate-pulse" />
        )}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-44 md:bottom-24 right-6 md:right-24 z-50 w-[360px] max-w-[calc(100vw-48px)] transition-all duration-500 origin-bottom-right ${
          isOpen
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-90 translate-y-4 pointer-events-none'
        }`}
      >
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 flex flex-col" style={{ background: 'rgba(10, 10, 10, 0.92)', backdropFilter: 'blur(20px)', height: '520px' }}>
          
          {/* Header */}
          <div className="px-6 py-5 border-b border-white/5 flex items-center gap-4 shrink-0">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-prestige-red/10 border border-prestige-red/20 flex items-center justify-center">
                <Bot size={20} className="text-prestige-red" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-prestige-dark" />
            </div>
            <div className="flex-1">
              <h3 className="font-sora font-bold text-white text-sm">Mouad's Assistant</h3>
              <p className="text-[10px] text-green-400 uppercase tracking-widest font-bold">Online</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-prestige-gray hover:text-white hover:bg-white/10 transition-all"
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4 scrollbar-thin" style={{ scrollbarWidth: 'thin', scrollbarColor: '#FF3E3E #0A0A0A' }}>
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-1 ${
                  msg.sender === 'bot'
                    ? 'bg-prestige-red/10 border border-prestige-red/20'
                    : 'bg-white/10 border border-white/10'
                }`}>
                  {msg.sender === 'bot' ? (
                    <Bot size={14} className="text-prestige-red" />
                  ) : (
                    <User size={14} className="text-white" />
                  )}
                </div>
                <div className={`max-w-[75%] space-y-1 ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className={`px-4 py-3 rounded-2xl text-[13px] leading-relaxed whitespace-pre-line ${
                    msg.sender === 'bot'
                      ? 'bg-white/5 text-white/90 rounded-tl-md border border-white/5'
                      : 'bg-prestige-red text-white rounded-tr-md'
                  }`}>
                    {msg.text}
                  </div>
                  <p className={`text-[9px] text-prestige-gray px-1 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                    {formatTime(msg.timestamp)}
                  </p>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-3">
                <div className="w-7 h-7 rounded-lg bg-prestige-red/10 border border-prestige-red/20 flex items-center justify-center shrink-0 mt-1">
                  <Bot size={14} className="text-prestige-red" />
                </div>
                <div className="bg-white/5 border border-white/5 rounded-2xl rounded-tl-md px-4 py-3 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-prestige-gray rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 bg-prestige-gray rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 bg-prestige-gray rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions */}
          {messages.length <= 1 && !isTyping && (
            <div className="px-5 pb-3 flex flex-wrap gap-2 shrink-0">
              {SUGGESTIONS.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => handleSend(suggestion)}
                  className="text-[10px] font-bold text-prestige-gray uppercase tracking-wider border border-white/10 bg-white/5 hover:border-prestige-red/30 hover:text-prestige-red px-3 py-1.5 rounded-full transition-all"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          {/* Input Area */}
          <div className="px-4 py-4 border-t border-white/5 shrink-0">
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-2 focus-within:border-prestige-red/40 transition-all">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about Mouad..."
                className="flex-1 bg-transparent text-white text-sm outline-none placeholder:text-white/20 font-inter"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim() || isTyping}
                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                  input.trim() && !isTyping
                    ? 'bg-prestige-red text-white hover:shadow-[0_0_15px_rgba(255,62,62,0.3)]'
                    : 'bg-white/5 text-prestige-gray cursor-not-allowed'
                }`}
              >
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
