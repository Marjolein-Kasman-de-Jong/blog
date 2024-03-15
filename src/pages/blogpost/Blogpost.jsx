import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// Data
import blogposts from '../../constants/data.json';

// Helpers
import formatDate from '../../helpers/formatDate';

// Components
import Button from '../../components/button/Button';
import CommentsAndShares from '../../components/comments-and-shares/CommentsAndShares';

// Style
import './blogpost.css';

const Blogpost = () => {
    const navigate = useNavigate();
    // Find blogpost
    const { id } = useParams();
    const blogpost = blogposts.find((blogpost) => {
        return (blogpost.id).toString() === id;
    });

    return (
        <main>
            <article className="blogpost">
                <header>
                    <hgroup>
                        <h1>{`${blogpost.title} (${blogpost.readTime} minuten)`}</h1>
                        <p className="subtitle">{blogpost.subtitle}</p>
                        <address>{`Geschreven door ${blogpost.author} op ${formatDate(blogpost.created)}`}</address>
                    </hgroup>
                </header>
                <p className='blogpost-p'>{blogpost.content}</p>
                <footer>
                    <CommentsAndShares comments={blogpost.comments} shares={blogpost.shares} />
                    <Button type="button" onClick={() => navigate("/alle-posts")} text="Alle posts" />
                </footer>
            </article>
        </main>
    );
}

export default Blogpost;