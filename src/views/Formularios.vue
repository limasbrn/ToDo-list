<script>

export default {
  name: "Form",

  data() {
    return {
      form: {
        subject:"",
        description:""
      },
      methodSave: "new"
    }
  },

  created() {
    if(this.$route.params.index === 0 || this.$route.params.index !== undefined){
      this.methodSave = "update";
      let tasks = JSON.parse(localStorage.getItem("tasks"));
      this.form = tasks[this.$route.params.index];
    }
  },

  methods: {
    saveTask() {
      if(this.methodSave === 'update'){
        let tasks = JSON.parse(localStorage.getItem("tasks"));
        tasks[this.$route.params.index] = this.form;
         localStorage.setItem("tasks", JSON.stringify(tasks));
         this.$router.push({ name: 'tarefas' });
         return;
      }

      let tasks = (localStorage.getItem("tasks")) ? JSON.parse(localStorage.getItem("tasks")) : [];
      tasks.push(this.form);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      this.$router.push({ name: 'tarefas' });
    }
  }
}
</script>

<template>
   
   <section class="sec_container_form">
    <form class="container_form">

        <h1 class="title_form">Formulário</h1>

        <label for="subject">Título</label>
        <textarea type="text" id="subject" v-model="form.subject" class="form_description" placeholder="ex: Comprar frutas" rows="1"></textarea>

        <label for="description">Descrição</label>
        <textarea type="text" id="description" v-model="form.description" class="form_description" placeholder="ex: Laranja, maçã, melancia, kiwi..." rows="5"></textarea>

        <div>
            <button type="submit" class="btn_salvar" @click="saveTask">Salvar</button>
        </div>
        
    </form>
   </section>

</template>

<style>
.sec_container_form{
    display: flex;
    justify-content: center;
}
.container_form{
    display: flex;
    width: 60%;
    flex-direction: column;

    padding: 30px;
    margin: 30px auto 30px auto;

   
    background-color: #fafafa;
    border: 1px solid #dadadaa2;
    border-radius: 5px;
    box-shadow: 3px 3px 3px 3px #dadada44;
}
.title_form, .details_form{
    margin-bottom: 15px;
}
.form_description{
  min-height: 30px;
  padding: 10px;
  margin: 10px 0px 15px 0px;
}
.btn_salvar{
    width: 100px;
    height: 30px;
    color: white;
    border: none;
    border-radius: 5px;
    margin-top: 15px;
    background-color: #3E994C;
}
.btn_salvar:hover{
  background-color: #316639;
}
</style>
