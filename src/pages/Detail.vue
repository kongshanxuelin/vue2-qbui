<template>
  <div class="hello">
    <h1>Detail Page ,id = {{ id }} </h1>
    <router-link :to="{name:'detail', params:{id:44}}">
      <div>Detail44</div>
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: ''
    }
  },
  created () {
    const id = this.$route.params.id
    this.id = id
  },
  watch: {
    '$route' (to, from) {
      console.log('route change:', to, from)
      this.id = to.params.id
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
