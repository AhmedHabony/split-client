import {Types} from "./types";


export const addNoteText = text => ({
    type: Types.ADD_NOTE_TEXT,
    payload: text
});
export const addNewNote = note => ({
    type: Types.ADD_NEW_NOTE,
    payload: note
});

export const addFontFamily = fontFamily => ({
   type: Types.ADD_FONT_FAMILY,
   payload: fontFamily
});

export const addFontSize = fontSize => ({
   type: Types.ADD_FONT_SIZE,
   payload: fontSize
});

export const addFontStyle = fontStyle => ({
   type: Types.ADD_FONT_STYLE,
   payload: fontStyle
});

export const addFontAlign = fontAlign => ({
   type: Types.ADD_FONT_ALIGN,
   payload: fontAlign
});

export const addFontColor = fontColor => ({
   type: Types.ADD_FONT_COLOR,
   payload: fontColor
});

