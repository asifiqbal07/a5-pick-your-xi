document.getElementById('btn-calculate').addEventListener('click', function () {
    const perPlayerField = document.getElementById('per-player')
    const perPlayerAmountString = perPlayerField.value;
    const perPlayerAmount = parseFloat(perPlayerAmountString);

    const playerExpensesElement = document.getElementById('player-expenses');
    const previousPlayerExpensesTotalString = playerExpensesElement.innerText;
    previousPlayerExpensesTotal = parseFloat(previousPlayerExpensesTotalString);

    const currentPlayerExpensesTotal = perPlayerAmount * 5
    playerExpensesElement.innerText = currentPlayerExpensesTotal;

    perPlayerField.value = "";
})