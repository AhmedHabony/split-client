import React, {Component} from 'react';
import {connect} from 'react-redux'

import {isSignInCardOpn} from "../../actions/signIn";
import {ReactComponent as Close} from "../../assets/close.svg";
import {ReactComponent as Logo} from "../../assets/Logo.v2.svg";

class SignInCard extends Component {


    state = {
        isOpen: true
    };



    onClick = async e => {
        await this.setState({isOpen: false});
        const {isSignInCardOpen} = this.props;
        isSignInCardOpen(this.state.isOpen)
    };

    render() {
        let signCardStyles = '';
        const {openPath} = this.props;
        if (openPath === '/incomes') signCardStyles = 'signCardStyles-incomes';
        else if (openPath === '/notes') signCardStyles = 'signCardStyles-notes';
        else if (openPath === '/plan') signCardStyles = 'signCardStyles-plan';
        else if (openPath === '/') signCardStyles = 'signCardStyles-home';
        else if (openPath === '/home') signCardStyles = 'signCardStyles-home';
        return (
            <div className={'SignInCard'}>
                <div className={`SignInContainer ${signCardStyles}`} >
                    <div className={`SignInContainer__close` }>
                        <Close
                            onClick={this.onClick}
                            className={`SignInContainer__close-icon ${signCardStyles}-close-icon`}
                        />
                    </div>
                    <div className={'SignInContainer__header'}>
                        <span className={'SignInContainer__header-logo'}> <Logo className={'SignInContainer__header-icon'}  /> </span>
                        <p>Sign in to
                            <span style={{color: '#00A4EF', fontWeight: 'bold'}}> S</span>
                            <span style={{color: '#FFB900', fontWeight: 'bold'}}>p</span>
                            <span style={{color: '#207561', fontWeight: 'bold'}}>l</span>
                            <span style={{color: '#7FBA00', fontWeight: 'bold'}}>i</span>
                            <span style={{color: '#F25022', fontWeight: 'bold'}}>t</span>
                        </p>
                    </div>
                    <form
                        onSubmit={this.onSubmit}
                        className={`SignInContainer__form ${signCardStyles}-form`}
                    >
                        <input
                            type={'email'}
                            id={'email'}
                            onChange={this.onChange}
                            name={'email'}
                            value={this.state.email}
                            placeholder={'Email'}
                        />
                        <input
                            className={'SignInContainer__header-password'}
                            onChange={this.onChange}
                            type={'password'}
                            name={'password'}
                            value={this.state.password}
                            placeholder={'Password'}
                        />
                        <button className={`SignInContainer__btn ${signCardStyles}-btn`}>
                            <span>Log In</span>
                        </button>
                    </form>
                </div>
            </div>

        );
    }
}

const mapDispatchToProps = dispatch => ({
    isSignInCardOpen: isOpen => dispatch(isSignInCardOpn(isOpen))
});

const mapStateToProps = state => ({
    openPath: state.signIn.openedPath
})
export default connect(mapStateToProps, mapDispatchToProps)(SignInCard);