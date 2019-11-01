export const createNoteItemTile = note => {
    let title = [];
    let onLetterNoteTitle = []
    const noteSplit = note.split(' ');
    let oneLetterNote = note.split('');

    if (noteSplit[0].length > 9) {
        return `${oneLetterNote.slice(0, 9).join('')} ...`
    }

    for (let i = 0; i <= 2; i++) title.push(noteSplit[i]);

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

    if (summary.length < 120) return note
    for (let i = 0; i < summary.length; i++) {
        if (newSummery.length < 120) {
            newSummery.push(summary[i])
        }

    }
    return `${newSummery.join('')} ...`

};