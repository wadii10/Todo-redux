import { ADD, DELETE, MARK } from "./actionTypes";

const init = {
  todos: [],
};

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD:
      return {
        ...state,
        todos: [...state.todos, payload],
      };

    case DELETE:
      return {
        ...state,
        todos: state.todos.filter((el) => el.id !== payload),
      };

    case MARK:
      return {
        ...state,
        todos: state.todos.map((el) =>
          el.id === payload ? { ...el, isDone: !el.isDone } : el
        ),
      };

    default:
      return state;
  }
};
