import React from 'react'


const InputIncomesExpenses = ({ handleOnChange, ...otherProps }) => {

    return <input step={0.01} className={'incomes-expenses-input'} onChange={handleOnChange} {...otherProps} />
};
export default InputIncomesExpenses