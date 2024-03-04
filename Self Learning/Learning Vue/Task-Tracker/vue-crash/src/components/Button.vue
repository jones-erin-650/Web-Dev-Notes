<!-- button to toggle the task view -->
<template>
    <!-- background is set to the color prop, and the inner html is set to the text prop -->
    <!-- @click means that there's an event that will do this function when -->
    <button @click="onClick()" :style="{background: color}" class="btn">{{text}}</button>
</template>

<script>
    export default {
        name: 'Button',
        props: {
            text: String,
            color: String
        },
        methods: {
            onClick() {
                this.$emit('toggle-add-task')
            }
        }
    }
</script>