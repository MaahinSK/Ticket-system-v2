**What is JSX, and why is it used?**
JSX is HTML-like syntax in JavaScript used by React to define UI components. It makes writing components easier and more readable.

**What is the difference between State and Props?**
State is internal, mutable data managed by the component. Props are external, immutable data passed from parent to child.

**What is the useState hook, and how does it work?**
useState is a React Hook that adds state to functional components. It returns the current state and a function to update it, triggering re-renders.

**How can you share state between components?**
Share state by lifting it to a common parent component and passing it down via props, or using Context API for complex cases.

**How is event handling done in React?**
React uses synthetic events with camelCase names (onClick, onChange). You pass functions as event handlers instead of strings.