<template>
  <div class="gift">
    <div class="gift-tie-1"></div>
    <div class="gift-tie-2"></div>
    <div class="gift-top"></div>
    <div class="gift-body"></div>
  </div>
</template>

<script>
export default {
  name: "Gift",
};
</script>

<style>
.gift {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
}

.gift-top {
  width: 100px;
  height: 20px;
  background-color: #214f74;
  border: 1px solid aliceblue;
  border-radius: 3px;
}

.gift-body {
  width: 90px;
  height: 60px;
  background-color: #18364e;
  border: 1px solid aliceblue;
}

.gift-tie-1 {
  position: absolute;
  width: 15px;
  height: 80px;
  background-color: crimson;
}

.gift-tie-2 {
  position: absolute;
  top: 40px;
  width: 90px;
  height: 15px;
  background-color: crimson
  ;
}
</style>
