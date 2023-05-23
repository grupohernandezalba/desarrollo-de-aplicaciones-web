<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 text-center">
                <img v-if="imagen" class="imagen w-50" v-bind:src="imagen" alt="foto">
                <input v-model="pregunta" type="text" class="form-control my-2">
                <div v-if="estasPreguntando">
                    <p>{{ pregunta }}</p>
                    <!--<i>{{ respuesta }}</i>-->

                        <i>{{ respuesta ==='yes' ? 'Sí' : 'No' }}</i>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            pregunta : null,
            respuesta : null,
            imagen : null,
            estasPreguntando : false
        }
    },
    methods : {
        async obtieneRespuesta(){
            this.respuesta =  'Procesando ...'
            //const data = await fetch('https://yesno.wtf/api/').then( res => res.json() );

            const { answer, image } = await fetch('https://yesno.wtf/api/').then( res => res.json() );
            //console.log(answer,image);

            this.respuesta = answer;

            /*
            if(this.respuesta=='yes')
                this.respuesta = 'Sí';
            else    
                this.respuesta = 'No';
                */
            

            this.imagen = image;

        }
    },
    watch: {
        pregunta(valor, valorAnterior){
            //console.log(valor, valorAnterior);
            //console.log(valor.includes('?'));
            this.estasPreguntando = false;

            if(!valor.includes('?')) return;

            this.estasPreguntando = true    ;
            this.obtieneRespuesta();
            
        }
    }
}
</script>

<style>

</style>