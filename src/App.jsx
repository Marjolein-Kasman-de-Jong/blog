import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import AllPosts from './pages/all-posts/AllPosts';
import NewPost from './pages/new-post/NewPost';
import Blogpost from './pages/blogpost/Blogpost';
import PageNotFound from './pages/page-not-found/PageNotFound';
import './App.css'

function App() {
    return (
        <div className="page-container">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/alle-posts" element={<AllPosts />} />
                <Route path="/nieuwe-post-maken" element={<NewPost />} />
                <Route path="/blogpost/:id" element={<Blogpost />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    )
}

export default App
