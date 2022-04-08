// raccolta input utente al click del bottone invia
const formBtnSend = document.getElementById("form-btn-send");
console.log(formBtnSend);

formBtnSend.addEventListener("click",
    function() {
        const userName = document.getElementById("user-name").value;
        console.log(userName);

        const userKm = parseInt(document.getElementById("user-km").value);
        console.log(userKm, typeof(userKm));

        const userAge = document.getElementById("user-age").value;
        console.log(userAge);
    }
)



