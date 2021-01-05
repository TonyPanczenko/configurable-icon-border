<template>
  <icon-border :complete="true" :animate="true" :improvements="['Time']" class="icon-demo">
    <img src="./assets/default.png" alt="A default test image">
  </icon-border>
  <icon-border :complete="true" :animate="true" :improvements="['Land', 'Plastic', 'Fairness', 'Time']" class="icon-demo">
    <img src="./assets/default.png" alt="A default test image">
  </icon-border>
  <icon-border :complete="true" :animate="true" :improvements="['Money', 'Land', 'Plastic', 'Fairness', 'Time']" class="icon-demo">
    <img src="./assets/default.png" alt="A default test image">
  </icon-border>
  <icon-border :complete="true" :animate="true" :improvements="['Carbon', 'Money', 'Land', 'Plastic', 'Fairness', 'Time']" class="icon-demo">
    <img src="./assets/default.png" alt="A default test image">
  </icon-border>
  <icon-border :animate="true" :improvements="['Fairness', 'Time']" class="icon-demo">
    <img src="./assets/default.png" alt="A default test image">
  </icon-border>
  <icon-border :animate="true" :improvements="['Plastic', 'Fairness', 'Time']" class="icon-demo">
    <img src="./assets/default.png" alt="A default test image">
  </icon-border>
  <icon-border :animate="true" :improvements="['Land', 'Plastic', 'Fairness', 'Time']" class="icon-demo">
    <img src="./assets/default.png" alt="A default test image">
  </icon-border>
  <icon-border :animate="true" :improvements="['Carbon', 'Money', 'Land', 'Plastic', 'Fairness', 'Time']" class="icon-demo">
    <img src="./assets/default.png" alt="A default test image">
  </icon-border>
</template>

<script>
export default {
  name: "App"
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  flex-wrap: wrap;
}

.icon-demo {
  height: 200px;
  width: 200px;

  margin: 30px;
}
</style>
