# Training Notes

## Install Node.js (when using WSL)

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

-   Create a folder named `eisenhower-client`
-   In VS Code `File > Open Folder`
-   Pick `eisenhower-client`

## Barebones React

-   Create `index.html` in `src`
-   Show `html:5` emmet
-   Show `#root` emmet

## Set Up a Node Project

-   Create a node package using
    `npm init -y`
-   Try running the tests with
    `npm run test`

> This will fail since we have no tests specified

> We can also explain what this `scripts` are for

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

> Explain that this is _checkstyle_ for Javascript

> We can also talk about what developer dependencies are here

-   Go to settings `[Ctrl]` + `[,]`
-   Tick `Prettier: Require Config`

> Explains what this does

-   Create `.prettierrc` with an empty object in it (`{}`).
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

> `[Ctrl]`+`[Shift]`+`[P]` opens the commands dialog: find format in it!

-   Try changing the format and saving / formatting it
-   Install _Parcel_
    `npm install -D parcel-bundler`
-   Create _dev_ script for parcel in "scripts"
    `"dev": "npx parcel src/index.html"`
-   Run Parcel
    `npm run dev`

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

-   Install React
    `npm install react react-dom`
-   Remove the `unpkg` `script` tags
-   Create `App.js` and move everything there
-   Add `./App.js` to the `script` tag
-   Add react imports: 
```javascript
import React from "react";
import ReactDOM from "react-dom";
```

## Composition

-   Create the `Box` component in the `App` file:

```javascript
const Box = () => {
    return React.createElement("div", {}, [
        React.createElement("div", {}, "Header"),
        React.createElement("div", {}, "Content"),
    ]);
};
```
-   Show how the `Box` component can be added to `App` (composition)

## Properteis

> Here we have to create 2 enums: `Importance` and `Urgency`: 

```javascript
const Importance = Object.freeze({
    IMPORTANT: "Important",
    NOT_IMPORTANT: "Not Important",
});

export default Importance;

const Urgency = Object.freeze({
    URGENT: "Urgent",
    NOT_URGENT: "Not Urgent",
});

export default Urgency;
```

> When creating the enums we also need to explain what `export default` does (instead of a plain `export`)

-   Add props to `Box`: `urgency`, `importance`, `label` and `todos`. First create this with `(props) => ...`
    then show how destructuring can be used `({urgency, importance, label, todos}) => ...`
-   Extract `Box` to its own file (select the code and click the lightbulb) without using `export default`.

> Here we can explain that this is similar to Java: 1 component goes to 1 file

-   Refactor `Box` to use `export default Box;`, then we can refactor `import { Box }` to `import Box`
-   Explain the difference between `export default function Box` and `const Box` (`this` scope!)

## JSX

> We need to explain here how Parcel runs Babel for us which enables JSX

-   Convert `Box` to JSX

> Important to note: This is not javascript in html, but html in javascript! (template)

> JSX gets translated to `React.createElement` behind the scenes

-   Explain how JSX's `{}` works (Javascript expression)
-   Fix eslint (`React` import problem)
    `npm install -D babel-eslint eslint-plugin-import eslint-plugin-react`
-   Add new elements to `.eslintrc.json` "extends" part:
    `"plugin:import/errors", "plugin:react/recommended",`

> Important! prettier & prettier/react needs to go at the end!

-   Add new elements to `.eslintrc.json` "plugins" part:
    `["react", "import"]`
-   Add rules to `.eslintrc.json`:

```json
"rules": {
    "react/prop-types": 0
},
```    

-   Add "settings" to `.eslintrc.json`:

```json
"settings": {
    "react": {
        "version": "detect"
    }
}
```

- Now complete the layout with *Bootstrap*. We need to copy the `index.html`:

  > Here we can talk about Bootstrap a bit, and why was it chosen.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Eisenhower</title>
        <link href="./style.css" rel="stylesheet" />
    </head>
    <body>
        <div id="root">No rendering</div>
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css"
            integrity="sha256-BJ/G+e+y7bQdrYkS2RBTyNfBHpA9IuGaPmf9htub5MQ="
            crossorigin="anonymous"
        />
        <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossorigin="anonymous"
        />
        <link rel="stylesheet" href="./style.css" />
        <script
            src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
            integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
            crossorigin="anonymous"
        ></script>
        <script
            src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
            integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
            crossorigin="anonymous"
        ></script>
        <script
            src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
            integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
            crossorigin="anonymous"
        ></script>
        <script src="./App.js"></script>
    </body>
