import React from 'react'


const Welcome = (props) => {

    return (
        <div className={'Welcome'}>
            <div className={'Welcome__message'}>
                <h1 className={'Welcome__title'}>Welcome to
                    <span className={'Welcome__title-s'}> S</span>
                    <span className={'Welcome__title-p'}>p</span>
                    <span className={'Welcome__title-l'}>l</span>
                    <span className={'Welcome__title-i'}>i</span>
                    <span className={'Welcome__title-t'}>t</span>.
                </h1>
                <h3 className={'Welcome__sub'}>Sign in or get started to create notes, plan your day and manage your Incomes in a secure way.</h3>
            </div>

        </div>
    )
};

export default Welcome