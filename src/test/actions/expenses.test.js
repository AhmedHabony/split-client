import * as actions from './../../actions/expenses'
import * as types from './../../actions/types'
import thunkMiddleware from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

export const mockStore = configureMockStore([thunkMiddleware]);


describe('actions', function () {

    it('should create an action to add new expense', function () {
        const expense = {value: '10', desc: 'for andomi'};
        const expectedAction = {
            type: types.Types.ADD_NEW_EXPENSES,
            payload: expense
        };
        expect(actions.addNewExpenses(expense)).toEqual(expectedAction)
    });

});


