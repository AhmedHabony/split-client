import React from 'react'
import {Link} from "react-router-dom";


const Feature = ({features, Card, feature, btnText}) => {
    let btnColor = '';
    let btnBorderColor='';
    let featureBorderColor='';
    let Path='';
    if (feature === 'note') {
        btnColor = 'Feature__action-link-note';
        btnBorderColor= 'Feature__action-btn-note';
        featureBorderColor = 'Feature-note';
        Path='/notes'
    }
    else if (feature === 'plan'){
        btnColor = 'Feature__action-link-plan';
        btnBorderColor= 'Feature__action-btn-plan';
        featureBorderColor = 'Feature-plan';
        Path='/to-do';

    }
    else if (feature === 'income') {
        btnColor = 'Feature__action-link-income';
        btnBorderColor= 'Feature__action-btn-income';
        featureBorderColor = 'Feature-income';
        Path='/incomes'
    }

    return (
        <div className={`Feature ${featureBorderColor}`}>
            {
                Card
            }
            {
                <div className={'Feature__container'}>
                    {
                        features.map((feature, i) => {
                            const Icon = feature[0];
                            return (
                                <div key={i} className={'Feature__item'}>
                                    <Icon className={'Feature__icon'}/>
                                    <p className={'Feature__item-name'}> {feature[1]} </p>
                                </div>
                            )
                        })
                    }
                </div>
            }
            <button className={`Feature__action-btn ${btnBorderColor}`}>
                <Link className={`Feature__action-link ${btnColor}`}  to={`${Path}`}>
                    {btnText}
                </Link>
            </button>
        </div>
    )
};

export default Feature