# My Portfolio Website

A modern, interactive, and fully responsive personal portfolio website built with **React.js** and **Bootstrap**. Showcasing skills, projects, and services with smooth animations and engaging user interactions.

## 🎨 Features

- ✨ **Fully Responsive Design** - Mobile, tablet, and desktop optimization
- 🎯 **Interactive Components** - Smooth animations and transitions
- 🌈 **Modern UI** - Gradient design with Bootstrap styling
- 📱 **Mobile-First Approach** - Optimized for all screen sizes
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development
- 🎭 **Smooth Animations** - CSS animations and scroll effects
- 📋 **Contact Form** - Functional contact form with validation
- 🔄 **Intersection Observer** - Lazy loading animations on scroll

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Navigate to project directory**
   ```bash
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

   The application will open in your browser at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized production files will be generated in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
my-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Skills.jsx
│   │   ├── Skills.css
│   │   ├── Projects.jsx
│   │   ├── Projects.css
│   │   ├── Contact.jsx
│   │   ├── Contact.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   ├── index.css
├── index.html
├── vite.config.js
├── package.json
├── .gitignore
└── README.md
```

## 🛠️ Technology Stack

- **React 18** - JavaScript library for building user interfaces
- **Vite** - Next-generation front-end build tool
- **Bootstrap 5** - CSS framework for responsive design
- **React Bootstrap** - React components for Bootstrap
- **CSS3** - Modern styling with animations
- **Intersection Observer API** - For scroll-triggered animations

## 📦 Dependencies

### Main Dependencies
- `react` - UI library
- `react-dom` - React DOM rendering
- `bootstrap` - CSS framework
- `react-bootstrap` - Bootstrap React components
- `aos` - Animate on scroll library (optional)

### Dev Dependencies
- `vite` - Build tool
- `@vitejs/plugin-react` - React plugin for Vite
- `@types/react` - TypeScript types for React
- `@types/react-dom` - TypeScript types for ReactDOM

## 🎨 Customization

### Change Theme Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --text-dark: #2d3748;
  --text-light: #718096;
  --bg-light: #f7fafc;
  --white: #ffffff;
}
```

### Update Content

- **Navbar** - Edit links in `src/components/Navbar.jsx`
- **Hero Section** - Update text and CTA buttons in `src/components/Hero.jsx`
- **About Section** - Modify bio and stats in `src/components/About.jsx`
- **Skills** - Add/remove skills in `src/components/Skills.jsx`
- **Projects** - Update projects array in `src/components/Projects.jsx`
- **Contact** - Update contact info in `src/components/Contact.jsx`
- **Footer** - Modify footer content in `src/components/Footer.jsx`

## 📱 Responsive Breakpoints

The portfolio is optimized for the following breakpoints:

- **Mobile**: < 576px
- **Tablet**: 576px - 992px
- **Desktop**: > 992px

## 🔄 Key Features Explained

### Scroll Animations

Components use the Intersection Observer API to trigger animations when sections come into view:

```jsx
useEffect(() => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      setIsVisible(true)
    }
  }, { threshold: 0.1 })
  // ...
})
```

### Responsive Bootstrap Grid

Uses Bootstrap's responsive grid system:

```jsx
<Row>
  <Col lg={6} md={12} xs={12}>
    {/* Content scales responsively */}
  </Col>
</Row>
```

### Smooth Navigation

Navbar links use smooth scrolling to sections:

```jsx
<Nav.Link href="#section">Link</Nav.Link>
```

## 🚀 Deployment

### Deploy to Vercel

1. Push your project to GitHub
2. Go to [Vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Vite and build accordingly

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Or connect your GitHub repository to Netlify for automatic deployments

### Deploy to GitHub Pages

Update `vite.config.js`:

```js
export default defineConfig({
  base: '/my-portfolio/',
  // ... rest of config
})
```

Then deploy using:

```bash
npm run build
# Upload dist folder to gh-pages branch
```

## 💡 Tips for Customization

1. **Add Icons** - Use Font Awesome CDN in `index.html`
2. **Add Images** - Place in `public` folder and reference with `/filename`
3. **Modify Animations** - Edit keyframes in CSS files
4. **Change Fonts** - Import from Google Fonts in `index.css`
5. **Add Dark Mode** - Use context API to toggle theme classes

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Support

For questions or issues, feel free to:
- Create an issue on GitHub
- Check existing documentation
- Review React and Bootstrap documentation

---

**Happy coding! 🚀**

Built with ❤️ using React and Bootstrap
