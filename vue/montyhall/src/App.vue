<template>
  <div id="app">
    <h1>The Monty Hall problem</h1>
    <Door number="1" :hasGift="true"/>
  </div>
</template>

<script>
import Door from './components/Door.vue';
// import Gift from "./components/Gift.vue";

export default {
  name: "App",
  components: { Door },
};
</script>

<style>
* {
  box-sizing: border-box;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
body {
  color: aliceblue;
  background: linear-gradient(to right, teal, slateblue);
}
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#app h1 {
  text-shadow: -2px -2px 6px slateblue, 3px 3px 6px slateblue;
  border: solid 1px cadetblue;
  width: fit-content;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 1px 1px 6px black;
  background: linear-gradient(to left, rgb(4, 63, 63), rgb(33, 25, 83));
  margin-bottom: 60px;
}
</style>
