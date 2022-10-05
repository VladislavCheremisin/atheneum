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

const getCookie = (name) => {
  return document.cookie.split("; ").reduce((r, v) => {
    const parts = v.split("=");
    return  parts[0] === name ? decodeURIComponent(parts[1]) : r;
  }, "");
}



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
  },
  beforeMount() {
  //check for a cookie
    let data = getCookie("_site_data");

    if (data !== "") {
      let cookieData = JSON.parse(data);

    //  update store
      store.token = cookieData.token.token;
      store.user = {
        id: cookieData.user.id,
        first_name: cookieData.user.first_name,
        last_name: cookieData.user.last_name,
        email: cookieData.user.email,
      }
    }
  },
  mounted() {

    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer " + store.token);


  }
}
</script>
