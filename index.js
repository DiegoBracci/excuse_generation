window.onload = () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
    console.log(" " + randomNumber)    
};

let generateExcuse = () => {

    let pronoun = [];
    let subject = [];
    let action = [];
    let possetion = [];
    let where = [];

    let proIndx = = Math.floor(Math.random() * pronoun.length);
    let sbjIndx = = Math.floor(Math.random() * subject.length);
    let actionIndx = = Math.floor(Math.random() * action.length);
    let possIndx = = Math.floor(Math.random() * possetion.length);
    let whereIndx = = Math.floor(Math.random() * where.length);
    

    return pronoun[proIndx] + " " + subject[sbjIndx] + " " + action[actionIndx] + " " + possetion[possIndx] + " " + where[whereIndx]
}


