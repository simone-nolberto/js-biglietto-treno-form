
let userName = document.getElementById("userId")
let userMileage = document.getElementById("userTRIP");

console.log(userMileage.value);
console.log(userName.value);




let euro = Intl.NumberFormat('en-DE', {
    style: 'currency',
    currency: 'EUR',
});

const mileagePrice = 0.21;
const underAgeDiscount = 0.16;
const overDiscount = 0.12;


// if (userAge < 18){
//     console.log(euro.format(userMileage * underAgeDiscount));
// } else if (userAge >= 65){
//     console.log(euro.format(userMileage * overDiscount));
// } else {
//     console.log(euro.format(userMileage * mileagePrice));
// }