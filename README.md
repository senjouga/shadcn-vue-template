# shadcn-vue-template

## Description



`shadcn-vue-template` is a modern web application built using **Vue 3**, **Tailwind CSS**, and **Vite**. The app uses **Pinia** for state management, **Vue Router** for routing, and **Shadcn-Vue** for UI components. It provides a fast and responsive user experience with optimized build configurations.

## Features

- **Vue 3**: A progressive JavaScript framework for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Vite**: A fast build tool and development server.
- **Pinia**: A modern state management solution for Vue.
- **Vue Router**: Official router for Vue.js.
- **Shadcn-Vue**: A UI library that provides customizable components.
- **Class Variance Authority (CVA)**: Utility for managing variant-based class management.
- **Lucide Vue**: A Vue component library of Lucide icons.

## Installation

### Prerequisites

Ensure you have **Node.js** (>=16.x) installed.
recommend node v20.18.3
recommend npm 10.8.2
Tailwind install
npm install -D tailwindcss@3.4.0

### add shadcn-vue components
npx shadcn-vue@latest add button

### Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd my-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Development Server

To start the development server, run:

```bash
npm run dev
```

This will launch the app locally and allow you to view it in the browser at [http://localhost:3000](http://localhost:3000).

### Build for Production

To create a production build, run:

```bash
npm run build
```

This will generate a `dist/` folder with the production-ready files.

### Preview the Build

To preview the production build locally, run:

```bash
npm run preview
```

This serves the build from the `dist/` folder and allows you to verify the build output before deployment.

## Dependencies

### Core Dependencies

- **vue**: The progressive JavaScript framework used for building user interfaces.
- **vue-router**: The official router for Vue.js, handling navigation and routing.
- **pinia**: A modern state management library for Vue.
- **tailwindcss**: Utility-first CSS framework for creating custom designs.
- **shadcn-vue**: A UI component library for Vue.

### Development Dependencies

- **vite**: A fast build tool and development server.
- **@vitejs/plugin-vue**: Vite plugin for Vue.js support.
- **@tailwindcss/postcss**: Tailwind CSS PostCSS plugin.
- **postcss**: CSS postprocessor used to transform styles.
- **autoprefixer**: PostCSS plugin to automatically add vendor prefixes to CSS rules.
- **lucide-vue-next**: Vue component library for Lucide icons.
- **tailwind-merge**: Tool to help merge Tailwind CSS classes.

## Configuration

### Tailwind CSS

Tailwind CSS is configured in `tailwind.config.js`, and additional PostCSS plugins are used for CSS optimization. The app uses `@tailwindcss/postcss` to integrate Tailwind with PostCSS.

### Pinia Store

Pinia is used for managing the app's state. You can define stores in the `src/store` directory.

### Vue Router

Vue Router handles routing and is configured in `src/router/index.js`. You can add new routes and manage navigation here.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

This README provides an overview of your app, setup instructions, and how to run and build the app. You can further customize it based on the project’s specifics.