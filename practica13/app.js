console.log(Vue);

const app = Vue.createApp({
    data() {
        return {
            nombre : 'Mario'
        }
    }
});

app.mount('#miApp');