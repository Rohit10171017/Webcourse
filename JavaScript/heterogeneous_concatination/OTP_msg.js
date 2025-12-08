let amount = 10000;

let CardNumber_end = 1234;

const msg = `Your OTP for Transaction of ${amount} Rupees with Card Number ending XX${CardNumber_end} is ${Math.floor(Math.random()*(10**6))}`;

console.log(msg);

