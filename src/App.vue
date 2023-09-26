<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Introduction from './components/Introduction.vue'
</script>

<template>
  <div class="content">
    <header>
    <img alt="Rick and Morty Logo" class="logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" width="500" height="200" />

    <div class="wrapper">
      <HelloWorld msg="Welcome to Rick and Morty wiki!" />

      <nav>
        <RouterLink to="/">Characters</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <main>
    <div >
    <RouterView></RouterView>
    </div>
  </main>
  </div>
  
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-repeat: repeat-y;

}

.content::before {    
      content: "";
      background-image: url("/background.jpg");
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      opacity: 0.15;
}

header {
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}


nav {
  width: 100%;
  font-size: 24px;
  text-align: center;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: center;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
