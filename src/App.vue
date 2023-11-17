<script setup>
import JSConfetti from 'js-confetti'

const confetti = new JSConfetti()

function showConfetti() {
  confetti.addConfetti()
}

showConfetti()
</script>

<template>
  <h1 @click="showConfetti">🎉 Congratulations!</h1>
  <div style="text-align: center">
    <!-- use the router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
    <p>导航到其他组件页面👇</p>
    <p><router-link to="/">Go to Home</router-link></p>
    <p><router-link to="/about">Go to About</router-link></p>
  </div>
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view></router-view>
</template>

<style>
h1 {
  text-align: center;
  cursor: pointer;
  margin-top: 3em;
}
</style>