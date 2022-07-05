<template>

  <div>
    <div class="card-body">

        <h4 class="card-title">{{ product.name }}</h4>
        <div class="card-text">{{ product.category }}</div>
        <div class="card-text">{{ product.price }}</div>

      <router-link :to="{ name: 'ShowDetails', params: { id: product.id } }"
      ><h5 class="card-title">{{ product.name }}</h5></router-link>

    </div>
  </div>

</template>

<script>
export default {
  name: "ProductBox",
  props: ["product"],
  methods: {
    showDetails() {
      this.$router.push({
        name: "ShowDetails",
        params: { id: this.product.id },
      });
    },
  },
};
</script>

<style scoped>

</style>
