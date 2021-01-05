<template lang="html">
  <div class="step-icon-border">
    <!-- dynamic icon content will go in here -->
    <slot>
      <img src="1" alt="Please use this component with an image">
    </slot>
    <!--  -->
    <border-arc
      v-for="(improvement, index) in improvements"
      :key="improvement"
      :variant="{improvement, index, improvements}"
      :complete="complete"
      :animate="animate"
    />
  </div>
</template>

<script>
import IconBorderArc from "./IconBorderArc.vue";

export default {
  components: {
    "border-arc": IconBorderArc
  },
  props: {
    complete: {
      type: Boolean,
      required: false,
      default: false
    },
    animate: {
      type: Boolean,
      required: false,
      default: false
    },
    improvements: {
      type: Array,
      required: true,
      validator: value => value.length < 9
    }
  }
}
</script>

<style lang="scss">
.step-icon-border {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    height: 55%;
    width: 55%;
    object-fit: contain;
  }
}
</style>
