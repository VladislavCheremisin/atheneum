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



export default {
name:'App',
  components: {
    HeaderGlobal,
    FooterGlobal,
  }
}
</script>
