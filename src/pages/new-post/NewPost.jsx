import { useState } from 'react';
import './new-post.css';


const NewPost = () => {
    const [formState, setFormState] = useState({
        title: '',
        subtitle: '',
        author: '',
        content: '',

        btnDisabled: true,
    });

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
        if (formState.title != '' && formState.subtitle != '' && formState.author != '' && formState.content.length >= 300 && formState.content.length <= 2000) {
            setFormState(prev => ({
                ...prev,
                btnDisabled: false,
            }));
        } else {
            setFormState(prev => ({
                ...prev,
                btnDisabled: true,
            }));
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
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

                <button type="submit" value="submit" onClick={(e) => handleSubmit(e)} disabled={formState.btnDisabled}>Verzenden</button>
            </form>
        </main>
    );
}

export default NewPost;