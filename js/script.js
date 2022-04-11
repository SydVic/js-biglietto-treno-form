// raccolta input utente al click del bottone invia
const formBtnSend = document.getElementById("form-btn-send");
console.log(formBtnSend);

formBtnSend.addEventListener("click",
    function() {
        // raccolta dati input utente
        const userName = document.getElementById("user-name").value;
        console.log(userName);

        const userKm = parseInt(document.getElementById("user-km").value);
        console.log(userKm, typeof(userKm));

        const userAge = document.getElementById("user-age").value;
        console.log(userAge);

        //calcolo del prezzo pieno
        let ticketPrice = userKm * 0.21;
        let discountType = "Biglietto Standard";

        // controllo e applicazione sconto
        if ( userAge === "minorenne" ) {
            ticketPrice = ticketPrice * 0.8;
            discountType = "Sconto Minorenne";

        } else if (userAge === "over65" ) {
            ticketPrice = ticketPrice * 0.6;
            discountType = "Sconto Silver Age";
        }
        console.log(ticketPrice, typeof(ticketPrice));

        // numero carrozza e numero biglietto
        const wagonNumber = Math.floor(Math.random() * 10) + 1;
        const ticketNumber = Math.floor(Math.random() * (99999 - 90000) ) + 90000;

        // stampa in html degli output
        document.getElementById("ticket-user-name").innerHTML = userName;
        document.getElementById("discount-type").innerHTML = discountType;
        document.getElementById("wagon-number").innerHTML = wagonNumber;
        document.getElementById("ticket-number").innerHTML = ticketNumber;
        document.getElementById("ticket-price").innerHTML = ticketPrice.toFixed(2);

        // rimozione classe d-none dal ticket container
        const ticketContainer = document.querySelector(".ticket-container");
        console.log(ticketContainer);
        ticketContainer.classList.remove("d-none");
    }
);

// cancellazione dati al click del bottone annulla
const formBtnClear = document.getElementById("form-btn-clear");
console.log(formBtnClear);
formBtnClear.addEventListener("click",
    function() {
        // pulizia campi biglietto
        document.getElementById("ticket-user-name").innerHTML = "";
        document.getElementById("discount-type").innerHTML = "";
        document.getElementById("wagon-number").innerHTML = "";
        document.getElementById("ticket-number").innerHTML = "";
        document.getElementById("ticket-price").innerHTML = "";
        // è buono ripulire tutto per evitare che un mancato ricalcolo lasci questi risultati

        // pulizia campi input utente
        const userName = document.getElementById("user-name");
        userName.value = "";
        const userKm = document.getElementById("user-km");
        userKm.value = "";
        const userAge = document.getElementById("user-age");
        userAge.value = "";

        // aggiunta classe d-none al ticket container
        const ticketContainer = document.querySelector(".ticket-container");
        ticketContainer.classList.add("d-none");
    }
);


