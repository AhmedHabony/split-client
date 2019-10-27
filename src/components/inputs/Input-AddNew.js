import React from 'react'


const InputAddNew = ({type, placeholder, handleChange, ...otherProps}) => {

    return (
        <>
            <input className={'AddForm__input'} type={type} placeholder={placeholder} onChange={handleChange} {...otherProps}/>
        </>
    )
};

export default InputAddNew