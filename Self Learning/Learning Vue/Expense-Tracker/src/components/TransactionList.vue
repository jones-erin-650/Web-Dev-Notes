<template>
    <h3>History</h3>
    <ul id="list" class="list">
      <li
        v-for="transaction in transactions"
        :key="transaction.id"
        :class ="transaction.amount < 0 ? 'minus' : 'plus'"
      >
        {{ transaction.text }} <span>${{ transaction.amount }}</span
        >
      </li>
    </ul>
</template>

<script setup>

//   defining the imported props
  import { defineProps } from 'vue';

  const props = defineProps({
    transactions: {
        type: Array,
        required: true
    }
  })

</script>