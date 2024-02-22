let userName = document.getElementById("userID");
let userKm = document.getElementById("userTRIP");
let userAge = document.getElementById("userAGE");

const mileagePrice = 0.21;
const underAgeDiscount = 0.2;
const overDiscount = 0.4;

let euro = Intl.NumberFormat('en-DE', {
    style: 'currency',
    currency: 'EUR',
});

const trigger = document.querySelector(".start-btn")
trigger.addEventListener('click', function () {

    let km = parseInt(userKm.value);
    let age = parseInt(userAge.value)
    console.log(userName.value);
    console.log(km);
    console.log(age);


    if (age < 18) {

        const offer = "ridotto minori";
        const coach = Math.floor(Math.random() * 10) + 1;
        const serial = Math.floor(Math.random() * 10000) + 1;
        let price = km * (mileagePrice - (mileagePrice *underAgeDiscount));
        // console.log(euro.format(price));
        // console.log(offer);
        // console.log(coach);
        document.getElementById("user-detail").innerHTML = userName.value;
        document.getElementById("offer-detail").innerHTML = offer;
        document.getElementById("coach-detail").innerHTML = coach;
        document.getElementById("code-detail").innerHTML = serial;
        document.getElementById("price-detail").innerHTML = (euro.format(price));


    } else if (age >= 65) {

        const offer = "ridotto over";
        const coach = Math.floor(Math.random() * 10) + 1;
        const serial = Math.floor(Math.random() * 10000) + 1;
        let price = km * (mileagePrice - (mileagePrice * overDiscount));
        // console.log(euro.format(price));
        // console.log(offer);
        // console.log(coach);
        document.getElementById("user-detail").innerHTML = userName.value;
        document.getElementById("offer-detail").innerHTML = offer;
        document.getElementById("coach-detail").innerHTML = coach;
        document.getElementById("code-detail").innerHTML = serial;
        document.getElementById("price-detail").innerHTML = (euro.format(price));

    } else {

        const offer = "tariffa standard";
        const coach = Math.floor(Math.random() * 10) + 1;
        const serial = Math.floor(Math.random() * 10000) + 1;
        let price = km * mileagePrice;
        // console.log(euro.format(price));
        // console.log(offer);
        // console.log(coach);
        document.getElementById("user-detail").innerHTML = userName.value;
        document.getElementById("offer-detail").innerHTML = offer;
        document.getElementById("coach-detail").innerHTML = coach;
        document.getElementById("code-detail").innerHTML = serial;
        document.getElementById("price-detail").innerHTML = (euro.format(price));
    }


});

// const delete = document.querySelector(".delete-btn")
// delete.addEventListener('click', function (){
    
// })
