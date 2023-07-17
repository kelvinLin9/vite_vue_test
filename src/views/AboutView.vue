<template>
  <div class="about">
    <h1>{{ data.gender }}</h1>
  </div>
</template>


<script>
export default {
  data() {
    return {
      data: {}
    }
  },
  mounted() {
    const url = import.meta.env.VITE_PATH
    this.$http.get(url)
    .then((res) => {
      this.data = res.data.results[0]
    })
  }
} 
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  h1 {
    font-size: 10px;
  }
}
</style>
