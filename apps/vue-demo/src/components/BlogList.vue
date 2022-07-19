<template>
  <div>BlogList{{ $route.params.id }}</div>
</template>

<script>
export default {
  name: "BlogList",
  created() {
    console.log(this.$route.params.id);
  },
};
</script>
