import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from './../../assets/Logo.svg';

class Header extends Component {
    render() {
        return (
            <div className={'Header'}>
                <Link to={''}>
                    <Logo className={'Header__logo'}/>
                </Link>

                <div className={'Header__features'}>

                    <Link to={'/note'} className={'Header__features__link Header__features__link-note '}>
                        <span className={'Header__features__link-name'}>Create A Note</span>
                    </Link>

                    <Link to={'/to-do'}   className={'Header__features__link Header__features__link-plan'}>
                        <span className={'Header__features__link-name'} >Plan The Day</span>
                    </Link>

                    <Link to={'/incomes'}   className={'Header__features__link Header__features__link-income'}>
                        <span className={'Header__features__link-name'}>Manage Incomes</span>
                    </Link>

                </div>

                <div className={'Header__sign'}>
                    <Link className={'Header__sign__link  Header__sign-in__link'} to={'/'}>
                        <span className={'Header__sign__link-name'}>Sign In</span>
                    </Link>

                    <Link className={'Header__sign__link Header__sign-up__link'} to={'/'}>
                        <span className={'Header__sign__link-name'}>Get Started</span>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Header;