import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Sparkles, Zap, Brain, Star, TrendingUp, Award, ChevronDown, Copy, Check, ThumbsUp, ThumbsDown, RefreshCw } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
  likes?: number;
  feedback?: 'positive' | 'negative';
}

const PORTFOLIO_KNOWLEDGE: { keywords: string[]; response: string; category?: string }[] = [
  {
    keywords: ['hello', 'hi', 'hey', 'bonjour', 'salut', 'greetings'],
    response: "Hello! 👋 I'm Mouad's AI portfolio assistant. I'm here to help you discover everything about Mouad's expertise, projects, and achievements. What would you like to explore today?",
    category: 'greeting'
  },
  {
    keywords: ['skill', 'tech', 'stack', 'technology', 'tools', 'what can', 'expertise', 'specialize'],
    response: "🎯 **Mouad's Core Competencies**:\n\n• **Frontend**: React, TypeScript, Tailwind CSS, Framer Motion, Three.js\n• **Backend**: Node.js, Express, Prisma, Firebase, PostgreSQL\n• **Design**: Figma, UI/UX Design, Branding, Prototyping\n• **Other**: Git, Agile, WebSockets, Stripe API\n\nWith 2+ years of experience and 4+ successful projects delivered!",
    category: 'skills'
  },
  {
    keywords: ['project', 'work', 'portfolio', 'built', 'created', 'made', 'case study'],
    response: "🚀 **Featured Projects**:\n\n1️⃣ **XREDUCATION Dashboard** - Academic analytics platform with real-time data visualization\n2️⃣ **Zest & Co.** - Premium e-commerce with Framer Motion animations & Stripe payments\n3️⃣ **SweetCake Patisserie** - Elegant bakery website with modern design\n4️⃣ **CAN 2025 Maroc** - Live sports tracking application\n5️⃣ **3D Image Slider** - Interactive visual experience\n\nWhich project interests you?",
    category: 'projects'
  },
  {
    keywords: ['contact', 'reach', 'email', 'phone', 'hire', 'available', 'work together', 'collaborate'],
    response: "📬 **Let's Connect!**\n\n📧 Email: mouadmekrech12@gmail.com\n📱 Phone: +212 768-636308\n📍 Location: Agadir, Morocco\n⏰ Availability: Open for opportunities\n\n✨ Mouad is currently accepting new projects and full-time positions. Use the contact form below or reach out directly!",
    category: 'contact'
  },
  {
    keywords: ['price', 'cost', 'rate', 'budget', 'charge', 'how much', 'quote', 'estimate'],
    response: "💰 **Pricing Information**:\n\nProject costs vary based on:\n• Scope & complexity\n• Timeline requirements\n• Features needed\n• Ongoing support\n\nFor a personalized quote, contact Mouad at mouadmekrech12@gmail.com with your project details. He typically responds within 24 hours!",
    category: 'pricing'
  },
  {
    keywords: ['education', 'study', 'school', 'university', 'degree', 'learn', 'academic'],
    response: "🎓 **Educational Background**:\n\nMouad has formal training in web development and software engineering, complemented by continuous learning and certifications in modern frameworks.\n\nCheck the Education section for detailed academic history and certifications!",
    category: 'education'
  },
  {
    keywords: ['experience', 'year', 'how long', 'senior', 'junior', 'level'],
    response: "📊 **Professional Journey**:\n\n• 2+ years of dedicated development experience\n• 4+ production projects delivered\n• 8+ technologies mastered\n• Multiple industries served (Education, E-commerce, Food & Beverage, Sports)\n\nMouad brings a performance-first, detail-oriented approach to every project!",
    category: 'experience'
  },
  {
    keywords: ['cv', 'resume', 'download', 'portfolio pdf'],
    response: "📄 **CV/Resume**:\n\nYou can download Mouad's complete CV by clicking the 'Resume CV' button in the hero section. It includes detailed work history, skills assessment, education, and achievements!",
    category: 'cv'
  },
  {
    keywords: ['location', 'where', 'based', 'city', 'country', 'morocco', 'agadir', 'remote'],
    response: "🌍 **Location & Remote Work**:\n\nBased in Agadir (Ait Melloul), Morocco.\n\n✅ Available for remote work globally\n✅ Open to relocation opportunities\n✅ Flexible timezone collaboration\n\nMouad works with clients worldwide!",
    category: 'location'
  },
  {
    keywords: ['thank', 'thanks', 'merci', 'appreciate', 'helpful'],
    response: "🙏 You're very welcome! I'm glad I could help. If you have any more questions about Mouad's work or want to discuss a project, feel free to ask. Have an amazing day!",
    category: 'gratitude'
  }
];

