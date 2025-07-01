# TBD Portfolio Website

A modern, responsive portfolio website for TBD Software Company, showcasing their expertise in custom web & mobile apps, cloud infrastructure, and full-stack digital solutions.

## 🚀 Features

- **Modern Design**: Clean, professional aesthetic with premium feel
- **Dark/Light Mode**: Seamless theme toggle with system preference detection
- **Responsive**: Mobile-first design that works across all screen sizes
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Interactive Navigation**: Fixed navbar with smooth scrolling
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: TailwindCSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Theme Management**: Custom theme provider with localStorage persistence

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx             # Main page component
├── components/
│   ├── navigation.tsx       # Navigation bar with theme toggle
│   ├── theme-provider.tsx   # Theme context and provider
│   ├── footer.tsx           # Footer component
│   └── sections/
│       ├── hero.tsx         # Hero section with CTA
│       ├── about.tsx        # About/Vision section
│       ├── services.tsx     # Services showcase
│       ├── work.tsx         # Projects portfolio
│       ├── clients.tsx      # Client testimonials
│       ├── team.tsx         # Team members
│       ├── careers.tsx      # Job openings
│       └── contact.tsx      # Contact form and info
├── public/                  # Static assets
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # TailwindCSS configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (#3B82F6 to #1E40AF)
- **Dark Mode**: Custom dark palette with proper contrast
- **Grays**: Neutral grays for text and backgrounds

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900

### Components
- **Buttons**: Primary and secondary variants with hover effects
- **Cards**: Consistent card design with hover animations
- **Forms**: Styled form inputs with focus states
- **Navigation**: Fixed navbar with smooth transitions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tbd-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📱 Sections Overview

### 1. Hero Section
- Company branding and tagline
- Call-to-action buttons
- Animated background elements
- Key statistics

### 2. About Section
- Company vision and mission
- Core values and features
- Download company profile link
- Performance metrics

### 3. Services Section
- 6 main service categories
- Detailed feature lists
- Interactive hover effects
- Why choose us section

### 4. Work Section
- Project portfolio with filtering
- Tech stack tags
- Project categories
- View all projects CTA

### 5. Clients Section
- Client logos grid
- Testimonial cards
- Star ratings
- Client satisfaction stats

### 6. Team Section
- Team member profiles
- Social media links
- Company values
- Professional bios

### 7. Careers Section
- Open job positions
- Company benefits
- Application process
- HR contact information

### 8. Contact Section
- Contact form with validation
- Contact information
- Social media links
- Office location placeholder

## 🎯 Customization

### Colors
Update the color palette in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#eff6ff',
    // ... other shades
    900: '#1e3a8a',
  }
}
```

### Content
- Update company information in respective section components
- Replace placeholder images with actual project screenshots
- Update team member information and photos
- Modify contact details and social media links

### Styling
- Custom CSS classes in `app/globals.css`
- Component-specific styles in individual components
- Tailwind utility classes for rapid styling

## 🔧 Development

### Adding New Sections
1. Create a new component in `components/sections/`
2. Import and add to `app/page.tsx`
3. Update navigation links in `components/navigation.tsx`

### Theme Customization
- Modify `components/theme-provider.tsx` for theme logic
- Update color schemes in `tailwind.config.js`
- Add new theme variables as needed

### Animation
- Use Framer Motion for component animations
- Implement intersection observer for scroll-triggered animations
- Add hover effects with CSS transitions

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions, please contact:
- Email: hello@tbd.com
- Website: [tbd.com](https://tbd.com)

---

Built with ❤️ by TBD Software Company 