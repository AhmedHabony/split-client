import React from 'react'

import Feature from "./feature";

import {ReactComponent as Free} from "./../../assets/free.svg";
import {ReactComponent as Save} from "./../../assets/save.svg";
import {ReactComponent as Edit} from "./../../assets/edit.svg";
import {ReactComponent as Secure} from "./../../assets/secure.svg";


const Features = (props) => {

    return (
        <div className={'Features'}>
            <Feature
                features={[ [Free,'free'], [Save, 'All Save'] , [Edit, 'Edit And Check'] , [Secure, 'Secure' ]] }
            />
            <Feature/>
            <Feature/>
        </div>
    )
};

export default Features