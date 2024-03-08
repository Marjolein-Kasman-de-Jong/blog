import { useParams } from 'react-router-dom';
import './blogpost.css';

const Blogpost = () => {
    const { id } = useParams();

    return (
        <main>
            <h1>Blogpost {id}</h1>
        </main>
    );
}

export default Blogpost;