# Almas Ali - Personal Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS, showcasing product management expertise and professional experience in FinTech.

## 🚀 Features

- **Responsive Design** - Fully responsive across all device sizes
- **Dark Mode** - Toggle between light and dark themes
- **Smooth Animations** - Built with Framer Motion for fluid interactions
- **Interactive Projects** - Detailed project modals with comprehensive information
- **Modern UI** - Clean, professional design with Tailwind CSS
- **Performance Optimized** - Built with Vite for fast loading and optimal performance

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment Ready**: Optimized for static hosting

## 🎯 Sections

1. **Hero** - Professional introduction with key highlights
2. **About** - Detailed professional summary and work experience
3. **Skills** - Technical and leadership capabilities
4. **Projects** - Featured product management initiatives with detailed case studies
5. **Contact** - Direct contact information and social links

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/almas-ali-portfolio.git
   cd almas-ali-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🚀 Deployment

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Deploy automatically with zero configuration

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Run: `npm run deploy`

## 🎨 Customization

### Personal Information
Update the default props in `src/App.jsx`:
```javascript
export default function Portfolio({
  name = "Your Name",
  title = "Your Title",
  profileImage = "your-image-url",
  primaryColor = "#4f46e5",
  darkMode = false
})
```

### Content Updates
- **Projects**: Update the `projects` array in `src/App.jsx`
- **Skills**: Modify the `skills` array
- **Experience**: Update the `experience` array
- **Contact Info**: Change contact details in the contact section

### Styling
- **Colors**: Update `primaryColor` prop or modify Tailwind classes
- **Fonts**: Change font family in `tailwind.config.js`
- **Layout**: Modify component structure in `src/App.jsx`

## 📧 Contact

- **Email**: almas@niveshpe.com
- **WhatsApp**: +91 9677136490
- **LinkedIn**: [linkedin.com/in/alialmas](https://linkedin.com/in/alialmas)
- **GitHub**: [github.com/almasali03](https://github.com/almasali03)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you have suggestions for improvements, please open an issue or submit a pull request.

---

**Built with ❤️ by Almas Ali**