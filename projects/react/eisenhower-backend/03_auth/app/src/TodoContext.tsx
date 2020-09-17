import { createContext } from "react";

const TodoContext = createContext((todo: ITodo) => {});

export default TodoContext;
