<template>
    <div class="container">
        <div v-if="showAddTask">
            <AddTask @add-task="addTask"/>
          </div>
          
          <!-- brings in the task tracker thingy from the header file -->
          <!-- since it's an array we want to v-bind it incase things are changed -->
          <Tasks 
            @toggle-reminder="toggleReminder()" 
            @delete-task="deleteTask" 
            :tasks="tasks"/>      
    </div>
</template>

<script>
    import Tasks from './components/Tasks'
    import AddTask from './components/AddTask'

    export default {
        name: 'Home',
        components {
            Tasks,
            AddTask,
        },
        data() {
            return {
                tasks: []
            }
            
        },
        methods: {
            
            addTask(task) {
            // spread across the current tasks then add a new one onto it
            // used to expand elements from arrays
            this.tasks = [...this.tasks, task]
            },
            deleteTask(id) {
            if(confirm('Are you sure?')){
                // filter method, for each task we take back everything except the task with the id that's equal to the id we're deleting
                this.tasks = this.tasks.filter((task) => task.id !== id)
            }
                
            },
            toggleReminder(id){
            // map allows us to manipulate an array and return an array of updated tasks
            // if the task.id == the id we passed up from task.vue, then reminder is reversed, else just return task
            this.tasks = this.tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task)

            },
        },
        created() {
            // when created runs we fill the tast array
            // these will be passed through a task component to render it on the page
            this.tasks = [
            {
                id: 1,
                text: 'Doctors Appointment',
                day: 'March 1st at 2:30pm',
                reminder: true,
            },
            {
                id: 2,
                text: 'Meeting at School',
                day: 'March 3rd at 1:30pm',
                reminder: true,
            },
            {
                id: 3,
                text: 'Food Shopping',
                day: 'March 3rd at 11:00am',
                reminder: false,
            }
            ]
        }
    }
</script>