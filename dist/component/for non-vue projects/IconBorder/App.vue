<template>
  <icon-border :complete="complete" :animate="animate" :improvements="improvements">
    <img :src="imgSrc" :alt="imgAlt">
  </icon-border>
</template>

<script>
import IconBorder from "./IconBorder.vue";

export default {
  name: "App",
  components: {
    "icon-border": IconBorder
  },
  data() {
    return {
      complete: false,
      animate: false,
      improvements: [],
      imgSrc: "",
      imgAlt: ""
    };
  }
}
</script>
