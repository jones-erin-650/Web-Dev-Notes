<script setup lang="ts">
// everything is wrapped inside this setup function i think
// the setup function is a function of the component object
// any reactive components/functions/objects must be created inside the setup script
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

let isActive = ref(false); //makes isActive hold an object of type ref

function toggleMenu(){
  // script and templates and everything goes in the same file so long as they're a part of the same template
  // break everything into small pieces, this code will only be used in the navbar so keep it in this one file to reuse it easier without worrying about what stuff is calling
  isActive.value = !isActive.value; //works with the value property of a ref, but in your templates you don't need to do .value
  // when you put curly braces around these it is now considered an object with one property called isActive, so it's outputted as an object
  // that way when you console log it it says {isActive: true} to make it easier to debug it
  console.log({ isActive: isActive.value});
}

</script>

<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>

    <!-- automatically turns into a hamburger menu when the screen shrinks -->
    <!-- if is active is true, then output is-active, else is nothing -->
    <!-- @click is an onclick event -->
  <a role="button" @click="toggleMenu" :class="isActive ? 'is-active' : ''" 
    class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <RouterLink to="/" class="navbar-item">
        Home
      </RouterLink>

      <a class="navbar-item">
        Documentation
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <RouterLink to="/about" class="navbar-item">
            About
          </RouterLink>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<style scoped>
    .router-link-exact-active{
        border-bottom: 2px solid aquamarine;
    }
    .router-link-active{
      background-color: 2px solid rgb(182, 196, 191);
  }

</style>