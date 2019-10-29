import React, {Component} from 'react';
import PlanItem from "./planItem";

class Plan extends Component {
    render() {
        let planName = ''
        const{type, plans} = this.props;
        if (type === 'toDo') planName = 'To-Do';
        else if (type === 'mainFocus') planName = 'Main Focus';
        else if (type === 'wishes') planName = 'Wishes';


        return (
            <div className={`Plan Plan__${type}`}>
                <h1 className={'Plan__title'}><span className={'Plan__title-inner'} >{planName} </span></h1>

                <div className={'Plan__plan'}>
                    {
                        plans.map(plan => {
                            return <PlanItem key={plan.id}  plan={plan} typeName={planName}/>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Plan;