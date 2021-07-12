import * as types from './mutation_type';

/* eslint-disable no-param-reassign */
export default {
    [types.SET_TODO_ITEM](state, data) {
        state.todoList = [
            ...state.todoList,
            ...data
        ];
    },
    [types.SET_TODO_DONE](state, id) {
        state.todoList = state.todoList.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    done: !item.done
                };
            }
            return item;
        });
    },
    [types.SET_EDIT_TODO](state, data) {
        state.todoList = state.todoList.map((item) => {
            if (item.id === data.id) {
                return {
                    ...item,
                    content: data.content
                };
            }
            return item;
        });
    },
    [types.SET_DELETE_TODO](state, id) {
        state.todoList = state.todoList.filter((item) => item.id !== id);
    }
};
