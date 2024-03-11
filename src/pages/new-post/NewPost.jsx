import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Helpers
import calculateReadTime from '../../helpers/calculateReadTime';

// Style
import './new-post.css';

const NewPost = () => {
    const navigate = useNavigate(); 
    
    const [formState, setFormState] = useState({
        title: '',
        subtitle: '',
        author: '',
        content: '',
        shares: 0,
        comments: 0,
        created: null,
        readTime: 0,
    });

    const [btnDisabled, toggleBtnDisabled] = useState(true);
    const [formSubmitted, setFormSubmitted] = useState(false);

    function handleChange(e) {
        const changedFieldName = e.target.name;
        const newValue = e.target.value;

        setFormState(prev => ({
            ...prev,
            [changedFieldName]: newValue,
        }));

        enableSubmit();
    }

    function enableSubmit() {
        if (
            formState.title.length > 0 &&
            formState.subtitle.length > 0 &&
            formState.author.length > 0 &&
            formState.content.length >= 300 &&
            formState.content.length <= 2000
        ) {
            toggleBtnDisabled(false);
        } else {
            // De submit button wordt één ingevoerd karakter te laat ge-enabled, omdat state 'achter ligt'. Wie weet hoe je dit fikst?
            toggleBtnDisabled(true);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        // Set formState.created and formState.readTime
        const dateCreated = new Date();
        setFormState(prev => ({
            ...prev,
            'created': dateCreated,
            'readTime': calculateReadTime(formState.content),
        }));
        // Set formSubmitted
        setFormSubmitted(true);
    }

    function continueAfterSubmit() {
        console.log(formState);
        // Regel 71 werkt, maar levert een foutmelding op: "Cannot update a component (`BrowserRouter`) while rendering a different component (`NewPost`)."
        // Is dat een probleem?
        navigate("/alle-posts");
    }

    return (
        <main>
            <form action="#">
                <label htmlFor="title">Titel</label>
                <input type="text" id="title" name="title" value={formState.title} required onChange={handleChange} />

                <label htmlFor="subtitle">Subtitel</label>
                <input type="text" id="subtitle" name="subtitle" value={formState.subtitle} required onChange={handleChange} />

                <label htmlFor="author">Auteur</label>
                <input type="text" id="author" name="author" value={formState.author} required onChange={handleChange} />

                <label htmlFor="content">Bericht</label>
                <textarea name="content" id="content" cols="30" rows="10" value={formState.content} onChange={handleChange}></textarea>

                <button type="submit" value="submit" onClick={(e) => handleSubmit(e)} disabled={btnDisabled}>Verzenden</button>
                
                {/* Wait for formSubmitted = true to log formState and navigate to /alle-posts */}
                {formSubmitted && continueAfterSubmit()}
            </form>
        </main>
    );
}

export default NewPost;