const SUGGESTIONS = [
  { icon: Brain, text: "What are Mouad's skills?", query: "Tell me about Mouad's technical skills" },
  { icon: Star, text: "Show me his projects", query: "I'd like to see Mouad's portfolio projects" },
  { icon: TrendingUp, text: "Experience level?", query: "How many years of experience does Mouad have?" },
  { icon: Award, text: "How to contact him?", query: "What's the best way to contact Mouad for a project?" }
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
      text: "Welcome! 👋 I'm Mouad's AI portfolio assistant. I'm here to help you discover everything about Mouad's expertise, innovative projects, and professional journey. What would you like to explore?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<number | null>(null);
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

    // Simulate intelligent response time based on query complexity
    const delay = 800 + Math.random() * 1200;
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

  const handleCopy = (text: string, messageId: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(messageId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleFeedback = (messageId: number, type: 'positive' | 'negative') => {
    setMessages(prev => prev.map(msg => 
      msg.id === messageId ? { ...msg, feedback: type } : msg
    ));
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
        className={`fixed bottom-24 md:bottom-8 right-6 md:right-24 z-50 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl group ${
          isOpen
            ? 'bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-xl border border-blue-400/30 hover:from-blue-600/30 hover:to-purple-600/30 rotate-0'
            : 'bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 hover:shadow-[0_0_40px_rgba(59,130,246,0.6),0_0_80px_rgba(147,51,234,0.4)] hover:scale-110 animate-pulse'
        }`}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
          {isOpen ? (
            <X size={24} className="text-white" />
          ) : (
            <div className="relative">
              <MessageCircle size={24} className="text-white" />
              <Sparkles size={12} className="absolute -top-1 -right-1 text-yellow-300 animate-pulse" />
            </div>
          )}
        </div>
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-white animate-ping" />
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
        <div className="rounded-3xl overflow-hidden border border-red-400/20 shadow-2xl shadow-red-500/20 flex flex-col" style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(31,41,55,0.95) 50%, rgba(0,0,0,0.95) 100%)', backdropFilter: 'blur(25px)', height: '560px' }}>
          
          {/* Header */}
          <div className="px-6 py-5 border-b border-blue-400/10 flex items-center gap-4 shrink-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 border-2 border-blue-400/30 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Bot size={22} className="text-white" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-gray-900 animate-pulse" />
              <div className="absolute -top-1 -left-1">
                <Sparkles size={12} className="text-yellow-300 animate-spin" style={{ animationDuration: '3s' }} />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-sora font-bold text-white text-base truncate">AI Assistant</h3>
              <div className="flex items-center gap-2">
                <p className="text-[10px] text-green-400 uppercase tracking-widest font-bold flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Online
                </p>
                <span className="text-[10px] text-blue-400">•</span>
                <span className="text-[10px] text-purple-400 truncate">Powered by Advanced AI</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-blue-300 hover:text-white hover:bg-white/10 transition-all border border-white/10"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4 scrollbar-thin" style={{ scrollbarWidth: 'thin', scrollbarColor: '#3B82F6 #000000' }}>
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-1 shadow-lg ${
                  msg.sender === 'bot'
                    ? 'bg-gradient-to-br from-blue-500 to-purple-600 border-2 border-blue-400/30 shadow-blue-500/30'
                    : 'bg-gradient-to-br from-gray-600 to-gray-700 border-2 border-gray-500/30'
                }`}>
                  {msg.sender === 'bot' ? (
                    <Bot size={16} className="text-white" />
                  ) : (
                    <User size={16} className="text-white" />
                  )}
                </div>
                <div className={`max-w-[80%] space-y-2 ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className={`px-4 py-3 rounded-2xl text-[13px] leading-relaxed whitespace-pre-line shadow-lg transition-all hover:shadow-xl ${
                    msg.sender === 'bot'
                      ? 'bg-gradient-to-br from-blue-600/20 to-purple-600/20 text-white/95 rounded-tl-md border border-blue-400/20 backdrop-blur-sm'
                      : 'bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-tr-md shadow-blue-500/30'
                  }`}>
                    {msg.text}
                  </div>
                  <div className={`flex items-center gap-2 px-1 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <p className="text-[9px] text-gray-400">
                      {formatTime(msg.timestamp)}
                    </p>
                    {msg.sender === 'bot' && (
                      <>
                        <button
                          onClick={() => handleCopy(msg.text, msg.id)}
                          className="text-gray-400 hover:text-blue-400 transition-colors"
                          title="Copy message"
                        >
                          {copiedId === msg.id ? <Check size={12} /> : <Copy size={12} />}
                        </button>
                        <button
                          onClick={() => handleFeedback(msg.id, 'positive')}
                          className={`text-gray-400 hover:text-green-400 transition-colors ${msg.feedback === 'positive' ? 'text-green-400' : ''}`}
                          title="Helpful"
                        >
                          <ThumbsUp size={12} />
                        </button>
                        <button
                          onClick={() => handleFeedback(msg.id, 'negative')}
                          className={`text-gray-400 hover:text-red-400 transition-colors ${msg.feedback === 'negative' ? 'text-red-400' : ''}`}
                          title="Not helpful"
                        >
                          <ThumbsDown size={12} />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 border-2 border-blue-400/30 flex items-center justify-center shrink-0 mt-1 shadow-lg shadow-blue-500/30">
                  <Bot size={16} className="text-white" />
                </div>
                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-400/20 rounded-2xl rounded-tl-md px-4 py-3 flex items-center gap-1.5 backdrop-blur-sm shadow-lg">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions */}
          {messages.length <= 1 && !isTyping && (
            <div className="px-5 pb-3 shrink-0">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={14} className="text-blue-400" />
                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Quick Start Questions</p>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {SUGGESTIONS.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSend(suggestion.query)}
                    className="flex items-center gap-3 text-xs font-medium text-blue-300 border border-blue-400/20 bg-gradient-to-r from-blue-600/10 to-purple-600/10 hover:border-blue-400/40 hover:text-white hover:from-blue-600/20 hover:to-purple-600/20 px-4 py-2.5 rounded-xl transition-all shadow-md hover:shadow-lg hover:shadow-blue-500/20 text-left group"
                  >
                    <suggestion.icon size={14} className="group-hover:scale-110 transition-transform" />
                    <span>{suggestion.text}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="px-4 py-4 border-t border-blue-400/10 shrink-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5">
            <div className="flex items-center gap-3 bg-white/5 border border-blue-400/20 rounded-2xl px-4 py-3 focus-within:border-blue-400/50 focus-within:shadow-lg focus-within:shadow-blue-500/20 transition-all backdrop-blur-sm">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask anything about Mouad's expertise..."
                className="flex-1 bg-transparent text-white text-sm outline-none placeholder:text-gray-400 font-inter"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim() || isTyping}
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all shadow-md ${
                  input.trim() && !isTyping
                    ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/40 hover:scale-105'
                    : 'bg-white/10 text-gray-400 cursor-not-allowed'
                }`}
              >
                {input.trim() && !isTyping ? (
                  <Send size={16} className="animate-pulse" />
                ) : (
                  <Send size={16} />
                )}
              </button>
            </div>
            <p className="text-[9px] text-gray-500 mt-2 text-center flex items-center justify-center gap-1">
              <Brain size={10} />
              AI-powered assistant • Responses may vary
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
