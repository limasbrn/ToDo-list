<script>

export default {
    name: "Tarefas",

    data() {
        return {
            tasks: [],
            taskSelected: []
        }
    },

    created() {
        this.tasks = (localStorage.getItem("tasks")) ? JSON.parse(localStorage.getItem("tasks")) : [];
    },

    methods: {
        edit(index) {
            this.$router.push({ name: 'formularios' , params: {index}});
        },

        remove(task, index) {
            this.taskSelected = task;
            this.taskSelected.index = index;
            this.tasks.splice(this.taskSelected.index, 1);
            localStorage.setItem("tasks", JSON.stringify(this.tasks));
        }
    }
}
</script>

<template>

    <section class="sec_container_tarefa">
        <div v-for="(task, index) in tasks" :key="index">
         <div class="container_tarefa">

            <h1 class="title_tarefa">{{ task.subject }}</h1>
            <span class="details_tarefa">{{ task.description }}</span>

            <div>
                <button class="btn_edi" @click="edit(index)">Editar</button>
                <button class="btn_exc" @click="remove(task,index)">Excluir</button>
            </div>

         </div>
        </div>

        <div ref="modalRemove"></div>
    </section>
</template>

<style>
.sec_container_tarefa {
    display: flex;
    flex-direction: column;
    justify-content: center;

}

.container_tarefa {
    display: flex;
    width: 60%;
    flex-direction: column;

    padding: 30px;
    margin: 30px auto 0px auto;

    background-color: #fafafa;
    border: 1px solid #dadada6b;
    border-radius: 5px;
    box-shadow: 3px 3px 3px 3px #dadada2d;
}

.title_tarefa {
    margin: 30px 0px 10px 0px;
}

.details_tarefa {
    margin-bottom: 15px;
}

.btn_edi,
.btn_exc {
    width: 100px;
    height: 30px;
    color: white;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
}

.btn_edi {
    background-color: grey;
}

.btn_exc {
    background-color: rgb(150, 4, 4);
    margin-left: 15px;
}
</style>
