# Setup

## TOC

-   [x] Javascript Overview
-   [x] Typescript Overview
-   [x] Project & Toolchain Setup
    -   [x] Npm
    -   [x] VS Code
    -   [x] Emmet example
-   [x] React Basics
    -   [x] JSX (jsx vs elements)
    -   [x] Rendering
    -   [x] Components (functional and class), properties
    -   [x] Component states, state handling rules
    -   [x] Component lifecycle
    -   [x] Component data flow
    -   [x] Event Handling (html vs react), parameters, function vs lambda
    -   [x] List rendering (with keys), why keys are important
-   [x] Forms in React
    -   [x] Controlled Components
    -   [x] Form event handling
    -   [x] Input, Textarea, Select, multiple elements
    -   [x] Lifting state up
    -   [x] Formik
    -   [x] Yup
-   [ ] Integrating With Spring
    -   [x] Spring Project Setup (initializr)
    -   [ ]

## Install Node.js

-   Download an install _Volta_
    `curl https://get.volta.sh | bash`

-   Install _node_ using _Volta_
    `volta install node`

-   Verify that _node_ works
    `node --version`

## Install Visual Studio Code

-   Download it from [here](https://code.visualstudio.com/) and install the following plugins:
-   "Code Runner"
-   "Remote - WSL"
-   "Node.js Extension Pack"
-   "Prettier - Code Formatter"
-   "ESLint"

## Open The Project

-   In VS Code `File > Open Folder`
-   Pick `eisenhower-client`

## Barebones React

-   Create `index.html` in `src`
-   Use `html:5` emmet
-   Add `#root` emmet

## Set Up a Node Project

-   Create a node package using
    `npm init -y`

-   Try running the tests with
    `npm run test`

> This will fail since we have no tests specified

> We can also explain what this `scripts` are for

-   Create `src` folder
-   Create `index.html`
-   Create `main.js`:

    ```javascript
    class Hello {
        message = "Hello, World!";
    }

    console.log(new Hello().message);
    ```

> This can be run with `[Ctrl]` + `[Alt]` + `[N]`

-   Install _prettier_ as a developer dependency
    `npm install -D prettier`
    This is _checkstyle_ for Javascript

-   Go to settings `[Ctrl]` + `[,]`
-   Tick `Prettier: Require Config`
-   Create `.prettierrc` with an empty object in it (`{}`).

> `[Ctrl]`+`[Shift]`+`[P]` opens the commands dialog: find format in it!

-   Try changing the format and saving / formatting it

-   Install _eslint_ with:
    `npm install -D eslint eslint-config-prettier`
-   Create `.eslintrc.json`
-   Set it up with

    ```json
    {
        "extends": ["eslint:recommended", "prettier", "prettier/react"],
        "plugins": [],
        "parserOptions": {
            "ecmaVersion": 2018,
            "sourceType": "module",
            "ecmaFeatures": {
                "jsx": true
            }
        },
        "env": {
            "es6": true,
            "browser": true,
            "node": true
        }
    }
    ```

-   Install _Parcel_
    `npm install -D parcel-bundler`
-   Create _dev_ script for parcel in "scripts"
    `"dev": "npx parcel src/index.html"`
-   Run Parcel
    `npm run dev`

-   Install React
    `npm install react react-dom`

> Here it is useful to talk about where all this stuff is going. What does -D do and how `npx` works.

## Barebones React

-   Add React & React DOM in script tags from `unpkg.com`
-   Add `script` tag and an `App` arrow function:
    ```javascript
    const App = () => {
        return React.createElement(
            "div",
            {},
            React.createElement("h1", {}, "Hello, World!")
        );
    };
    ReactDOM.render(React.createElement(App), document.getElementById("root"));
    ```
-   See how it renders
-   Now talk about the params of `createElement` (tag/component, attributes, children).
-   Show an example of attributes (for example `id`)

## App Setup

-   Create `App.js` and move everything there
-   Add `./App.js` to the `script` tag
-   Create `Box` component:

    ```javascript
    const Box = () => {
        return React.createElement("div", {}, [
            
        ])
    }
    ```

-   Use imports
-   Use `Box` component (composition)
-   Extract `Box` to its own file
-   Refactor `Box` to use `export default Box;`
-   Explain the difference between `export default function Box` and `const Box` (`this` scope!)

## JSX

-   Fix eslint
    `npm install -D babel-eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react`
-   Add new elements to `.eslintrc.json` "extends" part:
    `"plugin:import/errors", "plugin:react/recommended", "plugin:jsx-a11y/recommended",`
-   Add new elements to `.eslintrc.json` "plugins" part:
    `["react", "import", "jsx-a11y"]`
-   Add rules to `.eslintrc.json`:
    ```
    "rules": {
        "react/prop-types": 0,
        "no-console": 1
    },
    ```
-   Add "settings" to `.eslintrc.json`:
    ```
    "settings": {
        "react": {
            "version": "detect"
        }
    }
    ```
-   Convert `Box` to JSX
-   Important to note: This is not javascript in html, but html in javascript! (template)
-   Explain how `{}` works (Javascript expression)

## Hooks

-   Implement `TaskFilter`
-   Explain why we can't modify it (why is it a benefit, because it is declarative)
-   Install the hook checker
    `npm install eslint-plugin-react-hooks`
-   Add to rules:
    `"react-hooks/rules-of-hooks": "error", "react-hooks/exhaustive-deps": "warn"`
-   Add `react-hook` to "plugins"

## Components

-   Create `Todo` component with a callback
-   Create `TodoService`.
-   Explain the `async` there and the syntax sugar (`.then()`)
-   Add mock todos, explain why it needs to go outside of `App`
-   Create the `completeTodo` callback, pass it down the hierarchy
-   Refactor it so that todos can be augmented instead
-   `useEffect` when loading todos
-   Explain _one way data flow_ (parent -> child) and why it is good: easy to debug, children can't mess up parent
-   Extra: show tip for debugging: `JSON.stringify(props, null, 4)`

## Class Components

-   Enable class properties:
    -   `npm install -D babel-eslint @babel/core @babel/preset-env @babel/plugin-proposal-class-properties @babel/preset-react`
    -   create `.babelrc` with this:
        ```
        {
            "presets": ["@babel/preset-react", "@babel/preset-env"],
            "plugins": ["@babel/plugin-proposal-class-properties"]
        }
        ```
    -   Add this to `.eslintrc.json`: `"parser": "babel-eslint"`
-   Implement TODO details as a class component
-   Talk about `componentDidMount` (similar to `useEffect` with no dependency)
-   `this.props` is immutable
-   `this.state` is created once in the constructor after it we **only use** `this.setState()`

## Form Handling

-   Implement `TaskCreator`
-   Refactor `Todo` to have UUIDs (explain why we need it)

## Error Handling

-   Implement `ErrorBoundary`
-   Wrap it in a middleware

## Context

-   Show why `completeTodo` is problematic
-   Create `TodoContext` context
-   Pass it to all necessary components
-   Refactor `Details` to have `TodoContext` and redirect after completion

## Formik & Yup

Formik tutorial [here](https://jaredpalmer.com/formik/docs/tutorial)
Yup tutorial [here](https://github.com/jquense/yup#usage)

-   Refactor the old form to use `useFormik`
-   Add simple validation with Formik (explain why `onBlur` is important combined with `touched`)
-   Introduce Yup and replace `validate` with `validationSchema`
-   Also show how the `formik` object can be spread (`{...formik.getFieldProps("field")}`) on a field
-   Refactor `useFormik` to use the `Formik` component.
-   Refactor it to use `Field` and `ErrorMessage`
-   Refactor the fields to components (`useField`)

## Spring Project

-   Install `shx`: `npm install shx -D`
-   Add commands for parcel:
    ```
    "prebuild": "shx rm -rf dist/*",
    "build": "parcel build src/index.html --public-url ./",
    "dev": "parcel src/index.html --public-url ./",
    "watch": "parcel watch src/index.html --public-url ./"
    ```
