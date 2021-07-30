import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote, startDaleting } from '../../acction/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScrem = () => {

    const dispatch = useDispatch()

    const { active:note } = useSelector( state => state.notes );
    const [ formValues, handleInputChange, reset ] = useForm(note);
    const { body, title, id} = formValues;

    const activeId = useRef( note.id );

    useEffect(() => {
        if(note.id !== activeId.current){
            reset(note);
            activeId.current = note.id;
        }
        
    }, [reset, note])

    useEffect(() => {

        dispatch( activeNote(formValues.id, {...formValues}) )
       
    }, [formValues, dispatch])

    const handleDelete = () => {
        dispatch( startDaleting(id) );
    }

    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                
                <input
                    test="text"
                    name="title"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    value={title}
                    onChange = { handleInputChange }
                />

                <textarea
                    name="body"
                    placeholder="What happend today" 
                    className="notes__textarea"
                    onChange = { handleInputChange }
                    value = {body}
                ></textarea>
                
                {
                    
                    (note.imageUrl) &&
                        (
                            <div className="notes__image">
                                <img 
                                    src= { note.imageUrl }
                                    alt="imagen" 
                                />
                            </div>
                        )
                }
            </div>
            
            <button
                className='btn btn-danger'
                onClick={ handleDelete }
            >
                Delete
            </button>

        </div>
    )
}
