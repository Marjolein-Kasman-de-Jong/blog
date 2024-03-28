// Style
import './comments-and-shares.css';

const CommentsAndShares = ({ comments, shares }) => {
    return (
        <p>{`${comments} reacties - ${shares} keer gedeeld`}</p>
    );
}

export default CommentsAndShares;