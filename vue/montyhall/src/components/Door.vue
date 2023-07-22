<template>
  <div class="door-area">
    <div class="door-frame" :class="{ selected: selected && !open }">
      <Gift v-if="open && hasGift" />
    </div>
    <div class="door" @click="selected = !selected" :class="{ open }">
      <div class="number" :class="{ selected }">{{ number }}</div>
      <div class="knob" :class="{ selected }" @click.stop="open = true"></div>
    </div>
  </div>
</template>

<script>
import Gift from "./Gift.vue";
export default {
  name: "Door",
  components: { Gift },
  props: {
    number: {},
    hasGift: { type: Boolean },
  },

  data: function () {
    return {
      open: false,
      selected: false,
    };
  },
};
</script>

<style>
:root {
  --door-border: 5px solid firebrick;
  --selected-border: 5px solid rgb(246, 247, 191);
}

.number {
  color: firebrick;
  padding: 12px;
}

.door-area {
  position: relative;
  width: 200px;
  height: 310px;
  border-bottom: 10px solid maroon;
  margin-bottom: 20px;
  font-size: 3rem;
  display: flex;
  justify-content: center;
}

.door-frame {
  position: absolute;
  height: 300px;
  width: 180px;
  border-left: var(--door-border);
  border-top: var(--door-border);
  border-right: var(--door-border);
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.door {
  position: absolute;
  top: 5px;
  height: 295px;
  width: 170px;
  background-color: lightcoral;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.knob {
  height: 20px;
  width: 20px;
  border-radius: 25px;
  background-color: maroon;
  align-self: flex-start;
  margin-top: 55px;
}

.door-frame.selected {
  border-left: var(--selected-border);
  border-right: var(--selected-border);
  border-top: var(--selected-border);
}

.door .number.selected {
  color: rgb(225, 240, 220);
}

.door .knob.selected {
  background-color: rgb(225, 240, 220);
}

.door.open {
  background-color: black;
}

.door.open .knob {
  display: none;
}
.door.open .number {
  display: none;
}
</style>
