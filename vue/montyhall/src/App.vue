<template>
  <div id="app">
    <h1>The Monty Hall problem</h1>
    <!-- <Door number="1" :hasGift="false"/> -->
    <div class="form">
      <div v-if="!started">
        <label for="doors">How many doors?</label>
        <input
          type="text"
          id="doors"
          size="3"
          style="margin-left: 7px"
          v-model.number="doors"
        />
      </div>
      <div v-if="!started" style="margin-top: 15px; ">
        <label for="selectedDoor">Which doors has a gift?</label>
        <input
          type="text"
          id="selectedDoor"
          size="3"
          style="margin-left: 7px"
          v-model.number="selectedDoor"
        />
      </div>
      <button v-if="!started" @click="started = true" style="margin-top: 17px">BEGIN</button>
      <button v-if="started" @click="started = false">Go AGAIN</button>
    </div>
    <div class="doors" v-if="started">
      <div v-for="i in doors" :key="i">
        <Door :hasGift="i === selectedDoor" :number="i"/>
      </div>
    </div>
  </div>
</template>

<script>
import Door from "./components/Door.vue";
// import Gift from "./components/Gift.vue";

export default {
  name: "App",
  components: { Door },
  data: function () {
    return {
      started: false,
      doors: 3,
      selectedDoor: null,
    };
  },
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
.form {
  display: flex;
  font-size: 1.2em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to left, rgb(4, 63, 63), rgb(33, 25, 83));
  border: 1px solid darkseagreen;
  background-color: #0000;
  padding: 18px;
  border-radius: 20px;
  box-shadow: 1px 1px 6px black;
  margin-bottom: 40px;
}

.doors {
  align-self: stretch;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

button {
  border-radius: 15px;
  padding: 8px;
  background-color: cadetblue;
  font-weight: bolder;
  border: 1px solid aquamarine;
  box-shadow: 1px 1px 2px black;
}

button:active {
  color: aquamarine;
  background-color: black;
  box-shadow: none;
}
</style>
