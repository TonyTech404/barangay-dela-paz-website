# Barangay Dela Paz Official Website

A modern, responsive website for Barangay Dela Paz, Lungsod ng Biñan, Lalawigan ng Laguna. Built with Next.js 15, this website serves as the official digital platform for the barangay community, providing access to services, news, and important information.

## 🏛️ About This Project

This is the official website for **Barangay Dela Paz** - a vibrant community guided by the motto "Kapayapaan, Kaunlaran, at Pagkakaisa" (Peace, Progress, and Unity). The website serves approximately 15,000 residents and provides:

- **Digital Services**: Online access to barangay clearance, certificates, and document requests
- **Community Information**: News, announcements, and event updates
- **Emergency Resources**: Quick access to emergency contacts and safety information
- **Government Transparency**: Information about barangay officials, projects, and programs
- **Cultural Heritage**: Showcase of local attractions, festivals, and community life

## ✨ Features

### 🌐 **Progressive Web App (PWA)**
- Installable on mobile devices and desktop
- Offline functionality for emergency contacts
- Push notifications for important announcements
- Fast loading and responsive design

### 📱 **Mobile-First Design**
- Fully responsive across all devices
- Touch-friendly navigation
- Optimized for mobile data usage
- Accessible design following WCAG guidelines

### 🏢 **Government Services**
- Online document request system
- Service fee calculator
- Office hours and contact information
- Downloadable forms and requirements

### 📰 **Community Features**
- Latest news and announcements
- Event calendar and community updates
- Photo galleries of local attractions
- Cultural heritage showcase

### 🚨 **Emergency Preparedness**
- Emergency hotlines and contacts
- Evacuation center information
- Disaster preparedness guides
- Safety tips and procedures

## 🛠️ Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Poppins, Open Sans)
- **PWA**: Next.js PWA capabilities
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** 18.18.0 or higher
- **npm**, **yarn**, or **pnpm** package manager

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/your-username/barangay-dela-paz-website.git
   cd barangay-dela-paz-website
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

### Building for Production

1. **Create a production build**
   \`\`\`bash
   npm run build
   # or
   yarn build
   # or
   pnpm build
   \`\`\`

2. **Start the production server**
   \`\`\`bash
   npm run start
   # or
   yarn start
   # or
   pnpm start
   \`\`\`

## 📁 Project Structure

\`\`\`
barangay-dela-paz/
├── app/                    # Next.js App Router pages
│   ├── contact/           # Contact page
│   ├── emergency/         # Emergency information
│   ├── news/             # News and announcements
│   ├── officials/        # Barangay officials
│   ├── projects/         # Community projects
│   ├── services/         # Barangay services
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Homepage
├── components/            # Reusable React components
│   ├── ui/               # shadcn/ui components
│   ├── contact-form.tsx  # Contact form component
│   ├── discover-carousel.tsx # Places carousel
│   ├── footer.tsx        # Site footer
│   ├── header.tsx        # Site header
│   ├── news-card.tsx     # News card component
│   ├── pwa-install-prompt.tsx # PWA install prompt
│   └── quick-link-card.tsx # Quick links component
├── public/               # Static assets
│   ├── images/          # Image files
│   ├── manifest.json    # PWA manifest
│   └── favicon.ico      # Site favicon
├── lib/                 # Utility functions
└── hooks/              # Custom React hooks
\`\`\`

## 🎨 Customization

### Colors and Branding
The website uses a consistent color scheme defined in `tailwind.config.ts`:
- **Primary Blue**: `#0E58D8` (Barangay brand color)
- **Accent Yellow**: `#F4B400` (Call-to-action buttons)
- **Text Colors**: Various shades of gray for optimal readability

### Fonts
- **Headings**: Poppins (600, 700 weights)
- **Body Text**: Open Sans (400, 500, 600 weights)

### Adding Content

1. **News Articles**: Add new articles in the news page data array
2. **Officials**: Update official information in the officials page
3. **Services**: Modify service information in the services page
4. **Images**: Add images to the `/public` folder and update image paths

## 🌐 Deployment

### GitHub Pages (Free Hosting)

1. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Click on **Settings** tab
   - Scroll down to **Pages** section
   - Under **Source**, select **GitHub Actions**

2. **Push your code to trigger deployment:**
   \`\`\`bash
   git add .
   git commit -m "Configure for GitHub Pages deployment"
   git push origin main
   \`\`\`

3. **Access your deployed site:**
   - Your site will be available at: `https://yourusername.github.io/barangay-dela-paz-website/`
   - Check the **Actions** tab to monitor deployment progress

### Vercel (Recommended for Production)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push

### Other Platforms
The website can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📱 PWA Features

The website includes Progressive Web App capabilities:
- **Installable**: Users can install the app on their devices
- **Offline Support**: Emergency contacts work without internet
- **Push Notifications**: For important announcements (when implemented)
- **App-like Experience**: Native app feel on mobile devices

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment-specific settings:
\`\`\`env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_CONTACT_EMAIL=info@delapaz.gov.ph
\`\`\`

### PWA Configuration
PWA settings are configured in:
- `public/manifest.json` - App manifest
- `next.config.mjs` - Next.js configuration

## 🤝 Contributing

We welcome contributions to improve the website! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For technical support or questions about the website:
- **Email**: webmaster@delapaz.gov.ph
- **Phone**: (123) 456-7890
- **Address**: Barangay Hall, 123 Dela Paz Street, Biñan City, Laguna

## 🙏 Acknowledgments

- **Barangay Dela Paz Community** - For their support and feedback
- **Next.js Team** - For the amazing framework
- **Vercel** - For hosting and deployment platform
- **shadcn/ui** - For the beautiful UI components
- **Tailwind CSS** - For the utility-first CSS framework

---

**Barangay Dela Paz** - *Kapayapaan, Kaunlaran, at Pagkakaisa*
