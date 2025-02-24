let count = 0;

function addSymbol(boxId) {
    if (count > 8) {
        return;
    }
    let getPlayer = document.getElementById("turn");
    let box = document.getElementById(boxId);
    if (getPlayer.textContent == "X") {
        box.textContent = "X";
        getPlayer.textContent = "O";
    } else {
        box.textContent = "O";
        getPlayer.textContent = "X";
    }
    if (verify()) {
        alert(`Jogador ${box.textContent} venceu! FIM DE JOGO.`)
        count = 9
    }
    count++;
}

function verify() {
    if (((document.getElementById("box00").textContent == document.getElementById("box01").textContent) && (document.getElementById("box01").textContent == document.getElementById("box02").textContent)) && (document.getElementById("box00").textContent != "")) {
        return true;
    } else if (((document.getElementById("box03").textContent == document.getElementById("box04").textContent) && (document.getElementById("box04").textContent == document.getElementById("box05").textContent)) && (document.getElementById("box04").textContent != "")) {
        return true;
    } else if (((document.getElementById("box06").textContent == document.getElementById("box07").textContent) && (document.getElementById("box07").textContent == document.getElementById("box08").textContent)) && (document.getElementById("box06").textContent != "")) {
        return true;
    } else if (((document.getElementById("box00").textContent == document.getElementById("box03").textContent) && (document.getElementById("box03").textContent == document.getElementById("box06").textContent)) && (document.getElementById("box00").textContent != "")) {
        return true;
    } else if (((document.getElementById("box01").textContent == document.getElementById("box04").textContent) && (document.getElementById("box04").textContent == document.getElementById("box07").textContent)) && (document.getElementById("box01").textContent != "")) {
        return true;
    } else if (((document.getElementById("box02").textContent == document.getElementById("box05").textContent) && (document.getElementById("box05").textContent == document.getElementById("box08").textContent)) && (document.getElementById("box02").textContent != "")) {
        return true;
    } else if (((document.getElementById("box00").textContent == document.getElementById("box04").textContent) && (document.getElementById("box04").textContent == document.getElementById("box08").textContent)) && (document.getElementById("box00").textContent != "")) {
        return true;
    } else if (((document.getElementById("box02").textContent == document.getElementById("box04").textContent) && (document.getElementById("box04").textContent == document.getElementById("box06").textContent)) && (document.getElementById("box02").textContent != "")) {
        return true;
    }
}