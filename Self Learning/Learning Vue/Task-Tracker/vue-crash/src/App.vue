<!-- root component, everything we do goes through this file, any componenet we make goes through this file -->
<!-- components are imported into here and when they're used they're basically registered in here-->
<!-- for now we will just put outr data in the app.vue file -->
<template>
  <div class="container">
    <!-- this is a prop, it can be defined in the component file -->
    <Header 
      @toggle-add-task="toggleAddTask" 
      title="Task Tracker" 
      :showAddTask="showAddTask" />
    
    <!-- views have to be called in here -->
    <router-view>
      
    </router-view>

    <Footer />
  </div>
  

</template>

<script>

// importing header
import Header from './components/Header'
import Footer from './components/Footer'



export default {
  // components are registered in here
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      // going to use a life cycle function, so when a piece of data is loaded it goes through these functions
      showAddTask: false
    }
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask
    },
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

<!-- for styles you can have one global style sheet , or have all the styles down here, or just break them all into components-->
<!-- this is where we would put bulma in our class project -->
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}
</style>
