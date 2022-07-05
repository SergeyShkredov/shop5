<template>

  <!--  <div id="app">-->
  <!--    <nav class="navbar navbar-expand navbar-dark bg-dark">-->
  <!--      <a href class="navbar-brand" @click.prevent>Store</a>-->
  <!--      <div class="navbar-nav mr-auto">-->
  <!--        <li class="nav-item">-->
  <!--          <router-link to="/home" class="nav-link">-->
  <!--            <font-awesome-icon icon="home" />Home-->
  <!--          </router-link>-->
  <!--        </li>-->

  <!--        <li class="nav-item">-->
  <!--          <router-link to="/products" class="nav-link">-->
  <!--            <font-awesome-icon icon="user-plus" />Products-->
  <!--          </router-link>-->
  <!--        </li>-->

  <!--        <li class="nav-item">-->
  <!--          <router-link v-if="currentUser" to="/user" class="nav-link">User</router-link>-->
  <!--        </li>-->
  <!--      </div>-->

  <!--      <div v-if="!currentUser" class="navbar-nav ml-auto">-->
  <!--        <li class="nav-item">-->
  <!--          <router-link to="/register" class="nav-link">-->
  <!--            <font-awesome-icon icon="user-plus" />Sign Up-->
  <!--          </router-link>-->
  <!--        </li>-->
  <!--        <li class="nav-item">-->
  <!--          <router-link to="/login" class="nav-link">-->
  <!--            <font-awesome-icon icon="sign-in-alt" />Login-->
  <!--          </router-link>-->
  <!--        </li>-->
  <!--      </div>-->

  <!--      <div v-if="currentUser" class="navbar-nav ml-auto">-->
  <!--        <li class="nav-item">-->
  <!--          <router-link to="/profile" class="nav-link">-->
  <!--            <font-awesome-icon icon="user" />-->
  <!--            {{ currentUser.username }}-->
  <!--          </router-link>-->
  <!--        </li>-->
  <!--        <li class="nav-item">-->
  <!--          <a class="nav-link" href @click.prevent="logOut">-->
  <!--            <font-awesome-icon icon="sign-out-alt" />LogOut-->
  <!--          </a>-->
  <!--        </li>-->
  <!--      </div>-->
  <!--    </nav>-->

  <!--    <div class="container">-->
  <!--      <router-view />-->
  <!--    </div>-->
  <!--  </div>-->

  <!--  <Navbar-->
  <!--      :cartCount="cartCount"-->
  <!--      @resetCartCount="resetCartCount"-->
  <!--      v-if="!['Signup', 'Signin'].includes($route.name)"-->
  <!--  />-->

  <div style="min-height: 60vh">
    <div style="min-height: 60vh">
      <router-view
          v-if="products && categories"
          :products="products"
          :categories="categories"
          @getProducts="getProducts"
          @getCategories="getCategories"
      >
      </router-view>
    </div>
  </div>

</template>

<script>
import ProductService from "@/services/productService";
import Navbar from "@/components/Navbar";

export default {
  data() {
    return {
      products: null,
      categories: null,
      key: 0,
    };
  },

  methods: {
    async getProducts() {
      ProductService.getAllProducts()
          .then(response => {
            this.products = response.data
          })
          .catch(e => {
            alert(e)
          })
    },

    async getCategories() {
      ProductService.getCategories()
          .then(response => {
            this.categories = response.data
          })
          .catch(e => {
            alert(e)
          })
    },

  },
  mounted() {
    this.getProducts()
    this.getCategories()
  },
  components: {
    Navbar
  }
};
</script>

<style>
html {
  overflow-y: scroll;
}
</style>
