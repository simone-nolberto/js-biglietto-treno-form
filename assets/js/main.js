let userName = document.getElementById("userID");
let userKm = document.getElementById("userTRIP");
let userAge = document.getElementById("userAGE");

const mileagePrice = 0.21;
const underAgeDiscount = 0.16;
const overDiscount = 0.12;

let euro = Intl.NumberFormat('en-DE', {
    style: 'currency',
    currency: 'EUR',
});

const trigger = document.querySelector(".btn")
trigger.addEventListener('click', function () {

    let km = parseInt(userKm.value);
    let age = parseInt(userAge.value)
    console.log(userName.value);
    console.log(km);
    console.log(age);


    if (age < 18) {

        console.log(euro.format(km * underAgeDiscount));

    } else if (age >= 65) {

        console.log(euro.format(km * overDiscount));

    } else {
        console.log(euro.format(km * mileagePrice));
    }


});




// let euro = Intl.NumberFormat('en-DE', {
//     style: 'currency',
//     currency: 'EUR',
// });





// if (userAge < 18){
//     console.log(euro.format(userMileage * underAgeDiscount));
// } else if (userAge >= 65){
//     console.log(euro.format(userMileage * overDiscount));
// } else {
//     console.log(euro.format(userMileage * mileagePrice));
// }