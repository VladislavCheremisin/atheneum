<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1 class="mt-3">Add/Edit Book</h1>
        <hr>
        <form-tag @bookEditEvent="submitHandler" name="bookForm" event="bookEditEvent">
          <div v-if="this.book.slug !==''" class="mb-3">
            <img :src="`${this.imgPath}/covers/${this.book.slug}.jpg`" class="img-fluid img-thumbnail book-cover" alt="cover">
          </div>
          <div class="mb-3">
            <label for="formFileBook" class="form-label">Cover Books</label>
            <input v-if="this.book.id === 0"
                   ref="file"
                   class="form-control"
                   type="file"
                   id="formFileBook"
                   @change="saveFileName"
                   required>
            <input v-else
                   ref="file"
                   class="form-control"
                   type="file"
                   id="formFileBook"
                   @change="saveFileName"
                   >
          </div>

          <div class="mb-3">
            <label for="formFile" class="form-label">Cover Image</label>
            <input v-if="this.book.id === 0"
                   ref="coverInput"
                   class="form-control"
                   type="file"
                   id="formFile"
                   required
                   accept="image/jpg"
                   @change="loadCoverImage">
            <input v-else
                   ref="coverInput"
                   class="form-control"
                   type="file"
                   id="formFile"
                   accept="image/jpg"
                   @change="loadCoverImage">
          </div>
          <text-input
            v-model="book.title"
            type="text"
            required="true"
            label="Title"
            :value="book.title"
            name="title"></text-input>
          <select-input
            name="author-id"
            v-model="this.book.author_id"
            :items="this.authors"
            required="required"
            label="Author"></select-input>
          <text-input
              v-model="book.publication_year"
              type="number"
              required="true"
              label="Publication Year"
              :value="book.publication_year"
              name="publication_year"></text-input>
          <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <textarea required v-model="book.description" class="form-control" id="description" rows="3"></textarea>
          </div>
          <div class="mb-3">
            <label for="genres" class="form-label">Genres</label>
            <select ref="genres"
                    id="genres"
                    class="form-select"
                    required
                    size="7"
                    v-model="this.book.genre_ids"
                    multiple>
              <option v-for="g in this.genres" :value="g.value" :key="g.value">
                {{g.text}}
              </option>
            </select>
            <br>
          </div>
          <hr>
          <div class="float-start">
            <input type="submit" class="btn btn-primary me-2" value="Save" />
            <router-link to="/admin/books" class="btn btn-outline-secondary">Cancel</router-link>
          </div>
          <div class="float-end">
            <a v-if="this.book.id >0" href="javascript:void(0);" @click="confirmDelete(this.book.id, this.book.book_file_name)" class="btn btn-danger">
              Delete
            </a>
          </div>
          <div class="clearfix"></div>
        </form-tag>
      </div>
    </div>
  </div>
</template>

<script>
import Security from "./security.js";
import FormTag from "@/components/forms/FormTag";
import TextInput from "@/components/forms/TextInput";
import SelectInput from "@/components/forms/SelectInput";
import notie from 'notie'
import router from "@/router";
import axios from "axios"
import {store} from "@/components/store";

