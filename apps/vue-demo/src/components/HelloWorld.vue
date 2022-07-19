<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 v-once>{{ lake }}</h2>
    <h3 v-html="url"></h3>
    <h2 v-text="lake"></h2>
    <!-- 一般不用v-text,不够灵活 -->
    <h2 v-pre>{{ lake }}</h2>
    <h3 v-cloak>这是尹山湖{{ lakeName }}</h3>
    <img v-bind:src="imgURL" alt="" />
    <span :class="{ mycolor: color, myborder: true }">WanSimon</span>

    <span :class="['mycolor', 'myborder']">WanSimon</span>
    <button v-on:click="changeColor()">改变字体颜色</button>
    <ul>
      <li v-for="(item, index) in movies" v-bind:key="index">{{ item }}</li>
    </ul>
    <ul>
      <li
        v-for="(item, index) in movies"
        v-bind:key="index"
        v-on:click="changeMovieColor(index)"
        :class="{ movieColor: stars[index] }"
      >
        {{ item }}
      </li>
    </ul>
    <div>{{ getFullName() }}</div>
    <div
      v-for="(item, index) in movies"
      v-bind:key="index"
      v-on:click="changeMovieColor(index)"
      :class="{ movieColor: stars[index] }"
    >
      {{ item }}
      {{ stars[index] }}
    </div>
    <span>{{ fullName }}</span>
    <span>书本总价格{{ totalPrice }}</span>
    <input v-focus />
    <div id="hook-arguments-example" v-demo:foo.a.b="message"></div>
    <anchored-heading :level="4">HelloWorld</anchored-heading>
  </div>
</template>

<script>
import mixin from "./mixin.js";
// var mixin = {
//   data: function () {
//     return {
//       message: "hello",
//       foo: "abc",
//     };
//   },
// };
export default {
  name: "HelloWorld",
  mixins: [mixin],
  props: {
    msg: String,
  },
  data() {
    return {
      lake: "yishanhu",
      url: `<a href="http://www.baidu.com">百度一下</a>`,
      lakeName: "尹山湖",
      color: true,
      border: false,
      imgURL:
        "https://imgcps.jd.com/ling4/100038849174/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5f3a47329785549f6bc7a6f9/8f72d490/cr/s/q.jpg",
      movies: ["火影忍者", "三国演义", "海贼王", "忍者神龟"],
      stars: [true, false, false, false],
      firstName: "Wan",
      lastName: "Simon",
      books: [
        { id: 110, name: "wansimon", price: 34 },
        { id: 111, name: "深入理解计算机原理", price: 56 },
        { id: 112, name: "现代操作系统", price: 234 },
      ],
    };
  },
  created() {
    this.getAddress();
    // this.$data.getAddress();
  },
  methods: {
    changeColor() {
      this.color = !this.color;
    },
    getFullName() {
      return this.firstName + " " + this.lastName;
    },
  },
  computed: {
    fullName: function () {
      return `${this.firstName}-${this.lastName}-computed`;
    },
    totalPrice: function () {
      return this.books.reduce((pre, cur) => {
        return pre + cur.price;
      }, 0);
    },
  },
  watch: {
    changeMovieColor: function (index) {
      console.log(index);
      this.stars[index] = true;
      console.log(this.stars);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
.movieColor {
  color: blueviolet;
}
.mycolor {
  color: #42b983;
}
.myborder {
  border: #42b983 solid 1px;
}
[v-cloak] {
  display: none;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
