import React from 'react'
import {Link} from "react-router-dom";


const Feature = ({features, Card, feature}) => {
    let btnColor = '';
    console.log(feature);
    if (feature === 'note') {
        btnColor = 'Feature__action-link-note';
    }

    return (
        <div className={'Feature'}>
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
            <button className={'Feature__action-btn'}>
                <Link className={`Feature__action-link ${btnColor}`}  to={'/note'}>
                    Action Now
                </Link>
            </button>
        </div>
    )
};

export default Feature