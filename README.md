# Area Landing Page

A modern, responsive landing page built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)

## 📁 Project Structure

```
figma-3/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   └── components/
│       ├── layout/
│       │   ├── Header.tsx     # Main navigation
│       │   └── Footer.tsx     # Footer component
│       ├── sections/
│       │   ├── Hero.tsx       # Hero section
│       │   ├── Partners.tsx   # Partner logos
│       │   ├── Features.tsx   # Features grid
│       │   ├── ImageShowcase.tsx
│       │   ├── BigPicture.tsx
│       │   ├── WhyChoose.tsx
│       │   ├── Testimonial.tsx
│       │   ├── MapSuccess.tsx
│       │   └── ConnectWithUs.tsx
│       └── ui/
│           ├── Button.tsx     # Reusable button
│           └── SectionContainer.tsx
├── public/
│   └── images/               # Image assets
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json

```

## 🎨 Design Features

- Clean, modern aesthetic with serif typography
- Sage green and sand color palette
- Fully responsive layout
- Smooth transitions and hover effects
- Modular component architecture

## 🛠️ Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🎯 Key Components

- **Header**: Fixed navigation with smooth backdrop blur
- **Hero**: Eye-catching section with device mockup
- **Features**: 4-column grid showcasing key benefits
- **Big Picture**: Two-column layout with checklist items
- **Why Choose**: Three-column feature comparison
- **Testimonial**: Client quote with image
- **Map Success**: 3-step process visualization
- **Connect**: Call-to-action section

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to modify the color palette:
- Sage green: Primary brand color
- Sand: Secondary accent color

### Typography
The project uses:
- **Headings**: Georgia serif
- **Body**: Inter sans-serif

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Performance

- Server-side rendering with Next.js
- Optimized images with Next/Image
- Lazy loading components
- Minimal JavaScript bundle

## 📄 License

This project is for demonstration purposes.
