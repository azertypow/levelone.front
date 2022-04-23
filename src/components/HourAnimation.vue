<template>
  <div class="v-hour-animation">
    <div class="v-hour-animation__container">
      <img ref="background" src="../assets/intro/background.jpg" alt="background">
      <img ref="watch"      src="../assets/intro/watch.png"      alt="element">
      <img ref="hour"       src="../assets/intro/hour.png"       alt="hour">
      <img ref="minute"     src="../assets/intro/minute.png"     alt="minute">
      <img ref="second"     src="../assets/intro/second.png"     alt="second">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HourAnimation',
  components: {
  },

  mounted() {
    const second = this.$refs.second
    const minute = this.$refs.minute
    const hour = this.$refs.hour

    if (
        second instanceof HTMLElement
        && minute instanceof HTMLElement
        && hour instanceof HTMLElement
    ){

      this.setElementRotation({
        element: second,
        value: 30,
        incrementalAngleValue: 360 / 60,
      })

      this.setElementRotation({
        element: minute,
        value: 10,
        incrementalAngleValue: 360 / 60,
      })

      this.setElementRotation({
        element: hour,
        value: 10,
        incrementalAngleValue: 360 / 12,
      })

      setTimeout(() => {
        this.startAnimation({
          second,
          minute,
          hour,
        })
      }, 5_000)

    }

  },

  data() {
    return {
      frameCounter: 0,
    }
  },

  methods: {

    startAnimation({second, minute, hour}: { second: HTMLElement, minute: HTMLElement, hour: HTMLElement }) {

      const timeAnimation = 3000;

      second.style.transition = `transform ${timeAnimation}ms cubic-bezier(1, 0, .75, 1)`
      minute.style.transition = `transform ${timeAnimation}ms cubic-bezier(1, 0, .75, 1)`
      hour.style.transition   = `transform ${timeAnimation}ms cubic-bezier(1, 0, .75, 1)`

      const date = new Date()

      this.setElementRotation({
        element: second,
        value:                  (date.getTime() + timeAnimation )/ 1_000 % 60,
        incrementalAngleValue:  360 / 60,
      })

      this.setElementRotation({
        element: minute,
        value:                  (date.getTime() + timeAnimation ) / 1_000 / 60 % 60,
        incrementalAngleValue:  360 / 60,
      })

      this.setElementRotation({
        element: hour,
        value:                  ( (date.getTime() + timeAnimation ) / 1_000 / 60 / 60 % 24 ) + 1,
        incrementalAngleValue:  360 / 12,
      })

      window.setTimeout(() => {
        second.style.transition = ""
        minute.style.transition = ""
        hour.style.transition   = ""
        this.animation({second, minute, hour})
      }, timeAnimation)


    },

    animation(args: {
      second: HTMLElement,
      minute: HTMLElement,
      hour:   HTMLElement,
    }) {

      const date = new Date()

      // if(this.frameCounter % (60 / 5) === 0) {
        this.setElementRotation({
          element: args.second,
          value:                  date.getTime(),
          incrementalAngleValue:  360 / 60 / 1_000,
        })
      // }

      this.setElementRotation({
        element: args.minute,
        value:                  date.getTime(),
        incrementalAngleValue:  360 / 60 / 1_000 / 60,
      })

      this.setElementRotation({
        element: args.hour,
        value:                  date.getTime() + (1_000 * 60 * 60),
        incrementalAngleValue:  360 / 60 / 1_000 / 60 / 12,
      })

      window.requestAnimationFrame(() => {
        this.frameCounter++
        this.animation({second: args.second, minute: args.minute, hour: args.hour})
      })
    },

    setElementRotation(args: {
      value: number,
      incrementalAngleValue: number,
      element: HTMLElement,
    }) {
      const newAngle = args.value * args.incrementalAngleValue
      args.element.style.transform = `rotate(${newAngle}deg)`
    }

},


});
</script>

<style lang="scss" scoped>
.v-hour-animation {
  width:  100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.v-hour-animation__container {
  position: absolute;
  width: auto;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-bottom: solid var(--ui-border-width) var(--ui-border-color);

  @media (min-aspect-ratio: 1920/1330) {// image width / img height + navigation height * 2
    width: 100%;
    height: auto;
  }
}

img {
  position: absolute;
  width: auto;
  height: 100%;
  top: 0;
  left: 0;


  @media (min-aspect-ratio: 1920/1330) {// image width / img height + navigation height * 2
    width: 100%;
    height: auto;
  }
}

img:first-child {
  position: relative;
}

</style>
