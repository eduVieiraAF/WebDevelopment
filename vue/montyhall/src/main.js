import Vue from "vue";
import APP from './App.vue'

new Vue({
    // el: "#app",
    // render(createElement) {
    //     return createElement(APP)
    // }

    render: h => h(APP)
}).$mount("#app")