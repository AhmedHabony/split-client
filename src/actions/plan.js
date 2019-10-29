import {Types} from "./types";


export const planType = type => ({
    type: Types.USE_PLAN_KIND,
    payload: type
});

export const addToToDo = to_Do => ({
    type: Types.ADD_TO_TODO,
    payload: to_Do
});

export const addToMAinFocus = main_focus => ({
    type: Types.ADD_TO_MAIN_FOCUS,
    payload: main_focus
});

export const addToToWishes = wishes => ({
    type: Types.ADD_TO_WISHES,
    payload: wishes
});

export const addCalendarDate = date => ({
    type: Types.ADD_CALENDAR_DATE,
    payload: date
});

export const editToDo = (oldPlan, newPlan) => ({
    type: Types.EDIT_TODO_PLAN,
    payload: {oldPlan, newPlan}
});
export const editMainFocus = (oldPlan, newPlan)=> ({
    type: Types.EDIT_MAIN_FOCUS_PLAN,
    payload: {oldPlan, newPlan}
});
