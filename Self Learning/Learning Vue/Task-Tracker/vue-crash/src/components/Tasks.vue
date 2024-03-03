<!-- takes in what's in Task.vue and renders it on the page -->
<template>
    <!-- for some reason it gives an error if you don't nest it in a div first -->
    <div>
        <div v-for="task in tasks" :key="task.id">
            <!-- instead of just using an h3 we should have a specific task.vue component we can reuse -->
            <!-- emits an event one level up -->
            <Task @delete-task="$emit('delete-task', task.id)" :task="task"/>

        </div>
    </div>
</template>
<!-- take in a prop of task, loop throguh and then output a single task -->
<script>
    import Task from './Task'
    export default {
        name: 'Tasks',
        props: {
            // takes in the tasks array from the app.vue file
            tasks: Array
        },
        components: {
            Task,
        },
        // a list of events we're emitting
        emits: ['delete-task']
    }
</script>