<div align="center">
  <h1>⚡ Create Tailwind Vite</h1>
  <p><strong>The fastest way to create modern React applications</strong></p>
  <p>Zero configuration • Production ready • Lightning fast</p>
  
  <a href="https://www.npmjs.com/package/create-tailvite">
    <img src="https://img.shields.io/npm/v/create-tailvite.svg" alt="npm version">
  </a>
  <a href="https://www.npmjs.com/package/create-tailvite">
    <img src="https://img.shields.io/npm/dm/create-tailvite.svg" alt="npm downloads">
  </a>
  <a href="https://github.com/dipeshgoud/create-tailvite/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/create-tailvite.svg" alt="license">
  </a>
</div>

---

**Create Tailwind Vite** is a professional-grade scaffolding tool that instantly creates modern React applications with Vite and Tailwind CSS. Get a production-ready development environment in seconds with zero configuration required.

## ✨ Features

<table>
<tr>
<td>

### 🚀 **Performance First**
- ⚡ Vite 7.1+ for instant HMR
- 📦 Optimized production builds
- 🔄 Lightning-fast development server

</td>
<td>

### 🎨 **Modern Styling**
- 🎯 Tailwind CSS v4.1+
- 📱 Mobile-first responsive design
- 🎨 Utility-first CSS approach

</td>
</tr>
<tr>
<td>

### ⚛️ **Latest React**
- ⚛️ React 19.1+ with latest features
- 🔧 TypeScript ready out of the box
- 🧩 Modern React patterns

</td>
<td>

### 🛠️ **Developer Experience**
- 🧹 ESLint pre-configured
- 📋 Zero configuration required
- 🔥 Hot module replacement

</td>
</tr>
</table>

## 🚀 Quick Start

### Create a new project
```bash
# Create in a new directory
npx create-tailvite@latest my-awesome-app
cd my-awesome-app
npm run dev
```

### Create in current directory
```bash
# Create in current directory (must be empty)
npx create-tailvite@latest .
npm run dev
```

> **Note**: When using `.`, the current directory must be empty (hidden files like `.git` are allowed).

## 📦 What's Included

| Technology | Version | Purpose |
|------------|---------|----------|
| **Vite** | 7.1+ | ⚡ Lightning-fast build tool and dev server |
| **React** | 19.1+ | ⚛️ Modern UI library with latest features |
| **Tailwind CSS** | 4.1+ | 🎨 Utility-first CSS framework |
| **ESLint** | Latest | 🧹 Code quality and consistency |
| **TypeScript** | Ready | 🔧 Type safety (optional, ready to use) |

## 📋 Requirements

- **Node.js**: Version 18.0.0 or higher
- **Package Manager**: npm (included with Node.js), yarn, or pnpm

> **Tip**: Check your Node.js version with `node --version`

## 🛠️ Usage

### 1. Create Your Project

```bash
# Option 1: Create in new directory
npx create-tailvite@latest my-project
cd my-project

# Option 2: Create in current directory (must be empty)
npx create-tailvite@latest .
```

### 2. Development

Start the development server with hot module replacement:

```bash
npm run dev     # Start dev server
yarn dev        # Using Yarn
pnpm dev        # Using pnpm
```

### 3. Build for Production

Create an optimized production build:

```bash
npm run build   # Build for production
yarn build      # Using Yarn
pnpm build      # Using pnpm
```

### 4. Preview Production Build

Preview your production build locally:

```bash
npm run preview # Preview production build
yarn preview    # Using Yarn
pnpm preview    # Using pnpm
```

## 📁 Project Structure

```
my-awesome-app/
├── 📁 public/              # Static assets
│   └── vite.svg
├── 📁 src/                 # Source code
│   ├── App.css            # Component styles
│   ├── App.jsx            # Main App component
│   ├── index.css          # Global styles + Tailwind
│   └── main.jsx           # Application entry point
├── .eslintrc.cjs          # ESLint configuration
├── .gitignore             # Git ignore rules
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
└── vite.config.js         # Vite configuration
```

## 💻 Commands

### Basic Usage
```bash
npx create-tailvite@latest <project-name>
```

### Arguments
| Argument | Description | Example |
|----------|-------------|---------|
| `<project-name>` | Name of your project directory | `my-app` |
| `.` | Create in current directory (must be empty) | `.` |

### Examples
```bash
# Create a new project
npx create-tailvite@latest my-react-app

# Create in current directory
npx create-tailvite@latest .

# Using different package managers
yarn create tailvite@latest my-app
pnpm create tailvite@latest my-app
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. 🍴 Fork the repository
2. 🌟 Create your feature branch (`git checkout -b feature/amazing-feature`)
3. 💾 Commit your changes (`git commit -m 'Add amazing feature'`)
4. 📤 Push to the branch (`git push origin feature/amazing-feature`)
5. 🔄 Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Dipesh Goud**
- 🐙 GitHub: [@dipeshgoud](https://github.com/dipeshgoud)
- 📦 npm: [create-tailvite](https://www.npmjs.com/package/create-tailvite)

---

<div align="center">
  <p>Made with ❤️ for the React community</p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>