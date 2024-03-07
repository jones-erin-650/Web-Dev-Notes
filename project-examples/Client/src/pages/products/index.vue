<script setup lang="ts">
    // <!-- ref creates an observable object -->
    import {ref} from 'vue'
    const product = ref([])

    product.value = getProducts()
</script>


<template>
    <div class="product-list">
        <div v-for="product in products" 
        :key="product.id" 
        class="card">
        <div class="card-image">
            <img src="product.thumbnail" alt="">
        </div>
        <div class="card-content">
            <h3>{{product.title}}</h3>
            <h3>{{product.price}}</h3>
        </div>
    
    </div>
    </div>
</template>

<style scoped>

</style>