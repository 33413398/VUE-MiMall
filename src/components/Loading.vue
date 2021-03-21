<template>
  <div class="loading">
    <img src="../../public/imgs/loading-svg/loading-bars.svg" alt="loding" />
  </div>
</template>

<script>
export default {
  name: 'loading',
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {},
}
</script>

<style lang="scss">
.loading {
  height: 80px;
  line-height: 80px;
  text-align: center;
  padding: 30px 0;
  img {
    height: 100%;
  }
}
</style>
