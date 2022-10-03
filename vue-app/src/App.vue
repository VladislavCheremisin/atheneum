<template>
  <HeaderGlobal />

  <div>
    <router-view />
  </div>
  <FooterGlobal />

</template>

<script>
import HeaderGlobal from "./components/HeaderGlobal"
import FooterGlobal from "./components/FooterGlobal"
import { store } from './components/store.js'



export default {
name:'App',
  components: {
    HeaderGlobal,
    FooterGlobal,
  },
  data() {
    return {
      store
    }
  }
}
</script>
