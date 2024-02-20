
let userName = document.getElementById("userID");
let userKm = document.getElementById("userTRIP");


const trigger = document.querySelector(".btn")
trigger.addEventListener('click',

    function (userinfo) {
        console.log(userName.value);
        console.log(userKm.value);
    }
);

const mileagePrice = 0.21;
console.log(mileagePrice);



// let euro = Intl.NumberFormat('en-DE', {
//     style: 'currency',
//     currency: 'EUR',
// });


// const underAgeDiscount = 0.16;
// const overDiscount = 0.12;


// if (userAge < 18){
//     console.log(euro.format(userMileage * underAgeDiscount));
// } else if (userAge >= 65){
//     console.log(euro.format(userMileage * overDiscount));
// } else {
//     console.log(euro.format(userMileage * mileagePrice));
// }