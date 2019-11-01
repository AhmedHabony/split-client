import {createSelector} from "reselect";


const getNote = state => state.note;


export const fontFamilySelector = createSelector(
    [getNote],
    note => note.fontFamily
);

export const fontSizeSelector = createSelector(
    [getNote],
    note => note.fontSize
);

export const fontStyleSelector = createSelector(
    [getNote],
    note => note.fontStyle
);

export const fontAlignSelector = createSelector(
    [getNote],
    note => note.fontAlign
);

export const fontColorSelector = createSelector(
    [getNote],
    note => note.fontColor
);

export const noteTextSelector = createSelector(
    [getNote],
    note => note.text
);

export const notesSelector = createSelector(
    [getNote],
    note => note.notes
);

