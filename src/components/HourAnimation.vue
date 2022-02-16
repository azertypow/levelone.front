<template>
  <div class="v-hour-animation">
    <img ref="background" src="../assets/intro/background.png" alt="background">
    <img ref="watch"      src="../assets/intro/watch.png"      alt="element">
    <img ref="hour"       src="../assets/intro/hour.png"       alt="hour">
    <img ref="minute"     src="../assets/intro/minute.png"     alt="minute">
    <img ref="second"     src="../assets/intro/second.png"     alt="second">
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
        value: 30 * 2,
        incrementalAngleValue: 360 / 60 / 2, // 8
        element: second,
      })

      this.setElementRotation({
        value: 10,
        incrementalAngleValue: 360 / 60,
        element: minute,
      })

      this.setElementRotation({
        value: 10,
        incrementalAngleValue: 360 / 12,
        element: hour,
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

  methods: {

    startAnimation({second, minute, hour}: { second: HTMLElement, minute: HTMLElement, hour: HTMLElement }) {

      const currentDate = new Date()

      this.animation({
        frameNumber: 0,
        el: second,
        frameRatePerSecond: 60 / 2,
        incrementalAngleValue: 360 / 60 / 2,
        value: currentDate.getSeconds(),
      })

      this.animation({
        frameNumber: 0,
        el: minute,
        frameRatePerSecond: 60 * 60,
        incrementalAngleValue: 360 / 60,
        value: currentDate.getMinutes(),
      })

      this.animation({
        frameNumber: 0,
        el: hour,
        frameRatePerSecond: 60 * 60 * 60,
        incrementalAngleValue: 360 / 12,
        value: currentDate.getHours() + 1,
      })
    },

    animation(args: {
      frameNumber: number,
      el: HTMLElement,
      frameRatePerSecond: number,
      incrementalAngleValue: number,
      value: number
    }) {
      window.requestAnimationFrame(() => {

        if (args.frameNumber % args.frameRatePerSecond === 0) {

          this.setElementRotation({
            value: args.value,
            incrementalAngleValue: args.incrementalAngleValue,
            element: args.el,
          })

          args.value++
        }

        this.animation({
          frameNumber: args.frameNumber + 1,
          el: args.el,
          incrementalAngleValue: args.incrementalAngleValue,
          frameRatePerSecond: args.frameRatePerSecond,
          value: args.value,
        })
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

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
  }
}
</style>
