export const deletePlan = (plans, deletedPlan) => {

    const plan = plans.find(plan => {
        return plan.id === deletedPlan.id
    });

    if(plan) {
        plans.map((plan, i) => {
            if (plan.id === deletedPlan.id){
                plans.splice(i, 1)
            }
            return [...plans]
        })
    }
    return [...plans]
};