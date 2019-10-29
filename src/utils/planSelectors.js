import {createSelector} from 'reselect'



const getPlan = state => state.plan;

export const planTypeSelector = createSelector(
    [getPlan],
    plan => plan.type
)


export const getCalendarDate = createSelector(
    [getPlan],
    plan => plan.calendarDate
)

export const getAllToDos = createSelector(
    [getPlan],
    plan => plan.toDos
)

export const getAllMainFocus = createSelector(
    [getPlan],
    plan => plan.mainFocus
)

export const getAllWishes = createSelector(
    [getPlan],
    plan => plan.wishes
)


