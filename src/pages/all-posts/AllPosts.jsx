import { Link } from 'react-router-dom';

// Data
import blogposts from '../../constants/data.json';

// Components
import CommentsAndShares from '../../components/comments-and-shares/CommentsAndShares';

// Style
import './all-posts.css';

const AllPosts = () => {
    const totalAmountOfPosts = blogposts.length;

    return (
        <main>
            <header>
                <p className="number-of-posts">Aantal posts: {totalAmountOfPosts}</p>
            </header>
            <div className='blogposts-container'>
                {
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
                }
            </div>
        </main>
    );
}

export default AllPosts;