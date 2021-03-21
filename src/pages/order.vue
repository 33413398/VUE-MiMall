<template>
  <div class="order">
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavFooter from '../components/NavFooter.vue'
export default {
  components: { NavFooter },
  name: 'order',
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {},
}
</script>
