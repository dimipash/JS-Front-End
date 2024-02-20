function gladiatorExpenses(
    lostFights,
    helmetPrice,
    swordPrice,
    shieldPrice,
    armorPrice
  ) {
    let totalExpenses = 0;
  
    let brokenHelmets = Math.floor(lostFights / 2);
    let brokenSwords = Math.floor(lostFights / 3);
    let brokenShields = Math.floor(lostFights / 6);
    let brokenArmors = Math.floor(brokenShields / 2);
  
    totalExpenses =
      brokenHelmets * helmetPrice +
      brokenSwords * swordPrice +
      brokenShields * shieldPrice +
      brokenArmors * armorPrice;
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
  }
  
  gladiatorExpenses(7, 2, 3, 4, 5);

  function gladiatorExpenses(lostFightCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let sum = 0;
    let counter = 0;

    for (let i = 1; i <= lostFightCount; i++) {
        if (i % 2 == 0) {
            sum += helmetPrice;
        }

        if (i % 3 == 0) {
            sum += swordPrice;
        }

        if (i % 2 == 0 && i % 3 == 0) {
            sum += shieldPrice;
            counter++
        }

        if (counter == 2) {
            sum += armorPrice;
            counter = 0;
        }    
    }

    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
    
}