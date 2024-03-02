<!-- root component, everything we do goes through this file, any componenet we make goes through this file -->
<!-- components are imported into here and when they're used they're basically registered in here-->
<template>
  <div class="container">
    <!-- this is a prop, it can be defined in the component file -->
    <Header title="Task Tracker" />
    <!-- brings in the task tracker thingy from the header file -->
  </div>
  

</template>

<script>

// importing header
import Header from './components/Header'


export default {
  // components are registered in here
  name: 'App',
  components: {
    Header
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