</html>
```

    and also refactor `Box`:

```javascript
import React from "react";

const Box = ({ urgency, importance, label, todos }) => {
    return <div className="col">
        <div className="card box text-white mb-4">
            <h2 className={`card-header ${urgency}-${importance}`}>
                {label}
            </h2>
            <div className="card-body">{
                todos
            }</div>
        </div>
    </div>
};

export default Box;
```

    and `App`:

```javascript
import React from "react";
import ReactDOM from "react-dom";
import Box from "./Box";

const todos = [];

const App = () => {
    return (
        <div>
            <div className="container-fluid page">
                <div className="row">
                    <div className="col-3">
                        Sidebar
                    </div>
                    <div className="col-9">
                        <div className="row row-cols-2">
                            <Box
                                urgency="urgent"
                                importance="important"
                                label="Do"
                                todos={todos} />
                            <Box
                                urgency="not-urgent"
                                importance="important"
                                label="Decide"
                                todos={todos} />
                            <Box
                                urgency="urgent"
                                importance="not-important"
                                label="Delegate"
                                todos={todos} />
                            <Box
                                urgency="not-urgent"
                                importance="not-important"
                                label="Delete"
                                todos={todos} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById("root"));
```

-   Explain
    -   How we embed JSX components (`<Box />`)
    -   The `return (...)` construct


## Hooks

-   Create `TodoService`:
```javascript
import Urgency from "./Urgency";
import Importance from "./Importance";

let counter = 1;

const mockTodos = [{
    id: counter++,
    urgency: Urgency.URGENT,
    importance: Importance.IMPORTANT,
    title: "Pass the Exam",
    description: "The Javascript exam is next week, I need to pass it."
}, {
    id: counter++,
    urgency: Urgency.URGENT,
    importance: Importance.NOT_IMPORTANT,
    title: "Take down the trash",
    description: "I always forget it and it is very stinky after a while."
}, {
    id: counter++,
    urgency: Urgency.NOT_URGENT,
    importance: Importance.IMPORTANT,
    title: "Learn to speak German",
    description: "We're going to move to Berlin so it would be a good idea."
}, {
    id: counter++,
    urgency: Urgency.NOT_URGENT,
    importance: Importance.NOT_IMPORTANT,
    title: "Play games",
    description: "Quake II RTX just came out, I need to take a look at it!"
}, {
    id: counter++,
    urgency: Urgency.NOT_URGENT,
    importance: Importance.NOT_IMPORTANT,
    title: "Watch a movie",
    description: "My list is very long, I should watch some of them."
}];

export default class TodoService {

    constructor(todos = mockTodos) {
        this.todos = new Map();
        todos.forEach(todo => {
            this.todos.set(todo.id, todo);
        });
    }

    async findAll() {
        return Array.from(this.todos.values());
    }

    async findById(id) {
        return this.todos.get(parseInt(id));
    }

    async saveTodo(todo) {
        todo["id"] = counter++;
        this.todos.set(todo.id, todo);
        return this.findAll();
    }

    async completeTodo(todo) {
        this.todos.delete(todo.id);
        return this.findAll();
    }
}
```

-   We can replace the `todos` array with `let todoService = new TodoService();` now
-   Things to explain here:
    -   We use `async` for asynchronous calls: later we'll call webservices here
    -   We return immutable copies for safety (`Array.from()`)
    -   We use `Map` which comes with ES6
    -   Explain the `async` there and the syntax sugar (`.then()`)
-   Install the hook checker
    `npm install eslint-plugin-react-hooks`
-   Add to rules:
    `"react-hooks/rules-of-hooks": "error", "react-hooks/exhaustive-deps": "warn"`
-   Add `"react-hook"` to "plugins"
-   Here we also have to tell Babel which browsers to support to make async work. This goes to `package.json`

```json
"browserslist": [
    "last 1 Chrome versions"
],
```
-   Now we can create a state hook for `todos`: `const [todos, setTodos] = useState([]);`
-   And load the todos using `useEffect`:

```javascript
useEffect(() => {
    todoService.findAll().then(apiTodos => setTodos(apiTodos), console.error);
}, []);
```
-   And add a `console.log("Todos:", todos);` after it
-   A couple of things to explain
    -   Why does it run twice?
    -   How effects work
    -   What's the state hook?

> `Box` will also break here because of `{todos}`. Explain why.
 
### State

-   Create a `Todo` component for the `todos`:

```javascript
import React from "react";

const Todo = ({ todo }) => {
    return (
        <div className="todo text-dark p-2">
            <strong className="card-title">{todo.title}</strong>
            <a
                className="action btn btn-outline-info ml-2"
                href="#"
            >
                <span className="oi oi-info" title="View" aria-hidden="true"></span>
            </a>
            <button
                className="action btn btn-outline-success ml-2">
                <span className="oi oi-circle-check" title="Complete" aria-hidden="true"></span>
            </button>
        </div>
    )
}
export default Todo
```

-   And use it from `Box`:

```javascript
<div className="card-body">{
    todos.map(todo => <Todo
        key={todo.id}
        todo={todo} />)
}</div>
```
-   Explain how `map` works here and why we need `key` (do it without it at first)
-   Also explain how `key` is used for partial rerendering if only some of the keys are effected by a state change
-   Now all todos will be present in all boxes so let's filter them:

```javascript
todos={todos.filter(todo => {
    return todo.importance === Importance.IMPORTANT && todo.urgency === Urgency.URGENT
})}
```

## Events

-   Create the `completeTodo` callback, pass it down the hierarchy:

```javascript
const completeTodo = (todo) => {
    todoService
        .completeTodo(todo)
        .then(result => setTodos(result), console.error);
};
```

> Note that this is called prop drilling.

-   With this we can add `onClick={e => completeTodo(todo)}` to `Todo` and now it can be completed
-   Show that this won't add javascript code to HTML (open Chrome Debugger)
-   Explain _one way data flow_ (parent -> child) and why it is good: easy to debug, children can't mess up parent
-   Extra: show tip for debugging: `JSON.stringify(props, null, 4)`

## Routing & Class Components

-   Enable class properties:
    -   `npm install -D babel-eslint @babel/core @babel/preset-env @babel/plugin-proposal-class-properties @babel/preset-react`
    -   create `.babelrc` with this:

```json
{
    "presets": ["@babel/preset-react", "@babel/preset-env"],
    "plugins": ["@babel/plugin-proposal-class-properties"]
}
```
-   Add this to `.eslintrc.json`: `"parser": "babel-eslint",`
-   Add `import { Router } from "@reach/router";` on the top of `App`. This will automatically install reach/router
-   Refactor the 4 boxes to a `Boxes` component so that we can route to it
-   Implement TODO details as a class component:

```javascript
import React from "react";
import { Redirect } from "@reach/router";

class Details extends React.Component {

    state = {
        loading: true
    }

    constructor(props) {
        super(props);
        this.completeTodo = props.completeTodo;
        this.todoService = props.todoService;
    }

    componentDidMount() {
        this.todoService.findById(this.props.id).then(todo => {
            this.setState({
                todo: todo,
                loading: false
            })
        })
    }

    render() {
        const todo = this.state.todo;
        if (this.state.redirect) {
            return <Redirect noThrow={true} to="/" />
        }
        return this.state.loading ? <div>Loading</div> : (
            <div className="card">
                <div className="card-header">
                    <h3>{todo.title}</h3>
                </div>
                <div className="card-body">
                    <dl>
                        <dt>Urgency</dt>
                        <dd>{todo.urgency}</dd>
                        <dt>Importance</dt>
                        <dd>{todo.importance}</dd>
                    </dl>
                    <p>{todo.description}</p>
                    <div className="btn-group">
                        <button
                            className="btn btn-outline-success"
                            onClick={() => {
                                this.completeTodo(todo);
                                this.setState({
                                    redirect: true
                                })
                            }}>
                            <span className="oi oi-circle-check" title="Complete"></span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Details;
```
-   Talk about `componentDidMount` (similar to `useEffect` with no dependency)
-   `this.props` is immutable
-   `this.state` is created once in the constructor after it we **only use** `this.setState()`
-   We can do anything in state then later we can filter for it
-   Note again that this gets re-run again and again so we can send events to ourselves using `state`
-   Now we can add the router to `App`:

```javascript
<Router>
    <Boxes
        todos={todos}
        completeTodo={completeTodo}
        path="/" />
    <Details
        todoService={todoService}
        completeTodo={completeTodo}
        path="/details/:id" />
</Router>
```
-   And the necessary links in `Todo`:

```javascript
<Link
    className="action btn btn-outline-info ml-2"
    to={`/details/${todo.id}`}>
    <span className="oi oi-info" title="View" aria-hidden="true"></span>
</Link>
```
-   What's important here is that
    -   There are no page reloads here so parameters can be passed properly by React
    -   `Link` is just a component and we can embed anything in it
-   Now let's add a `Nav` component so that we have a proper header with a link to the main page:

```javascript
import React from "react";
import { Link } from "@reach/router";

const Nav = () => {
    return (
        <h1>
            <Link to="/">Eisenhower</Link>
        </h1>
    );
}
export default Nav;
```
-   Add this to `App`
-   **Also** show what happens if we use `<a>` instead of `<Link>`

## Form Handling

-   Implement `TaskCreator`:

```javascript
import React, { useState } from "react";
import Urgency from "./Urgency";
import Importance from "./Importance";

const TaskCreator = ({ onSubmit }) => {
    const [urgency, setUrgency] = useState(Urgency.URGENT);
    const [importance, setImportance] = useState(Importance.IMPORTANT);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
        <div className="card">
            <h5 className="card-header">Create New Task</h5>
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <label htmlFor="urgency">Urgency</label>
                        <select
                            name="urgency"
                            className="form-control"
                            value={urgency.toString()}>{
                                Object.keys(Urgency).map(key => {
                                    const u = Urgency[key];
                                    return <option key={u} value={u}>{u}</option>
                                })
                            }</select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="importance">Importance</label>
                        <select
                            name="importance"
                            className="form-control"
                            value={importance.toString()}>{
                                Object.keys(Importance).map(key => {
                                    const i = Importance[key];
                                    return <option key={i} value={i}>{i}</option>
                                })
                            }</select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            id="title"
                            type="text"
                            className="form-control"
                            name="title"
                            value={title} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            type="text"
                            className="form-control"
                            name="description"
                            value={description} />
                    </div>
                    <button type="submit" className="btn btn-primary">Go</button>
                </form>
            </div>
        </div>
    )
};
export default TaskCreator;
```
-   Then add it to `App`:

```javascript
<TaskCreator onSubmit={todo => {
    todoService.saveTodo(todo).then(todos => setTodos(todos));
}} />
```
-   Explain why the form fields can't be edited (controlled components)
-   Now add the event handlers:

```javascript
// this goes on the <form> component
onSubmit={e => {
    e.preventDefault();
    onSubmit({
        "urgency": urgency,
        "importance": importance,
        "title": title,
        "description": description
    });
}}
// ...
onChange={e => setUrgency(e.target.value)}
onChange={e => setImportance(e.target.value)}
onChange={e => setTitle(e.target.value)}
onChange={e => setDescription(e.target.value)}
```
-   Explain how this won't get translated to actual HTML code

## Context

-   `completeTodo` is problematic because of prop drilling. It is fine now, but multiple drillings
    will lead to unreadable code
-   Create `TodoContext` context:

```javascript
import { createContext } from "react";

const TodoContext = createContext(() => {});

export default TodoContext;
```
-   Wrap `App`'s content in `<TodoContext.Provider value={completeTodo}>`
-   Refactor `Details` to have `TodoContext` and redirect after completion, by wrapping  the complete button:

```javascript
<TodoContext.Consumer>
    {(completeTodo) => {
        return (
            <button
                className="btn btn-outline-success"
                onClick={() => {
                    completeTodo(todo);
                    this.setState({
                        redirect: true
                    })
                }}>
                <span className="oi oi-circle-check" title="Complete"></span>
            </button>
        )
    }}
</TodoContext.Consumer>
```
-   Do the same for `Boxes` and its children
-   Also sow the alternative to `<TodoContext.Consumer>`: `const completeTodo = useContext(TodoContext);`

## Using Formik

> Tutorial is [here](https://jaredpalmer.com/formik/docs/tutorial).

-   Install Formik: `npm install formik`
-   Refactor `TaskCreator` to use `useFormik` instead of `useState`:

```javascript
const { handleSubmit, handleChange, handleBlur, values } = useFormik({
    initialValues: {
        urgency: Urgency.URGENT,
        importance: Importance.IMPORTANT,
        title: "",
        description: ""
    },
    onSubmit: todo => {
        onSubmit(todo)
    }
});
```
-   Replace the old `onSubmit` with Formik's solution: `onSubmit={handleSubmit}`
-   Replace the change handler's with Formik's functions:

```javascript
onChange={handleChange}
onBlur={handleBlur}
```
-   Refactor the usage of `value` to use Formik's `values` object: `value={values.description}`

## Form Validation With Formik

-   Create the `validate` function in `TaskCreator`:

```javascript
const validate = (values) => {
    const errors = {};
    if (!values.title || values.title == "") {
        errors.title = "Title can't be empty"
    }
    if (!values.description || values.description == "") {
        errors.description = "Description can't be empty"
    }
    return errors;
}
```
    and add it to the `useFormik` call: `validate: validate,`
-   Destructure `errors` from `useFormik` as well, and add the necessary markup to the validated fields.
    On the input: `className={`form-control ${errors.title ? "is-invalid" : ""}`}`
    After the input: `{errors.title ? <div className="invalid-feedback">{errors.title}</div> : null}`
-   Demonstrate why this is problematic (won't take into account whether the field was `touched`)
-   Now destructure `touched` from `useFormik` and add it to the checks (`errors.title && touched.title`)

## Form Validation With Yup

> Yup tutorial [here](https://github.com/jquense/yup#usage)

-   Install Yup: `npm install yup`
-   Import Yup: `   `
-   Show how boilerplate can be reduced by using `getFieldProps` and spreading it on the inputs:
    -   Change the Formik destructuring: `{ handleSubmit,errors, touched, getFieldProps }`
    -   And spread it on the inputs: `{...getFieldProps("importance")}`
-   Now we can remove the `validate` function and replace it with `validationSchema`:

```javascript
validationSchema: Yup.object({
    title: Yup.string().required("Title can't be empty."),
    description: Yup.string().required("Description can't be empty.")
})
```

## Using Formik Components

-   Refactor `useFormik` to use the `Formik` component instead
    -   the parameters to `useFormik` become attributes in the `<Formik>` component
    -   Inside `<Formik>` we'll have a function: `{({ handleSubmit, errors, touched, getFieldProps }) => ()}`
-   Refactor `<form>` to `Form` and remove the attributes
-   Refactor the inputs to use Formik's inputs: `Field` and `ErrorMessage`
    -   `getFieldProps` is not needed anymore, only the `name`
    -   use `as="select"` to use specific inputs
    -   use `render={msg => <div className="invalid-feedback">{msg}</div>}` for rendering the error message

## Reusable Form Components

-   Create `TextInput`:

```javascript
import { useField } from "formik";
import React from "react";

const TextInput = ({ label, ...props }) => {
    const [getFieldProps, getFieldMeta] = useField(props);
    return (
        <div className="form-group">
            <label htmlFor={props.id || props.name}>{label}</label>
            <input
                className={`form-control ${getFieldMeta.error && getFieldMeta.touched ? "is-invalid" : ""}`}
                {...getFieldProps}
                {...props}
            />
            {getFieldMeta.touched && getFieldMeta.error ? (
                <div className="invalid-feedback">{getFieldMeta.error}</div>
            ) : null}
        </div>
    );
};

export default TextInput;
```
    -   We use `useField` here which gives us `getFieldProps` and `getFieldMeta`
    -   `getFieldMeta` contains `error` and `touched`
    -   We use `...props` to assign the *rest* into `props`
    -   Then we spread `props` on the `input`, so `props` is just delegated altogether
    -   We also spread `getFieldProps` as before

-   Create `SelectInput`:

```javascript
import { useField } from "formik";
import React from "react";

const SelectInput = ({ label, options, ...props }) => {
    const [field] = useField(props);
    return (
        <div className="form-group">
            <label htmlFor={props.name || props.id}>{label}</label>
            <select className="form-control" {...field} {...props}>{
                Object.keys(options).map(key => {
                    const o = options[key];
                    return <option key={o} value={o}>{o}</option>
                })
            }
            </select>
        </div>
    )
}
export default SelectInput;
```
    -   We only use `getFieldProps` here because there is no validation
    -   We accept either `name` or `id` with `||`
    -   We spread `field` and `props` as well
-   Now we can refactor `TaskCreator` to use these components:

```javascript
<Formik
    initialValues={{
        urgency: Urgency.URGENT,
        importance: Importance.IMPORTANT,
        title: "",
        description: ""
    }}
    validationSchema={Yup.object({
        title: Yup.string().required("Title can't be empty."),
        description: Yup.string().required("Description can't be empty.")
    })}
    onSubmit={todo => {
        onSubmit(todo)
    }}
>
    <Form>
        <div className="form-group">
            <SelectInput
                name="urgency"
                label="Urgency"
                options={Urgency}
            />
        </div>
        <div className="form-group">
            <SelectInput
                name="importance"
                label="Importance"
                options={Importance}
            />
        </div>
        <TextInput
            name="title"
            label="Title"
        />
        <TextInput
            name="description"
            label="Description"
        />
        <button type="submit" className="btn btn-primary">Go</button>
    </Form>
</Formik>
```
-   Done!

## AJAX with Axios (Optional)

-   Install Axios and uuid: `npm install axios uuid`
-   Refator `TodoService` to call our backend:

```javascript
import axios from "axios";
import { v4 as uuid } from "uuid";

const client = axios.create({
    baseURL: "http://localhost:8080/todos",
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
});

export default class TodoService {


    async findAll() {
        const result = await client.get("/");
        return result.data;
    }

    async findById(id) {
        const result = await client.get(`/${id}`);
        return result.data;
    }

    async saveTodo(todo) {
        const todoWithId = todo;
        todo["id"] = uuid();
        const result = await client.post("/", todoWithId);
        return result.data;
    }

    async completeTodo(todo) {
        const result = await client.delete(`/${todo.id}`);
        return result.data;
    }
}
```
-   Fix `Details` (`parseInt`)

## Packaging (Optional)


-   Install the parcel dist cleaner plugin: `npm install -D parcel-plugin-clean-dist`
-   Add commands for parcel:
    ```
    "build": "npx parcel build src/index.html",
    "dev":   "npx parcel src/index.html",
    "watch": "npx parcel watch src/index.html"
    ```
-   Move onto the Spring Project and do `01_spring_setup` and `02_bundling`
-   Explain why we need the clean-dist and the scripts above

## Error Handling (Optional)

-   Implement `ErrorBoundary`:

```javascript
import React from "react";

class ErrorBoundary extends React.Component {

    state = {
        hasError: false
    }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        console.error("There was an error", error, info);
    }

    render() {
        return this.state.hasError ? (
            <div>Some unfortunate error happened. <a href="/">Click here</a> to go back to the main page.</div>
        ) : this.props.children
    }
}

export default ErrorBoundary;
```
-   Wrap `Router` in an `ErrorBoundary` and add `throw Error()` to `Details`
-   Explain how this works and why do we need an `a` instead of a `Link`

## Portals

-   Add `<div id="portal"></div>` above the `#root`
-   Craete `Portal`:

```javascript
import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }) => {
    const elRef = useRef(null);
    if (!elRef.current) {
        const div = document.createElement("div");
        elRef.current = div;
    }

    useEffect(() => {
        const portal = document.getElementById("portal");
        portal.appendChild(elRef.current);

        return () => portal.removeChild(elRef.current);
    }, []);

    return createPortal((
        <div id="modal">
            <div className="card">
                <div className="card-body">{children}</div>
            </div>
        </div>
    ), elRef.current);
}

export default Portal;
```

-   Update `style.css`:

```css
#modal {
    background-color: rgba(0, 0, 0, 0.9);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
}

#modal:empty {
    display: none;
}
```

-   Update `Nav` to use the newly created portal:

```javascript
import React, { useState } from "react";
import { Link } from "@reach/router";
import Portal from "./Portal";

const Nav = () => {

    const [showPortal, setShowPortal] = useState(false);
    const togglePortal = () => {
        setShowPortal(!showPortal)
    }

    return (
        <div>
            <h1>
                <Link to="/">Eisenhower</Link>
                <span
                    onClick={togglePortal}
                    className="oi oi-info pt-2"
                    title="Info"
                    aria-hidden="true"
                    style={{ float: "right" }}></span>
                {
                    showPortal ? (
                        <Portal>
                            <div>This page was created with React.</div>
                            <button type="button" onClick={togglePortal} className="btn btn-primary">OK</button>
                        </Portal>
                    ) : null
                }
            </h1>
        </div>

    );
}
export default Nav;
```

## I18N

-   Install the i18n tooling: `npm install react-i18next i18next`
-   Initialize i18n:

```javascript
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = require("./translations.json");

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "hu",
        keySeparator: true,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
```

-   Create `translations.json`:

```json
{
    "en": {
        "translation": {
            "label.urgent.important": "Do",
            "label.not-urgent.important": "Decide",
            "label.urgent.not-important": "Delegate",
            "label.not-urgent.not-important": "Delete"
        }
    },
    "hu": {
        "translation": {
            "label.urgent.important": "Tedd",
            "label.not-urgent.important": "Döntsd El",
            "label.urgent.not-important": "Delegáld",
            "label.not-urgent.not-important": "Töröld"
        }
    }
}
```
-   Create the `LabelKeys` enum:

```javascript
const LabelKeys = Object.freeze({
    URGENT_IMPORTANT: "label.urgent.important",
    NOT_URGENT_IMPORTANT: "label.not-urgent.important",
    URGENT_NOT_IMPORTANT: "label.urgent.not-important",
    NOT_URGENT_NOT_IMPORTANT: "label.not-urgent.not-important"
});

export default LabelKeys;
```
-   Use i18n in `Boxes`:

```javascript
const { t } = useTranslation();
// ...
label={t(LabelKeys.URGENT_IMPORTANT)}
// ...
```

## Typescript

-   Install Typescript: `npm install -D typescript`
-   Initialize Typescript: `npx tsc --init`
-   In `tsconfig.json`:
    -   Change target to `es2018`
    -   Change `"jsx"` to `"jsx": "react"`
-   Install TS headers for our projects:

```bash
npm install -D @types/react @types/react-dom @types/reach__router @types/yup @types/uuid
```
-   
-   Note that we can keep the `.js` files, we don't have to migrate everything at once
-   Migrate `Todo.tsx`
-   Use `FunctionComponent<IProps>` like this:

```ts
interface IProps {
    todo: ITodo;
}

interface ITodo {
    id: string;
    urgency: string;
    importance: string;
    title: string;
    description: string;
}
```
-   Use `Error` and `ErrorInfo` in `ErrorBoundary`
-   Use `id: string` in `TodoService`
-   Use this for `TextInput`:

```ts
interface TextInputProps extends FieldInputProps<""> {
    label: string;
}
```
-   Use this for `SelectInput`:

```ts
interface SelectInputProps extends FieldInputProps<""> {
    label: string;
    options: { [name: string]: string };
}
```
-   In `Details` use:

```ts
interface DetailsProps : RouteComponentProps {
    id?: string,
    todoService: TodoService
}
```
    and
```ts
state: {
    loading: boolean;
    redirect: boolean;
    todo: ITodo | null;
} = {
    loading: true,
    redirect: false,
    todo: null,
};
```
-   Use this for `Box`:

```ts
interface BoxProps {
    urgency: string;
    importance: string;
    label: string;
    todos: ITodo[];
}
```
-   In `Portal`:
    -   Refactor `useRef`: `const elRef = useRef(document.createElement("div"));`
    -   Add check for `portal`:

```ts
if(!portal) {
    return;
}
```
    -   Wrap `portal.removeChild` in `{}`
-   In `TaskCreator` use this:

```ts
interface TaskCreatorProps {
    onSubmit: (todo: ITodo) => void
}
```
    and also add an `id` to the `todo`
-   Fix `App.js` to `App.tsx`
