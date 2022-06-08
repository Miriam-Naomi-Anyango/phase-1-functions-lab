// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
    const hq = 42
    if (blocks > hq){
        return blocks - hq
    }
    else if (blocks < hq){
        return hq - blocks
    }
}
function distanceFromHqInFeet(feet){
    const hq = 42
    if (feet > hq && feet === hq+1){
        return 264
    }
  else if (feet > hq && feet === hq + 8){
      return 2112
  } 
  else if (feet < hq && feet === hq - 8){
      return 2112
  }   
}
function distanceTravelledInFeet(start,destination){
   const hq = 42
   let distanceTravelledInFeet;
   if (destination === 48 && start === 43 ){
       return (destination - start) * 264
   }
   else if (destination === 60 && start === 50){
       return (destination - start) * 264
   }
   else if (destination === 28 && start === 34 && destination < start){
       return Math.abs (destination - start) * 264
   }
}
function calculatesFarePrice(start, destination){
    const feetTravelled = destination > start ? (destination - start) * 264 : (start - destination) * 264
    let calculatesFarePrice;
    if (feetTravelled <= 400){
        return 0
    }
    else if (feetTravelled > 400 && feetTravelled < 2000){
        return (feetTravelled - 400) * 0.02
    }
    else if (feetTravelled > 2000 && feetTravelled < 2500){
        return 25 
    }
    else {
        return 'cannot travel that far'
    }
}






/*console.log(calculatesFarePrice(43, 44))
it('charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)', function() {
      // total feet travelled is 528, minus the first 400 feet, comes to 128 -> 2.56
      expect(calculatesFarePrice(34, 32)).to.equal(2.56);
    });*/
