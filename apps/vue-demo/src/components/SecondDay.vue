<template>
  <div>
    <div>{{ counter }}</div>
    <button v-on:click="counter++">+</button>
    <button v-on:click="counter--">-</button>
    <button v-on:click="increment(2)">increment</button>
    <button v-on:click="decrement(5, $event)">decrement</button>
    <div @click="divClick">
      <button @click.stop="btnClick">button按钮</button>
      <a @click.prevent.stop="" href="http://www.baidu.com">百度一下</a>
    </div>
    <form action="baidu">
      <input type="submit" value="Submit" @click.prevent="submitClick" />
    </form>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "SecondDay",
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increment(e) {
      this.counter += e;
    },
    decrement(e, event) {
      this.counter -= e;
      console.log(event);
    },
    btnClick() {
      console.log("btnClick");
    },
    divClick() {
      console.log("divClick");
    },
    submitClick() {
      console.log("submitClick");
    },
  },
};
</script>
