import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Helpers
import calculateReadTime from '../../helpers/calculateReadTime';

// Components
import TextInput from '../../components/text-input/TextInput';
import Button from '../../components/button/Button';

// Style
import './new-post.css';

const NewPost = () => {
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
    const [postId, setPostId] = useState(0);

    function handleChange(e) {
        const changedFieldName = e.target.name;
        const newValue = e.target.value;

        setFormState(prev => ({
            ...prev,
            [changedFieldName]: newValue,
        }));
    }

    // Enable sumbit button
    useEffect(() => {
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
                toggleBtnDisabled(true);
            }
        }
        enableSubmit();
    }, [formState]);

    // Set state for dateCreated, readTime and formSubmitted when submit button is clicked 
    function handleSubmit(e) {
        e.preventDefault();
        const dateCreated = new Date();
        setFormState(prev => ({
            ...prev,
            'created': dateCreated,
            'readTime': calculateReadTime(formState.content),
        }));
        setFormSubmitted(true);
    }

    // Post data after all formState has been set
    useEffect(() => {
        async function postData() {
            try {
                const response = await axios.post('http://localhost:3000/posts', formState);
                // Set state for postId
                response.status === 201 && setPostId(response.data.id);
            } catch (error) {
                console.error(error);
            }
        }
        formSubmitted && postData();
    }, [formSubmitted]);

    return (
        <main>
            {
                formSubmitted && postId != 0 ?
                    <p className="success-message">De blogpost is succesvol toegevoegd. Je kunt deze <Link to={`/blogpost/${postId}`}>hier</Link> bekijken.</p>
                    :
                    <>
                        {formSubmitted && postId === 0 && <p className="fail-message">Er ging iets mis.</p>}

                        <form action="#" className='new-post'>

                            <fieldset>
                                <TextInput formState={formState} handleChange={handleChange} name="title" label="Titel" />
                                <TextInput formState={formState} handleChange={handleChange} name="subtitle" label="Subtitel" />
                                <TextInput formState={formState} handleChange={handleChange} name="author" label="Auteur" />
                            </fieldset>

                            <div className="content-area">
                                <label htmlFor="content">Bericht</label>
                                <textarea name="content" id="content" cols="30" rows="10" value={formState.content} onChange={handleChange} placeholder="De blogpost moet minimaal 300 en maximaal 2000 karakters lang zijn."></textarea>
                            </div>

                            <Button type="submit" value="submit" onClick={(e) => { handleSubmit(e) }} disabled={btnDisabled} text="Verzenden" />
                        </form>
                    </>
            }
        </main>
    );
}

export default NewPost;