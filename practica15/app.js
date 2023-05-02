/*
const app = Vue.createApp({
    data() {
        return {
            numero : 0
        }
    }
});

app.mount('#miApp');

*/

  console.log(Vue);
  
  const { createApp } = Vue

  createApp({
    data() {
      return {
            numero : 0
      }
    }
  }).mount('#miApp');
