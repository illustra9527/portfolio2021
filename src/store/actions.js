/* eslint-disable import/prefer-default-export */
export const actionSetTodo = ({ commit }, todo = []) => {
    commit('SET_TODO_ITEM', todo);
    return todo;
};
export const actionSetTodoDone = ({ commit }, id = 0) => {
    commit('SET_TODO_DONE', id);
};
export const actionEditTodo = ({ commit }, data = { id: 0, content: '' }) => {
    commit('SET_EDIT_TODO', data);
};
export const actionDeleteTodo = ({ commit }, id = 0) => {
    commit('SET_DELETE_TODO', id);
};
