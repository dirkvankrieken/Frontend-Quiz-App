# Frontend Quiz App

This is a Quiz app.
With this app you can test your knowledge of front-end web development technologies.
The app is built with React and for the styling of the app TailwindCSS is used.

# Author

- [github.com/dirkvankrieken](https://github.com/dirkvankrieken)
- [dirkvankrieken.com](https://dirkvankrieken.com)

# What I have learned?

- How to use [Next.js](https://nextjs.org), a React Framework, for my project.
- How to use an UI component from a UI component library, in this case [shadcn](https://ui.shadcn.com/).
- How to implement Dark/light theme and toggle in Next.js and code the whole website to react to the chosen theme using TailwindCSS.
- How to organize my project files and folders effectively, including:
  - Separating components, styles, and data into their respective directories.
  - Using aliases (e.g., @/) for cleaner imports.
- Using TypeScript by typing props and function parameters for better type safety.

## Include coding samples

code sample

```js
import './App.css';
import './components/Start/Start';
import Start from './components/Start/Start';

function App() {
  return (
    <div className="flex border-2 border-black">
      {/* <!-- Quiz menu start --> */}
      <div className="border-2 border-black">
        <h1 className="text-6xl">
          Welcome to the <b>Frontend Quiz!</b>
        </h1>
        <p>
          <i>Pick a subject to get started.</i>
        </p>
      </div>
      <Start />
    </div>
  );
}

export default App;
```

```html
<html>
  this is an html element
</html>
```
