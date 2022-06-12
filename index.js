const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts)

function writeCards(names, event) {
    let finishedCards = []
    for (let i=0; i<names.length; i++) {
        finishedCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);

    }
    return finishedCards
}

function countDown(number){
    let i=number
    while (i>=0){
        console.log(number--);
        i--
    }
    
}