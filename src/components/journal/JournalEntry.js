import React from 'react';
import moment from 'moment';
import { activeNote } from '../../acction/notes';
import { useDispatch } from 'react-redux';

export const JournalEntry = ({ id, date, title, body, imageUrl }) => {
    
    const dispatch = useDispatch();
    const noteDate = moment(date);

    const noteActive = {
        id: id,
        title: title,
        body: body,
        imageUrl: imageUrl,
        date: date
    }
  
    const handleEntryClick = () => {
        dispatch(activeNote(id, noteActive));
    }

    return (
        <div 
            className="journal__entry pointer animate__animated animate__fadeIn animate__faster"
            onClick={handleEntryClick}
        >

           { 
                imageUrl &&
                <div 
                    className="journal__entry-picture"
                    style={{ 
                        backgroundSize: 'cover',
                        backgroundImage: `url(${imageUrl})`,
                    }}
                    ></div>
            }

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    { title }
                </p>
                <p className="journal__entry-content">
                    { body } 
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>{ noteDate.format('dddd') }</span>
                <h4>{ noteDate.format('Do') }</h4>
            </div>
        </div>
    )
}
