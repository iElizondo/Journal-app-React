import { db } from '../firebase/firebase-config';



export const loadNotes = async ( uid ) => {

   const notesSnapshot = await db.collection(`${ uid }/journal/notes`).get();
   const notes = [];

   notesSnapshot.forEach( snapHijo => {
       notes.push({
           id: snapHijo.id,
           ...snapHijo.data()
       })
   });

    return notes;
}