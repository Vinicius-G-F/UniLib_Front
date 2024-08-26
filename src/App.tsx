import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/global/Layout'
import { BooksPage } from './pages/BooksPage'
import { CategoriesPage } from './pages/CategoriesPage'
import { BookPage } from './pages/BookPage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout children={<BooksPage />} />
    },
    {
        path: '/categorias',
        element: <Layout children={<CategoriesPage />} />
    },
    {
        path: '/livro/:id',
        element: <Layout children={<BookPage />} />
    }
])

function App() {
    return <RouterProvider router={router} />
}

export default App
