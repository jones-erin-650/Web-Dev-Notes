<template>
    <header>
    <h1>{{title}}</h1>
    <Button @toggle-add-task="$emit('toggle-add-task')" 
    :text="showAddTask ? 'Close' : 'Add Task'" 
    :color="showAddTask ? 'Red' : 'Green'" />
    </header>
</template>


<script>
    import Button from './Button'
// this is how the script is exported to be imported in app.vue
    export default {
        name: 'Header',
        // can be defined as an array with the name, or as an object
        props: {
            // if you want a default value you can add an object with the type
            title: {
                type: String,
                default: 'Hello World',
            },
            showAddTask: Boolean
        },
        components: {
            Button
        }
    }
</script>

<!-- scoped just means that this only applies to this specific header tag, not all of them in the different files -->
<style scoped>
 header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
 }
</style>