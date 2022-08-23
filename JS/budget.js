document.getElementById('btn-calculate').addEventListener('click', function () {
    const perPlayerField = document.getElementById('per-player');
    const perPlayerAmountString = perPlayerField.value;
    const perPlayerAmount = parseFloat(perPlayerAmountString);

    const playerExpensesElement = document.getElementById('player-expenses');
    const previousPlayerExpensesTotalString = playerExpensesElement.innerText;
    previousPlayerExpensesTotal = parseFloat(previousPlayerExpensesTotalString);

    const currentPlayerExpensesTotal = perPlayerAmount * 5
    playerExpensesElement.innerText = currentPlayerExpensesTotal;

    perPlayerField.value = "";

    // Per Player Expenses  Section



    document.getElementById('btn-total-calculate').addEventListener('click', function () {
        const managerCostField = document.getElementById('manager-cost');
        const managerCostAmountString = managerCostField.value;
        const managerCostAmount = parseFloat(managerCostAmountString);
        console.log(managerCostField);

        const coachCostFiled = document.getElementById('coach-cost');
        const coachCostAmountString = coachCostFiled.value;
        const coachCostAmount = parseFloat(coachCostAmountString);

        const totalExpansesElement = document.getElementById('total-expenses');
        const previousTotalExpansesString = totalExpansesElement.innerText;
        const previousTotalExpanses = parseFloat(previousTotalExpansesString);

        const currentTotalExpanses = managerCostAmount + coachCostAmount + currentPlayerExpensesTotal;
        totalExpansesElement.innerText = currentTotalExpanses;

        managerCostField.value = "";
        coachCostFiled.value = "";


    })


    // Per Player Expenses  Section

})
