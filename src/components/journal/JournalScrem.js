import React from 'react';
import { useSelector } from 'react-redux';
import { NoteScrem } from '../../components/notes/NoteScrem';
import { NothingSelected } from './NothingSelected';
import { Sidebar } from './Sidebar';

export const JournalScrem = () => {

    const { active } = useSelector( state => state.notes )
    return (
        <div className="journal__main-content animate__animated animate__fadeIn animate__faster">
           <Sidebar />

           <main>

                {
                    ( active )
                        ?(<NoteScrem />)
                        :(<NothingSelected />)

                } 

           </main>

        </div>
    )
}
