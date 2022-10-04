import { createRouter, createWebHistory } from 'vue-router'
import BodyGlobal from './../components/BodyGlobal.vue'
import Login from './../components/Login.vue'
import Books from './../components/Books.vue'
import Book from './../components/Book.vue'
import BooksAdmin from './../components/BooksAdmin.vue'
import BookEdit from './../components/BookEdit.vue'
import Users from './../components/Users.vue'
import User from './../components/UserEdit.vue'



const routes = [
    {
    path: '/',
    name: 'Home',
    component: BodyGlobal,
    },
    {
        path: '/login',
        name: "Login",
        component: Login,
    },
    {
        path: '/book',
        name: "book",
        component: Book,
    },
    {
        path: '/books',
        name: "books",
        component: Books,
    },
    {
        path: '/books/:bookName',
        name: "book",
        component: Book,
    },
    {
        path: '/admin/books',
        name: "booksAdmin",
        component: BooksAdmin,
    },
    {
        path: '/admin/books/:bookId',
        name: "BookEdit",
        component: BookEdit,
    },
    {
        path: '/admin/users',
        name: "Users",
        component: Users,
    },
    {
        path: '/admin/users/:userId',
        name: "User",
        component: User,
    },
]
const router = createRouter({history: createWebHistory(), routes})
export default router