import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from './../../assets/Logo.svg';
import {isSignInCardOpn} from "../../actions/signIn";
import {connect} from "react-redux";

class Header extends Component {

    onSignInBtnClick = e => {
        const{isSignInCardOpn} = this.props
        isSignInCardOpn(true)
    };
    render() {
        return (
            <div className={'Header'}>
                <Link to={''}>
                    <Logo className={'Header__logo'}/>
                </Link>

                <div className={'Header__features'}>

                    <Link to={'/notes'} className={'Header__features__link Header__features__link-note '}>
                        <span className={'Header__features__link-name'}>Create A Note</span>
                    </Link>

                    <Link to={'/plan'} className={'Header__features__link Header__features__link-plan'}>
                        <span className={'Header__features__link-name'}>Plan The Day</span>
                    </Link>

                    <Link to={'/incomes'} className={'Header__features__link Header__features__link-income'}>
                        <span className={'Header__features__link-name'}>Manage Incomes</span>
                    </Link>

                </div>

                <div className={'Header__sign'}>
                    <button className={'Header__sign__link  Header__sign-in__link'} onClick={this.onSignInBtnClick}>
                        <span className={'Header__sign__link-name'}>Log In</span>
                        {/*<SignInPortal />*/}
                    </button>
                    {/*<SignInPortal />*/}

                    <Link className={'Header__sign__link Header__sign-up__link'} to={'/getting-started'}>
                        <span className={'Header__sign__link-name'}>Get Started</span>
                    </Link>
                </div>
            </div>
        );
    }
}

const mapDispatchTopProps = dispatch => ({
    isSignInCardOpn: isOpen => dispatch(isSignInCardOpn(isOpen))
})
export default connect(null, mapDispatchTopProps)(Header);