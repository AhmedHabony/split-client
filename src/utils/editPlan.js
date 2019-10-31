export const editPlan = (plans, oldPlan, newPLan) => {

    const income = plans.find(plan => {
        return plan.id === oldPlan.id ;
    });

    if(income){
        oldPlan.plan = newPLan.plan;
        oldPlan.done = newPLan.done;
        return [...plans]
    }

    return [...plans]
}