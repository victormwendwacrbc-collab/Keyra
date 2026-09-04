# Keyra - Property Discovery Platform

Keyra is a modern web platform for discovering and exploring properties. Built with Next.js, React, and Tailwind CSS.

## Features

- 🏠 Property search and discovery
- 🔍 Advanced filtering and sorting
- 📸 Image gallery with Cloudinary integration
- 📱 Responsive design
- ⚡ Server-side rendering with Next.js 14

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Images**: Cloudinary CDN
- **API**: Next.js Server Actions

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/victormwendwacrbc-collab/Keyra.git
cd Keyra
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your configuration values.

4. Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Development

### Build for production:

```bash
npm run build
npm start
```

### Run tests:

```bash
npm test
```

### Lint code:

```bash
npm run lint
```

## Project Structure

```
Keyra/
├── app/                    # Next.js app directory (app router)
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   ├── properties/        # Properties routes
│   │   ├── page.tsx       # Properties listing page
│   │   └── [id]/          # Individual property page
│   │       └── page.tsx
│   └── api/               # API routes
│       └── properties/    # Property endpoints
├── components/            # Reusable React components
│   ├── PropertyCard.tsx   # Property card component
│   ├── PropertyGrid.tsx   # Property grid layout
│   ├── SearchBar.tsx      # Search component
│   ├── FilterPanel.tsx    # Filter controls
│   └── Navigation.tsx     # Main navigation
├── lib/                   # Utilities and helpers
│   ├── api.ts             # API client functions
│   ├── types.ts           # TypeScript types
│   └── utils.ts           # Helper functions
├── styles/                # Global styles
│   └── globals.css        # Tailwind imports and global styles
├── public/                # Static assets
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── package.json           # Dependencies and scripts
```

## Available Routes

- `/` - Home page
- `/properties` - Property listing page
- `/properties/[id]` - Individual property details page
- `/api/properties` - Property API endpoints

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for personal or commercial purposes.
