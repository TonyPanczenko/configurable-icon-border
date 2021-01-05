<template lang="html">
  <svg :class="classFactory" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    <g v-if="complete" >
      <transition
        appear
        @before-enter="setInitArcStyle"
        @enter="setFinalArcStyle"
      >
        <circle
          :stroke-dashoffset="dashOffset"
          cy="100"
          cx="100"
          stroke-opacity="null"
          stroke-width="20"
          stroke-linecap="round"
          fill="none"
          r="90"
        />
      </transition>
    </g>
    <g v-else>
      <transition
        v-for="(coords, index) in circleCoordsFactory"
        :key="index"
        appear
        @before-enter="setInitCirclesStyle"
        @enter="setFinalCirclesStyle"
      >
        <circle
          :cy="coords.y"
          :cx="coords.x"
          :data-circlenum="index"
          stroke-width="0"
        />
      </transition>
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    complete: Boolean,
    animate: Boolean,
    variant: Object
  },
  data() {
    return {
      // animation configuration details
      animationDurationSec: 0.4,
      animationEasingFunction: "linear"
    };
  },
  computed: {
    // cached properties, to be calculated once or on change
    classFactory() {
      const obj = {
        complete: this.complete
      };
      obj["step-icon-border__arc--" + this.variant.improvement.toLowerCase()] = true;
      return obj;
    },
    circleLength() {
      return 2 * Math.PI * 90;
    },
    dashArray() {
      const arcLength = this.circleLength / this.variant.improvements.length;

      if (this.variant.improvements.length !== 1) {
        return "" + (arcLength - 30) + " " + this.circleLength;
      } else {
        // don't draw gaps when there is one improvement only
        return "" + (arcLength) + " " + this.circleLength;
      }
    },
    dashOffset() {
      const arcLength = this.circleLength / this.variant.improvements.length;
      const arcOffset = arcLength * this.variant.index;

      if (this.variant.improvements.length !== 1) {
        return "" + (- arcOffset - 15);
      } else {
        // don't draw gaps when there is one improvement only
        return "" + (- arcOffset);
      }
    },
    numOfCircles() {
      return {
        1: 24, 2: 24, 3: 24, 4: 24, 5: 25, 6: 24, 7: 21, 8: 24
      }[this.variant.improvements.length];
    },
    numOfCirclesInArc() {
      return this.numOfCircles / this.variant.improvements.length;
    },
    circleCoordsFactory() {
      const coordsArr = [];

      for (let i = 0; i < this.numOfCirclesInArc; i++) {
        let angle = 2 * Math.PI / this.numOfCircles * (i + this.numOfCirclesInArc * this.variant.index);
        angle += 0.5 * 2 * Math.PI / this.numOfCircles; // center the arcs
        coordsArr.push({
          x: 100 + 90 * Math.cos(angle),
          y: 100 - 90 * Math.sin(angle)
        });
      }

      return coordsArr;
    }
  },
  methods: {
    // inline styles are used instead of direct attributes and JS animation to
    // maintain access to default CSS easing functions and transitions
    setInitArcStyle(el) {
      if (this.animate) {
        const str = `stroke-dasharray ${this.animationDurationSec}s ${this.animationEasingFunction}`;
        el.style.transition = str;
        el.style.strokeDasharray = "0 " + this.circleLength;
      } else {
        el.style.strokeDasharray = this.dashArray;
      }
    },
    setFinalArcStyle(el, done) {
      if (this.animate) {
        setTimeout(() => {
          el.style.strokeDasharray = this.dashArray;
          done();
        }, 10);
      } else {
        done();
      }
    },
    setInitCirclesStyle(el) {
      if (this.animate) {
        const circleNum = el.getAttribute("data-circlenum");
        let str = `r ${this.animationDurationSec}s ${this.animationEasingFunction}`
        str += ` ${this.animationDurationSec / this.numOfCirclesInArc * circleNum}s`;
        el.style.transition = str;
        el.style.r = "0";
      } else {
        el.style.r = "8";
      }
    },
    setFinalCirclesStyle(el, done) {
      if (this.animate) {
        setTimeout(() => {
          el.style.r = "8";
          done();
        }, 10);
      } else {
        done();
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// colour variables can be moved to a file with site themes
$icon-border-arc-colors: (
  "land":               #a4cb26,
  "biodiversity":       #21b68a,
  "carbon":             #c74272,
  "wellbeing":          #efdb3a,
  "money":              #449a00,
  "time":               #f9a832,
  "fairness":           #ea9e9b,
  "health":             #e44a4a,
  "plastic":            #cf97cd
);
// ---

.step-icon-border__arc {
  position: absolute;
  left: 0;
  top: 0;
  transform: rotate3d(0, 0, 1, -90deg);

  @each $type, $color in $icon-border-arc-colors {
    &--#{$type} {
      @extend .step-icon-border__arc;
      stroke: $color;

      &:not(.complete) {
        fill: $color;
      }
    }
  }
}
</style>
