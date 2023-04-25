
console.log(Vue);

const app = Vue.createApp({
    data() {
        return {
            numero : 10
        }
    }
});

app.mount('#miApp');


/*

  const { createApp } = Vue

  createApp({
    data() {
      return {
            nombre : 'Mario'
      }
    }
  }).mount('#miApp');

  */