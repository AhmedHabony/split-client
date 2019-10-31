import React from 'react'


const InputIncomesExpenses = ({ handleOnChange, ...otherProps }) => {

    return <input pattern={`[0-9]+([\\.,][0-9]+)?`} step={0.01} className={'incomes-expenses-input'} onChange={handleOnChange} {...otherProps} />
};
export default InputIncomesExpenses