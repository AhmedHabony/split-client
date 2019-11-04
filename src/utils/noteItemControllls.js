
export const createNoteItemTile = (note, limit = 2) => {
    let title = [];
    const noteSplit = note.split(' ');
    let oneLetterNote = note.split('');

    if (noteSplit[0].length > 9) {
        return `${oneLetterNote.slice(0, 9).join('')} ...`
    }

    for (let i = 0; i <= limit; i++) title.push(noteSplit[i]);

    if (noteSplit.length < 3) return note;
    return `${title.join(' ')} ...`
};

export const noteSummery = note => {
    let summary = note.split('');

    const noteSplit = note.split(' ');
    let oneLetterNote = note.split('');

    if (noteSplit[0].length > 9) {
        return `${oneLetterNote.slice(0, 9).join('')} ...`
    }
    let newSummery = [];

    if (summary.length < 120) return note;
    for (let i = 0; i < summary.length; i++) {
        if (newSummery.length < 120) {
            newSummery.push(summary[i])
        }

    }
    return `${newSummery.join('')} ...`

};

export const editNote = (notes, oldNote, newNote) => {

    const exist = notes.find(note => {
        return note.id === oldNote.id
    });

    if (exist) {
        oldNote.note = newNote.note;

        return [...notes]
    }

    return [...notes]
};

export const deleteNote = (notes, deletedNote) => {

    const exist = notes.find(note => {
        return note.id === deletedNote.id
    });

    if (exist) {
        notes.map((plan, i) => {
            if (plan.id === deletedNote.id){
                notes.splice(i, 1)
            }
            return [...notes]
        })
    }

    return [...notes]
};

