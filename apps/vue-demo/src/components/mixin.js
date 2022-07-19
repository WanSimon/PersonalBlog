export default {
  data: function () {
    return {
      message: "hello",
      foo: "abc",
    };
  },
  methods: {
    getAddress: function () {
      console.log(this.foo);
    },
  },
};
