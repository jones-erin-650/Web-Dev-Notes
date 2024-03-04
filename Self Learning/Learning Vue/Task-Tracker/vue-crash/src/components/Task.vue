<template>
    <!-- if class.reminder is true, add a class reminder, else add an empty class, also has a task class by default -->
    <!-- when the task is double clicked it emits an event and passes the id -->
    <div @dblclick="$emit('toggle-reminder', task.id)" :class="[task.reminder ? 'reminder' : '', 'task']">
        <h3>
            {{task.text}}
            <i @click="onDelete(task.id)" class="fas fa-times"></i>
        </h3>
        <p>{{task.day}}</p>
    </div>

</template>

<script>
    export default {
        name: 'Tasks',
        props: {
            // this file receives the task object from the tasks file
            task: Object
        },
        methods: {
            onDelete(id){
                // a $ means that you're using a vue instance property or a vue instance method
                // emits an event one level up
                this.$emit('delete-task', id)
            }
        }
    }
</script>

<style scope>
.fas {
  color: red;
}

.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.task.reminder {
  border-left: 5px solid green;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>