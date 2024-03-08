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

<script>
    export default {
        data() {
            return {
                transactions: [
                { id: 1, text: 'mars soul', amount: -287.54},
                { id: 2, text: 'idk', amount: 4543.34},

                ]
            }
        }
    }
</script>