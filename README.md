# WizyBot Chat / React + TypeScript + Vite Project

This is a frontend application built with **React**, **TypeScript**, **Tailwind** and **Vite**. Follow the steps below to clone, install, and run the project locally.

---

## Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [Git](https://git-scm.com/)

---

## Clone the Repository

```bash
git clone https://github.com/hacm1997/wizybot-chat.git
cd your-repo-name
```

## set environment variables

Create the .env file in the root of the project and add the following environment variable:

```bash
VITE_WIZYBOT_API_URL=https://api.wizybot.com
```

## Install Dependencies

Use your preferred package manager:

```bash
# With npm
npm i
# or
npm install
```

## Run the Development Server

Start the development server with:

```bash
# With npm
npm run dev
```

Once running, open your browser and navigate to:

```bash
# With npm
http://localhost:5173/
```

## Project Structure

├── src/

│ ├── assets/ # Static assets

│ ├── components/ # Reusable components (atomic design)

│ └──└── atoms/

│ └──└── molecules/

│ └──└── organisms/

│ └──└── templates/

│ ├── const/ # Global constants

│ ├── hooks/ # Custom hooks

│ ├── store.tsx # Zustand storage

│ ├── types/ # Interfaces or types

│ ├── utils/ # Custom dynamic fucntions

│ └── main.tsx # Entry point

│ └── index.css # Global CSS configuration

├── public/ # Public files

├── index.html # Main HTML file

├── vite.config.ts # Vite configuration

└── tsconfig.json # TypeScript configuration
