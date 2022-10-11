<template>
  <div class="container">
    <div class="row">
      <div class="col-md-2">
        <img v-if="this.ready" class="img-fluid img-thumbnail" :src="`${this.imgPath}/covers/${book.slug}.jpg`"
             :alt="`cover for ${book.title}`">
      </div>
      <div class="col-md-10">
        <template v-if="this.ready">
          <h3 class="mt-3">{{book.title}}</h3>
          <p>
            <strong>Author:</strong> {{book.author.author_name}} <br>
            <strong>Published:</strong> {{book.publication_year}}
          </p>
          <p>
            {{book.description}}
          </p>
          <hr>
          <button @click="clickedDownload">Download Book</button>
        </template>
        <p v-else>Loading...</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Book",
  data() {
    return {
      book: {},
      imgPath: process.env.VUE_APP_IMAGE_URL,
      ready: false,
    }
  },
  methods: {
    async clickedDownload(){
      const fileName= `${this.imgPath}/books/${this.book.slug}.fb2`;

      try {
        const response = await fetch(fileName)
        const blob = await response.blob();
        const url = await URL.createObjectURL(blob)

        const a = document.createElement("a");
        a.href = url;
        a.download = `${this.book.slug}.fb2`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } catch(err) {
        console.log({ err })
      }
    },
  },

  mounted() {
    fetch(process.env.VUE_APP_API_URL + "/books/" + this.$route.params.bookName)
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            this.$emit('error', data.message);
          } else {
            this.book = data.data;
            this.ready = true;
          }
        })
  }
}
</script>