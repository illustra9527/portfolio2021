/* eslint-disable no-param-reassign */
import { MessageBox, Message } from 'element-ui';

export default {
    install(Vue) {
        Vue.prototype.$confirm = MessageBox.confirm;
        Vue.prototype.$alert = MessageBox.alert;
        Vue.prototype.$message = Message;
    }
};
