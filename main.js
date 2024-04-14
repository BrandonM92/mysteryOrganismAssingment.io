// These two functions were given at the start of the assignment:

// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//This allows me to get a random number generated for the final array 
const randomNumberGenerator = () =>{
  return Math.floor(Math.random() * 100);
}


// This will allow us to create objects and has 2 properties as well as 3 methods within it. 
const pAequorFactory = (specimenNum,dna) =>{
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate(){ //This lets us change a base within the Array. 
      const randomIndex = Math.floor(Math.random() * this.dna.length);
      let newDNABase = returnRandBase();
      while (this.dna[randomIndex] === newDNABase){
        newDNABase = returnRandBase();
      }
      this.dna[randomIndex] = newDNABase;
      return this.dna;
    },
    compareDNA(object2){ //This allows us to compare how much the dna strand matches with another one
      let count = 0;
      for (let i = 0; i < this.dna.length; i++){
          if (this.dna[i] === object2.dna[i]){
            console.log("MATCH")
            count++;
          }
      }
      //console.log(`Count: ${count}`);
      const comparison = Math.floor((count/this.dna.length) * 100) + '%';
      console.log(`specimen #${this.specimenNum} and specimen #${object2.specimenNum} have ${comparison} DNA in common.`)
    },
    willLikelySurvive(){ //If the dna strang contains 60% or more of 'C' and 'G' then it will return true, otherwise it will return false
      const countC = this.dna.filter(x => x ==='C').length;
      const countG = this.dna.filter(x => x ==='G').length;
      const totalCountAVG = Math.floor((countC + countG) / this.dna.length * 100);
      //console.log(totalCountAVG + '%');
      if (totalCountAVG >= 60){
        return true;
      }else {
        return false;
      }
    }
  }
}

//Calling the factory method until we get 30 objects added to a new array that return true from the WillLikelySurvive method
const pAequor = () =>{
  const pAequorArray = [];
  while (pAequorArray.length < 30){
    const specimenNum = randomNumberGenerator();
    const dnaStrand = mockUpStrand();
    const obj_element = pAequorFactory(specimenNum, dnaStrand);
    if (obj_element.willLikelySurvive()){
      pAequorArray.push(obj_element);
    }
  }
  console.log(pAequorArray);
  return pAequorArray;
}


/* Main Loop */
const pAequorArray = pAequor(); //Creates an array of 30 instances of the pAequor object. 
const firstInstance = pAequorArray[0]; //assigns the first index object to variable
const secondInstance = pAequorArray[1];
console.log(firstInstance.dna) // logs the objects value for it's dna property
console.log(secondInstance.willLikelySurvive()) // should always return true




/* This is the section of the code where I can test the different methods */
// const objA = pAequorFactory(1,mockUpStrand())
// //const objB = pAequorFactory(2,mockUpStrand())
// // console.log(objA.dna)
// // objA.mutate()
// console.log(objA.dna)
// //console.log(objB.dna)
// //console.log(objA.compareDNA(objB))
// console.log(objA.willLikelySurvive())

