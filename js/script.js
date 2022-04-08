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

        // controllo e applicazione sconto
        if ( userAge === "minorenne" ) {
            ticketPrice = ticketPrice * 0.8;
        } else if (userAge === "over65" ) {
            ticketPrice = ticketPrice * 0.6;
        }
        console.log(ticketPrice, typeof(ticketPrice));

        // stampa in html degli output
        document.getElementById("ticket-user-name").innerHTML = userName;
        document.getElementById("ticket-price").innerHTML = ticketPrice;
    }
)



