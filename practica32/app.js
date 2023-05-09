
const { createApp } = Vue


const HolaMundo = {
    props: ['idioma'],
    template: `
                <div>
                    <p v-if="idioma === 'castellano'">Hola mundo</p>
                    <p v-else-if="idioma === 'ingles'">Hello world</p>
                </div>
            `
};

createApp({

    components: {
        'hola-mundo': HolaMundo
    },

}).mount('#miApp');

 