import { combineReducers } from "redux";
import { ActionType, getType } from 'typesafe-actions';
import { StateType } from 'typesafe-actions';
import * as todos from './actions';
import { Todo, TodosFilter } from "./models";

export type TodosAction = ActionType<typeof todos>;

export type TodosState = Readonly<{
    todos: Todo[];
    todosFilter: TodosFilter;
}>;

const rootReducer = combineReducers<TodosState, TodosAction>({
    todos: (state = [], action) => {
        switch (action.type) {
            case getType(todos.add): {
                return [...state, action.payload];
            }
            case getType(todos.toggle): {
                return state.map(item => item.id === action.payload.id ?
                    { ...item, done: !item.done }
                    : item)
            }
            case getType(todos.changeFilter): {
                return [...state];
            }
            default:
                return state;
        }
    },
    todosFilter: (state = TodosFilter.All, action) => {
        switch (action.type) {
            case getType(todos.changeFilter): {
                return action.payload;
            }
            default:
                return state;
        }
    }
});

export type RootState = StateType<typeof rootReducer>;

export default rootReducer;