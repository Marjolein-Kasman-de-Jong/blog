import { Link } from 'react-router-dom';
import blogposts from '../../constants/data.json';
import './all-posts.css';

const AllPosts = () => {
    const totalAmountOfPosts = blogposts.length;

    return (
        <main>
            <header>
                <h1>Alle posts</h1>
                <p>Aantal posts: {totalAmountOfPosts}</p>
            </header>
            <div className='blogposts-container'>
                {
                    blogposts.map((blogpost) => {
                        return (
                            <Link to={`/blogpost/${blogpost.id}`} key={blogpost.id}>
                                <article className="blogpost-title" >
                                    <h2>{`${blogpost.title} (${blogpost.author})`}</h2>
                                    <p>{`${blogpost.comments} reacties - ${blogpost.shares} gedeeld`}</p>
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