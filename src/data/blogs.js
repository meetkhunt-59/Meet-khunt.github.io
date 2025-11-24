export const blogs = [
    {
        id: 1,
        slug: "welcome-to-my-portfolio",
        title: "Welcome to My New Portfolio",
        date: "2023-10-27",
        excerpt: "I'm excited to share my new portfolio website with you all. It's built with React and Vite.",
        content: `
# Welcome to My New Portfolio

I'm excited to share my new portfolio website with you all. It's built with **React** and **Vite**, ensuring fast performance and a smooth user experience.

## Why I Built This

I wanted a place to showcase my projects and share my thoughts on web development. This site serves as a central hub for everything I'm working on.

## Tech Stack

- **React 18**: For building the UI components.
- **Vite**: For fast build times and hot module replacement.
- **Tailwind CSS**: For styling (if I were using it, but I'm using custom CSS!).
- **Framer Motion**: For those smooth animations you see.

Stay tuned for more updates!
    `,
        tags: ["Portfolio", "React", "Web Development"],
        coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1352&q=80"
    },
    {
        id: 2,
        slug: "understanding-react-hooks",
        title: "Understanding React Hooks",
        date: "2023-11-05",
        excerpt: "React Hooks have revolutionized how we write React components. Let's dive into the basics.",
        content: `
# Understanding React Hooks

React Hooks have revolutionized how we write React components. They allow us to use state and other React features without writing a class.

## useState

\`useState\` is the most basic hook. It lets you add state to functional components.

\`\`\`javascript
const [count, setCount] = useState(0);
\`\`\`

## useEffect

\`useEffect\` lets you perform side effects in function components. It serves the same purpose as \`componentDidMount\`, \`componentDidUpdate\`, and \`componentWillUnmount\` in React classes.

\`\`\`javascript
useEffect(() => {
  document.title = \`You clicked \${count} times\`;
});
\`\`\`

Hooks make code cleaner and easier to understand.
    `,
        tags: ["React", "Hooks", "JavaScript"],
        coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
    }
];
