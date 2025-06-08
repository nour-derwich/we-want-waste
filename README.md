# Skip Selector Redesign - WeWantWaste

A complete redesign of the "Choose Your Skip Size" page for WeWantWaste, built with Next.js, TypeScript, and Tailwind CSS.

## 🎯 Project Overview

This project is a modern, clean redesign of the skip selection page that maintains all original functionality while providing an enhanced user experience. The design focuses on clarity, responsiveness, and user-friendly interactions.

## ✨ Key Features

### Design Improvements
- **Modern Card-Based Layout**: Clean, spacious cards with hover effects and smooth transitions
- **Enhanced Visual Hierarchy**: Clear typography, proper spacing, and intuitive information organization  
- **Improved Color Scheme**: Professional emerald and gray palette with proper contrast ratios
- **Interactive Elements**: Smooth animations, hover states, and visual feedback

### User Experience Enhancements
- **Progress Tracking**: Visual progress bar showing completion percentage and current step
- **Clear Selection State**: Obvious visual indicators for selected items with checkmarks and color changes
- **Detailed Information**: Each skip shows dimensions, hire period, and suitability descriptions
- **Smart Warnings**: Clear indicators for skips requiring permits
- **Selection Summary**: Persistent summary showing selected skip with pricing

### Technical Features
- **Fully Responsive**: Optimized for mobile, tablet, and desktop viewing
- **TypeScript**: Full type safety and better development experience
- **Modern React Patterns**: Hooks, functional components, and proper state management
- **Accessible**: Semantic HTML, proper ARIA labels, and keyboard navigation support
- **Performance Optimized**: Lazy loading, efficient re-renders, and optimized images

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash

git clone https://github.com/nour-derwich/we-want-waste.git
cd we-want-waste

\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Architecture & Approach

### Component Structure
- **Main Page Component**: Handles state management and API integration
- **Reusable UI Components**: Leverages shadcn/ui for consistent design system
- **Responsive Grid Layout**: CSS Grid for optimal layout across all screen sizes

### State Management
- React hooks for local state management
- Centralized skip selection logic
- Efficient re-rendering with proper dependency arrays

### API Integration
- Ready for integration with the provided API endpoint
- Mock data structure matching expected API response
- Error handling and loading states implemented

### Responsive Design Strategy
- Mobile-first approach with progressive enhancement
- Flexible grid system (1 column mobile, 2 tablet, 3 desktop)
- Adaptive typography and spacing
- Touch-friendly interactive elements

## 📱 Mobile Optimization

- **Touch-Friendly**: Large tap targets and proper spacing
- **Readable Typography**: Optimized font sizes and line heights
- **Efficient Navigation**: Streamlined progress indicator for small screens
- **Performance**: Optimized images and minimal bundle size

## 🎨 Design Decisions

### Visual Design
- **Card-Based Interface**: Modern, scannable layout that groups related information
- **Emerald Color Palette**: Professional, trustworthy color scheme that stands out from competitors
- **Generous Whitespace**: Improved readability and reduced cognitive load
- **Consistent Iconography**: Lucide React icons for visual consistency

### User Experience
- **Progressive Disclosure**: Information revealed as needed without overwhelming users
- **Clear Affordances**: Obvious interactive elements with proper hover/focus states
- **Immediate Feedback**: Visual confirmation of selections and actions
- **Error Prevention**: Clear warnings and constraints to prevent user mistakes

## 🔧 Technical Implementation

### Technologies Used
- **Next.js 14**: App Router for modern React development
- **TypeScript**: Type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **shadcn/ui**: High-quality, accessible component library
- **Lucide React**: Consistent icon system

### Performance Considerations
- **Image Optimization**: Next.js Image component with proper sizing
- **Code Splitting**: Automatic code splitting with Next.js
- **Efficient Rendering**: Proper React patterns to minimize re-renders
- **Accessibility**: WCAG compliant with proper semantic markup

## 🔄 API Integration

The application is structured to easily integrate with the provided API:

\`\`\`typescript
// API endpoint: https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft

interface ApiSkip {
  id: string
  name: string
  size: string
  price: number
  // ... other properties
}
\`\`\`

## 🧪 Testing Approach

- Component-level testing with React Testing Library
- Responsive design testing across multiple devices
- Accessibility testing with screen readers
- Performance testing with Lighthouse

## 🚀 Deployment

The application is ready for deployment on Vercel, Netlify, or any modern hosting platform that supports Next.js.

## 📈 Future Enhancements

- **Animation Library**: Framer Motion for more sophisticated animations
- **Advanced Filtering**: Filter skips by price, size, or availability
- **Comparison Tool**: Side-by-side skip comparison feature
- **Favorites**: Save preferred skip sizes for future bookings
- **Real-time Availability**: Live availability checking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is created as a coding challenge and is available for review and evaluation purposes.
