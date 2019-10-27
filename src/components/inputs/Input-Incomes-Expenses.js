import React from 'react'


const InputIncomesExpenses = ({handleOnFocus , handleOnChange, ...otherProps }) => {

    return (
        <>
            <input step={0.01} className={'incomes-expenses-input'}  onFocus={handleOnFocus} onChange={handleOnChange} {...otherProps} />
        </>
    )
};

export default InputIncomesExpenses