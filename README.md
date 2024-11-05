<h1 align="center"><picture>
  <source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a1/512.webp" type="image/webp">
  <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a1/512.gif" alt="💡" width="32" height="32">
</picture><a href="https://mini-app-sandbox.vercel.app/" target="_blank">Mini-App Sandbox</a><picture>
  <source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a1/512.webp" type="image/webp">
  <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a1/512.gif" alt="💡" width="32" height="32">
</picture></h1>

## Abstract:
A NextJS / React sandbox for experimenting with new & interesting libraries.

## Preview:
[//]: <> (Provide ONE gif or screenshot of your application - choose the "coolest" piece of functionality to show off.)
<div align="center">
  <img src="/lib/assets/images/site-nav.gif" alt="preview of app navigation" width="500px" height="auto">
</div>

## Installation Instructions:
[//]: <> (What steps does a person have to take to get your app cloned down and running?)

> [!WARNING]
> **[Node.js](https://nodejs.org/en) & [npm](https://www.npmjs.com/) are required to run this app.**<br>
> _Please ensure you have both installed on your machine before proceeding._

- _(optional) *Fork this project to your own Github account._
- Clone the repository to your local machine.
- `cd` into the project folder.
- Use the `npm install` command to install the project dependencies.
- Use the `npm run dev` command to run a preview version of the app.
- Check the console for the `PORT` & copy/paste `localhost:PORT` into your web browser.
- If you would like to work with your own version of the API, fork [this repo](https://github.com/seth-way/degs-o-kev-bacon-api) & follow the instructions in the README.

## Tech Stack + Features

### Frameworks

- [Next.js](https://nextjs.org/) – React framework for building performant apps with the best developer experience

### Platforms

- [Vercel](https://vercel.com/) – Easily preview & deploy changes with git

### UI

- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework for rapid UI development
- [Radix](https://www.radix-ui.com/) – Primitives like modal, popover, etc. to build a stellar user experience
- [Framer Motion](https://framer.com/motion) – Motion library for React to animate components with ease
- [Lucide](https://lucide.dev/) – Beautifully simple, pixel-perfect icons
- [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) – Optimize custom fonts and remove external network requests for improved performance
- [`ImageResponse`](https://nextjs.org/docs/app/api-reference/functions/image-response) – Generate dynamic Open Graph images at the edge

### Hooks and Utilities

- `useIntersectionObserver` –  React hook to observe when an element enters or leaves the viewport
- `useLocalStorage` – Persist data in the browser's local storage
- `useScroll` – React hook to observe scroll position ([example](https://github.com/steven-tey/precedent/blob/main/components/layout/navbar.tsx#L12))
- `nFormatter` – Format numbers with suffixes like `1.2k` or `1.2M`
- `capitalize` – Capitalize the first letter of a string
- `truncate` – Truncate a string to a specified length
- [`use-debounce`](https://www.npmjs.com/package/use-debounce) – Debounce a function call / state update

### Code Quality

- [TypeScript](https://www.typescriptlang.org/) – Static type checker for end-to-end typesafety
- [Prettier](https://prettier.io/) – Opinionated code formatter for consistent code style
- [ESLint](https://eslint.org/) – Pluggable linter for Next.js and TypeScript

## Acknowledgement:
This NextJS app was built on [Steven Tey's](https://twitter.com/steventey) [Precedent](https://github.com/steven-tey/precedent) boilerplate template.
