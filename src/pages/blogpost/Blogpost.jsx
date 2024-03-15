import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
    const [singlePost, setSinglePost] = useState({});

    async function getSinglePost() {
        try {
            const response = await axios.get(`http://localhost:3000/posts/${id}`);
            setSinglePost(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getSinglePost();
    }, [])

    return (
        <main>
            {
                Object.keys(singlePost).length !== 0 ?
                    <article className="blogpost">
                        <header>
                            <hgroup>
                                <h1>{`${singlePost.title} (${singlePost.readTime} minuten)`}</h1>
                                <p className="subtitle">{singlePost.subtitle}</p>
                                <address>{`Geschreven door ${singlePost.author} op ${formatDate(singlePost.created)}`}</address>
                            </hgroup>
                        </header>
                        <p className='blogpost-p'>{singlePost.content}</p>
                        <footer>
                            <CommentsAndShares comments={singlePost.comments} shares={singlePost.shares} />
                            <Button type="button" onClick={() => navigate("/alle-posts")} text="Alle posts" />
                        </footer>
                    </article>
                    :
                    <p>Blogpost niet gevonden.</p>
            }
        </main>
    );
}

export default Blogpost;