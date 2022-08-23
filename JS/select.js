const selectedPlayers = [];

function display(selectedPlayers) {
    console.log(selectedPlayers);

    const selectedTable = document.getElementById("selected-v");
    selectedTable.innerHTML = "";

    for (let i = 0; i < selectedPlayers.length; i++) {

        // 5 player select alert
        
        if (i >= 4) {
            alert('You can not select more than 5');
        }
        const clickedPlayerName = selectedPlayers[i].playerName
        const tr = document.createElement("tr");

        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${clickedPlayerName}</td>`;

        selectedTable.appendChild(tr);

    }

}


function selectPlayer(element) {


    const playerName = element.parentNode.parentNode.children[01].innerText;

    const playerObj = {
        playerName: playerName
    }

    element.disabled = true;
    selectedPlayers.push(playerObj);


    display(selectedPlayers);
}
