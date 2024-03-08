<template>
  <div>
    <Header />
    <div class="container">
      <Balance/>
      <IncomeExpenses />
      <!-- passing the array in as a prop -->
      <TransactionList :transactions="transactions"/>
      <AddTransaction />
    </div>
  </div>
  
</template>

<script setup>
  import Header from './components/Header.vue'
  import Balance from './components/Balance.vue'
  import IncomeExpenses from './components/IncomeExpenses.vue'
  import TransactionList from './components/TransactionList.vue'
  import AddTransaction from './components/AddTransaction.vue'
  
  //ref makes things reactive
  import { ref } from 'vue'

  const transactions = ref([
    { id: 1, text: 'mars soul', amount: -287.54},
    { id: 2, text: 'pat', amount: 2.34},
  ])

</script>