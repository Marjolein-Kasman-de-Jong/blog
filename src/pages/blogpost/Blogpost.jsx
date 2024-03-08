import { useParams } from 'react-router-dom';
import './blogpost.css';

const Blogpost = () => {
    const { id } = useParams();

    return (
        <>
            <h1>Blogpost {id}</h1>
        </>
    );
}

export default Blogpost;