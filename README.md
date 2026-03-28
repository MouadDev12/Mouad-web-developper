<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# 🚀 Mouad Mekrech - developper Portfolio

A modern, AI-powered portfolio showcasing web development expertise and innovative projects.

<div align="center">

![React](https://img.shields.io/badge/React-19.2.4-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6.2.0-purple?style=for-the-badge&logo=vite)
![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-latest-orange?style=for-the-badge&logo=lucide)

**A full-stack developer portfolio with integrated AI assistant**

[Live Demo](https://your-live-url.com) • [Report Issue](https://github.com/MouadDev12/portfolio/issues) • [Contact](mailto:mouadmekrech12@gmail.com)

</div>

---

## ✨ Features

### 🎯 Core Features
- **Interactive Hero Section** - Dynamic introduction with real-time clock and availability status
- **AI-Powered Chatbot** - Intelligent assistant powered by Gemini API to answer questions about skills, projects, and experience
- **Project Showcase** - Detailed portfolio with 6+ featured projects including dashboards, e-commerce platforms, and management systems
- **Skills Marquee** - Animated display of technical competencies
- **Education Timeline** - Visual representation of academic journey
- **CV Modal** - Downloadable resume integration
- **Responsive Design** - Seamless experience across all devices
- **Dark Theme UI** - Prestige black theme with crimson red accents

### 🤖 AI Chatbot Capabilities
The integrated chatbot can answer questions about:
- Technical skills and tech stack
- Project details and case studies
- Educational background
- Experience and expertise
- Contact information and availability
- Pricing and project estimates

### 🎨 Design Highlights
- Glass morphism effects
- Smooth animations and transitions
- Blueprint grid background
- Red glow effects and gradients
- Modern typography (Sora, Inter, Signature fonts)
- Custom scrollbars and loading screens

---

## 🛠️ Tech Stack

### Frontend
- **React 19.2.4** - UI framework
- **TypeScript 5.8.2** - Type safety
- **Vite 6.2.0** - Build tool and dev server
- **Lucide React** - Icon library
- **React Icons** - Additional icons

### Styling & Animation
- **Custom CSS** - Tailwind-inspired utility classes
- **CSS Animations** - Smooth transitions and effects
- **Glass Morphism** - Frosted glass UI elements

### AI Integration
- **Gemini API** - AI chatbot intelligence
- **Custom Knowledge Base** - Portfolio-specific training data

---

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn
- Gemini API key (for chatbot functionality)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/MouadDev12/portfolio.git
   cd Mouad-web-developper
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

---

## 🚀 Featured Projects

### 1. **XREDUCATION Dashboard**
An educational analytics platform with real-time data visualization
- **Tech**: HTML5, CSS3, JavaScript, Chart.js
- **Live**: [xreducation-dashboard.vercel.app](https://xreducation-dashboard.vercel.app/)
- **GitHub**: [github.com/MouadDev12/Xreducation-Dashboard](https://github.com/MouadDev12/Xreducation-Dashboard)

### 2. **Zest & Co.**
Premium e-commerce website for artisanal beverages
- **Tech**: HTML5, CSS3, JavaScript, Framer Motion, Stripe API
- **Live**: [healthy-drink-shop.vercel.app](https://healthy-drink-shop.vercel.app/)
- **GitHub**: [github.com/MouadDev12/Healthy-Drink-Shop](https://github.com/MouadDev12/Healthy-Drink-Shop)

### 3. **Trainee Management System**
Professional intern tracking and management platform
- **Tech**: React, Redux Toolkit, Tailwind CSS, React Hook Form
- **Live**: [gestionstagiaire.vercel.app](https://gestionstagiaire.vercel.app/)
- **GitHub**: [github.com/MouadDev12/gestion_stagiaire](https://github.com/MouadDev12/gestion_stagiaire)

### 4. **Library Management System**
Comprehensive book and user management solution
- **Tech**: React, Redux Toolkit, Vite, LocalStorage
- **Live**: [gestionlivres.vercel.app](https://gestionlivres.vercel.app/)
- **GitHub**: [github.com/MouadDev12/gestionlivres](https://github.com/MouadDev12/gestionlivres)

### 5. **NeoTech Shop**
Modern electronics e-commerce platform
- **Tech**: React, Tailwind CSS, Framer Motion, Context API
- **Live**: [myshop-react-nu.vercel.app](https://myshop-react-nu.vercel.app/)
- **GitHub**: [github.com/MouadDev12/myshop-react](https://github.com/MouadDev12/myshop-react)

### 6. **CAN 2025 Maroc**
Live sports tracking application for Africa Cup of Nations
- **Tech**: React, Redux Toolkit, WebSockets
- **Live**: [coupe-afrique-can-2025.vercel.app](https://coupe-afrique-can-2025.vercel.app/)
- **GitHub**: [github.com/MouadDev12/coupe_afrique-can-2025](https://github.com/MouadDev12/coupe_afrique-can-2025)

---

## 📱 Components Structure

```
components/
├── Navbar.tsx          # Top navigation bar
├── Sidebar.tsx         # Side navigation menu
├── Hero.tsx            # Landing section with bio
├── Skills.tsx          # Technical skills display
├── SkillsMarquee.tsx   # Animated skills ticker
├── Projects.tsx        # Project showcase grid
├── ProjectModal.tsx    # Detailed project view
├── Education.tsx       # Academic timeline
├── Contact.tsx         # Contact form and info
├── Footer.tsx          # Page footer
├── Chatbot.tsx         # AI assistant interface
├── CVModal.tsx         # Resume viewer
├── LoadingScreen.tsx   # Initial loading animation
└── Logo.tsx            # Brand logo component
```

---

## 🎨 Color Scheme

```css
/* Primary Colors */
--prestige-black: #0a0a0a
--prestige-red: #dc143c
--prestige-gray: #a1a1aa

/* Accent Colors */
--blue-accent: #3b82f6
--purple-accent: #9333ea
```

---

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

---

## 📊 Performance Metrics

- ⚡ **Fast Loading**: Optimized bundle size with Vite
- 📱 **Fully Responsive**: Mobile-first design approach
- ♿ **Accessible**: WCAG compliant UI elements
- 🎯 **SEO Friendly**: Semantic HTML structure

---

## 🌐 Deployment

This portfolio is deployed on **Vercel** for optimal performance:

- Automatic deployments from main branch
- Edge network for global CDN
- Serverless functions support
- Instant rollbacks

---

## 📞 Contact & Social Links

- **Portfolio**: [Your Portfolio URL]
- **GitHub**: [@MouadDev12](https://github.com/MouadDev12)
- **LinkedIn**: [Mouad Mekrech](https://www.linkedin.com/in/mouad-mekrech)
- **Instagram**: [@itzme.mouad](https://www.instagram.com/itzme.mouad/)
- **Email**: mouadmekrech12@gmail.com
- **Phone**: +212 768-636308
- **Location**: Agadir, Morocco

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- Powered by [Vite](https://vitejs.dev/)
- Icons by [Lucide](https://lucide.dev/) and [React Icons](https://react-icons.github.io/)
- AI by [Google Gemini](https://ai.google.dev/)

---

<div align="center">

**Made with ❤️ by Mouad Mekrech**

⭐ Star this repo if you find it helpful!

</div>
