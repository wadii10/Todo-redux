import { ADD, DELETE, MARK } from "./actionTypes"

export const addTask = (newTodo) => {
    return {
        type : ADD,
        payload:newTodo
    };
};

export const deleteTask = (id) => {
    return {
        type:DELETE,
        payload:id
    };
};

export const completeTask = (id) => {
    return {
        type:MARK,
        payload:id
    }
}