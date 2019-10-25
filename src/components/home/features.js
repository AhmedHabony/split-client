import React from 'react'

import Feature from "./feature";

import {ReactComponent as NoteCard} from "./../../assets/note-card.svg";
import {ReactComponent as ToDoCard} from "./../../assets/toDo-card.svg";
import {ReactComponent as IncomeCard} from "./../../assets/income-card.svg";

import {ReactComponent as Free} from "./../../assets/free.svg";
import {ReactComponent as Save} from "./../../assets/save.svg";
import {ReactComponent as Edit} from "./../../assets/edit.svg";
import {ReactComponent as Secure} from "./../../assets/secure.svg";

import {ReactComponent as Easy} from "./../../assets/easy.svg";
import {ReactComponent as Reminder} from "./../../assets/reminder.svg";
import {ReactComponent as Options} from "./../../assets/options.svg";
import {ReactComponent as Productive} from "./../../assets/production.svg";

import {ReactComponent as Manages} from "./../../assets/management.svg";
import {ReactComponent as Ideas} from "./../../assets/intelijient.svg";
import {ReactComponent as Smooth} from "./../../assets/blur.svg";





const Features = (props) => {

    return (
        <div className={`Features `}>
            <Feature
                features={ [[Free, 'Free'], [Save, 'All Save'], [Edit, 'Edit And Check'], [Secure, 'Secure']] }
                Card={<NoteCard />}
                btnText={'Note Now'}
                feature={'note'}
            />
            <Feature
                features={[[Easy, 'Easy'], [Productive, 'productive'], [Options, 'With Many Options'], [Reminder, 'Reminder']]}
                Card={<ToDoCard />}
                btnText={'Plan The Day'}
                feature={'plan'}
            />
            <Feature
                features={[[Manages, 'Mange Incomes'], [Ideas, 'New Ideas'], [Smooth, 'Smooth Management']]}
                Card={<IncomeCard />}
                btnText={'Manage Incomes'}
                feature={'income'}


            />
        </div>
    )
};

export default Features