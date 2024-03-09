<template>
  <div>
    <Header />
    <div class="container">
      <Balance :total="total"/>
      <!-- the + passes them in as numbers not strings -->
      <IncomeExpenses :income="+income" :expenses="+expenses"/>
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
  import { ref, computed } from 'vue'

  const transactions = ref([
    { id: 1, text: 'mars soul', amount: -287.54},
    { id: 2, text: 'pat', amount: 2.34},
    { id: 3, text: 'bruno hair', amount: 656.4484},
  ])

  // get total
  // computed takes in a function
  const total = computed(() => {
    // pass in a function again, reduce subtracts all the numbers in array, accumulator (acc) stats at 0 and loops through to add everything together
    return transactions.value.reduce((acc, transaction) => 
    {
      return acc + transaction.amount
    }, 0).toFixed(2)
  } );

  // get income
  const income = computed(() => {
    // pass in a function again, reduce subtracts all the numbers in array, accumulator (acc) stats at 0 and loops through to add everything together
    return transactions.value
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => 
    {
      return acc + transaction.amount
    }, 0).toFixed(2)
  } );

  // get expenses
  const expenses = computed(() => {
    // pass in a function again, reduce subtracts all the numbers in array, accumulator (acc) stats at 0 and loops through to add everything together
    return transactions.value
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => 
    {
      return acc + transaction.amount
    }, 0).toFixed(2)
  } );

</script>