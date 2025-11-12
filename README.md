# Runner Landing Page

A modern landing page built with Next.js, React, and Tailwind CSS.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

Alternatively, you can use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Tech Stack

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Vercel** - Deployment platform

## Project Structure

```
runner-landing/
├── public/
│   └── images/         # Static images and SVGs
├── src/
│   └── app/
│       ├── globals.css # Global styles with Tailwind
│       ├── layout.tsx  # Root layout
│       └── page.tsx    # Home page
├── next.config.ts      # Next.js configuration
├── tailwind.config.ts  # Tailwind configuration
└── tsconfig.json       # TypeScript configuration
```
