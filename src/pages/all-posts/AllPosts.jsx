import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Components
import CommentsAndShares from '../../components/comments-and-shares/CommentsAndShares';

// Style
import './all-posts.css';

const AllPosts = () => {
    const [blogposts, setBlogposts] = useState([]);
    const [totalAmountOfPosts, setTotalAmountOfPosts] = useState(0);

    async function getAllPosts() {
        try {
            const response = await axios.get('http://localhost:3000/posts');
            setBlogposts(response.data);
            setTotalAmountOfPosts(response.data.length);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getAllPosts();
    }, [])

    return (
        <main>
            <header>
                <p className="number-of-posts">Aantal posts: {totalAmountOfPosts}</p>
            </header>
            <div className='blogposts-container'>
                {
                    blogposts.length > 0 ?
                        blogposts.map((blogpost) => {
                            return (
                                <Link to={`/blogpost/${blogpost.id}`} key={blogpost.id}>
                                    <article className="blogpost-title" >
                                        <h2>{`${blogpost.title} (${blogpost.author})`}</h2>
                                        <CommentsAndShares comments={blogpost.comments} shares={blogpost.shares} />
                                    </article>
                                </Link>
                            );
                        })
                        :
                        <p>Geen blogposts gevonden.</p>
                }
            </div>
        </main>
    );
}

export default AllPosts;