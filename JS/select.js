const selectedPlayers = [];

function display(selectedPlayers) {
    console.log(selectedPlayers);

    const selectedTable = document.getElementById("selected-v");
    selectedTable.innerHTML = "";

    for (let i = 0; i < selectedPlayers.length; i++) {

        // console.log(selectedPlayers[i]);}
        const clickedPlayerName = selectedPlayers[i].playerName
        const tr = document.createElement("tr");

        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${clickedPlayerName}</td>`;

        selectedTable.appendChild(tr);

    }

}


function selectPlayer(element) {
    // console.log(element.parentNode.parentNode.children)
    // console.log(element.parentNode.parentNode.children[01].innerText)

    const playerName = element.parentNode.parentNode.children[01].innerText;

    const playerObj = {
        playerName: playerName
    }

    element.disabled = true;
    selectedPlayers.push(playerObj);


    display(selectedPlayers);
}

// const button = document.querySelector('#button');

// const disableButton = () => {
//   console.log("va");
//     button.disabled = true;

// };

// button.addEventListener('click', disableButton);
