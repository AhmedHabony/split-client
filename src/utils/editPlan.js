export const editPlan = (plans, oldPlan, newPLan) => {

    const income = plans.find(plan => {
        return plan.id === oldPlan.id ;
    });

    if(income){
        oldPlan.plan = newPLan.plan;
        return [...plans]
    }

    return [...plans]
}