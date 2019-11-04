import React, {Component} from 'react';
import {ReactComponent as Logo} from './../../assets/Logo.v2.svg'

import {ReactComponent as Google} from './../../assets/google.svg'
import {ReactComponent as Facebook} from './../../assets/facebook.svg'
import {ReactComponent as Twitter} from './../../assets/twitter.svg'

class GetStartedCard extends Component {
    render() {
        return (
            <div className={'GetStartedCard'}>
                <div className={'GetStartedCard__logo'}><Logo className={'GetStartedCard__logo-icon'}/></div>
                <p className={'GetStartedCard__mainTitle'}>
                    <span className={'GetStartedCard__mainTitle-special'}>
                        <span style={{color: '#00A4EF', fontWeight: 'bold'}}>S</span>
                        <span style={{color: '#FFB900', fontWeight: 'bold'}}>p</span>
                        <span style={{color: '#207561', fontWeight: 'bold'}}>l</span>
                        <span style={{color: '#7FBA00', fontWeight: 'bold'}}>i</span>
                        <span style={{color: '#F25022', fontWeight: 'bold'}}>t </span>
                    </span>
                    your day, and manage you daily expenses
                </p>
                <div className={'GetStartedCard__signUp'}>
                    <div className={'GetStartedCard__signUp-withEmail'}>
                        <form className={'GetStartedCard__signUp-withEmail__form'}>
                            <div className={'GetStartedCard__signUp-withEmail__form-name'}>
                                <span>
                                    <label className={'formLabels'} htmlFor={'first-name'}>FIRST NAME</label>
                                    <input
                                        className={'getStartInput'}
                                        placeholder={'First Name'}
                                        id={'first-name'}
                                        type={'text'}
                                    />
                                </span>
                                <span>
                                    <label className={'formLabels'} htmlFor={'last-name'}>LAST NAME</label>
                                    <input
                                        className={'getStartInput'}
                                        placeholder={'Last Name'}
                                        id={'last-name'}
                                        type={'text'}
                                    />
                                </span>
                            </div>

                            <div className={'GetStartedCard__signUp-withEmail__form-single GetStartedCard__signUp-withEmail__form-email'}>
                                <label className={'formLabels'} htmlFor={'email'}> EMAIL</label>
                                <input
                                    className={'getStartInput'}
                                    id={'email'}
                                    type={'email'}
                                    placeholder={'Email'}
                                />
                            </div>

                            <div className={'GetStartedCard__signUp-withEmail__form-single GetStartedCard__signUp-withEmail__form-password'}>
                                <label className={'formLabels'} htmlFor={'password'}> PASSWORD </label>
                                <input
                                    className={'getStartInput'}
                                    id={'password'}
                                    type={'password'}
                                    placeholder={'Password'}
                                />
                            </div>
                            <button className={'signUpBtn'}>Sign Up</button>
                        </form>
                    </div>
                    <div className={'GetStartedCard__signUp-withOtherOptions'}>
                        <button
                            className={'GetStartedCard__signUp-withOtherOptions-btn GetStartedCard__signUp-withOtherOptions-btn-google '}>
                            <Google className={'GetStartedCard__signUp-withOtherOptions-btn-icon'}/>
                            Continue with Google
                        </button>
                       <button
                            className={'GetStartedCard__signUp-withOtherOptions-btn GetStartedCard__signUp-withOtherOptions-btn-facebook '}>
                            <Facebook className={'GetStartedCard__signUp-withOtherOptions-btn-icon'}/>
                            Continue with Facebook
                        </button>
                       <button
                            className={'GetStartedCard__signUp-withOtherOptions-btn GetStartedCard__signUp-withOtherOptions-btn-twitter '}>
                           <Twitter className={'GetStartedCard__signUp-withOtherOptions-btn-icon'}/>
                           Continue with Twitter
                        </button>

                    </div>
                </div>
            </div>
        );
    }
}

export default GetStartedCard;