export default {
  name: "BookEdit",
  beforeMount() {
    Security.requireToken();

    //  get book for edit if id > 0
    if (this.$route.params.bookId > 0) {
      //  editing a book
      fetch(process.env.VUE_APP_API_URL + "/admin/books/" + this.$route.params.bookId, Security.requestOptions(""))
          .then((response) => response.json())
          .then((data) => {
            if (data.error) {
              this.$emit('error', data.message);
            } else {
              this.book = data.data;
              let genreArray = [];
              for (let i = 0; i < this.book.genres.length; i++) {
                genreArray.push(this.book.genres[i].id);
              }
              this.book.genre_ids = genreArray;
            }
          })
    }

    //  get list of authors
    fetch(process.env.VUE_APP_API_URL + "/admin/authors/all", Security.requestOptions())
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            this.$emit('error', data.message);
          } else {
            this.authors = data.data;
          }
        })
  },
  components: {
    'form-tag': FormTag,
    'text-input': TextInput,
    'select-input': SelectInput,
  },
  data() {
    return {
      book: {
        id: 0,
        title: "",
        author_id: 0,
        publication_year: null,
        description: "",
        cover: "",
        slug: "",
        book_file_name: "",
        genres: [],
        genre_ids: [],
      },
      authors: [],
      imgPath: process.env.VUE_APP_IMAGE_URL,
      genres: [
        {value: 1, text: "Science Fiction"},
        {value: 2, text: "Fantasy"},
        {value: 3, text: "Romance"},
        {value: 4, text: "Thriller"},
        {value: 5, text: "Mystery"},
        {value: 6, text: "Horror"},
        {value: 7, text: "Classic"},
      ]
    }
  },
  methods: {
    submitHandler() {
      const payload = {
        id: this.book.id,
        title: this.book.title,
        author_id: parseInt(this.book.author_id, 10),
        publication_year: parseInt(this.book.publication_year, 10),
        description: this.book.description,
        cover: this.book.cover,
        slug: this.book.slug,
        book_file_name: this.book.book_file_name,
        genre_ids: this.book.genre_ids,
      }

      const selectedFile = this.$refs.file.files[0];
      const formData = new FormData();
      formData.append('book_file', selectedFile);
      axios.post(`${process.env.VUE_APP_API_URL}/admin/books/save-book-file`, formData,  {
        headers: {
          'Content-Type': 'multipart/form-data',
          "Authorization": "Bearer " + store.token
        }
      } ).then((res) => {
        res.data.file; // binary representation of the file
        res.status; // HTTP status
      })
          .then(function () {
            console.log('SUCCESS!!');
          })
          .catch(function () {
            console.log('FAILURE!!');
          });

      fetch(`${process.env.VUE_APP_API_URL}/admin/books/save`, Security.requestOptions(payload))
          .then((response) => response.json())
          .then((data) => {
            console.log("data", data);
            if (data.error) {
              this.$emit('error', data.message);
            } else {
              this.$emit('success', 'Changes saved');
              router.push("/admin/books")
            }
          })
          .catch(error => {
            this.$emit('error', error)
          })
    },
    // Download book file
    async clickedDownload() {
      const fileName = `${this.imgPath}/books/${this.book.book_file}.fb2`;

      try {
        const response = await fetch(fileName)
        const blob = await response.blob();
        const url = await URL.createObjectURL(blob)

        const a = document.createElement("a");
        a.href = url;
        a.download = `${this.book.book_file}.fb2`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } catch (err) {
        console.log({err})
      }
    },
    loadCoverImage() {
      //  get a reference to the input using ref
      const file = this.$refs.coverInput.files[0];

      //encode the file
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result
            .replace("data:", "")
            .replace("image/jpeg;base64,", "")
            .replace(/^,+,/, "");
        this.book.cover = base64String;
      }
      reader.readAsDataURL(file);
    },
    confirmDelete(id, book_file_name) {
      notie.confirm({
        text: "Are you sure you want to delete this book?",
        submitText: "Delete",
        submitCallback: () => {
          let payload = {
            id: id,
            book_file_name: book_file_name,
          }

          fetch(`${process.env.VUE_APP_API_URL}/admin/books/delete`, Security.requestOptions(payload))
              .then((response) => response.json())
              .then((data) => {
                if (data.error) {
                  this.$emit('error', data.message);
                } else {
                  this.$emit('success', "Book deleted");
                  router.push("/admin/books");
                }
              })
        }
      })
    },
    saveFileName() {
      this.book.book_file_name = this.$refs.file.files[0].name
    },
  }
}



</script>

<style scoped>
.book-cover {
  max-width: 10em;
}
</style>