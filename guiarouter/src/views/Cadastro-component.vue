<template>
    <div>
      <input type="text" name="email" id="email" placeholder="E-mail"/>
      <input type="text" name="nome" id="nome" placeholder="nome"/>
      <h2>{{ parametroRecebido }}</h2>
      <button>Teste !!!</button>
    </div>
</template>

<script>
 export default {
    created(){
    this.parametroRecebido = this.$route.params.dado;
    
    },
    data(){
       return{
          parametroRecebido:''
       }
    }
   
 }

</script>