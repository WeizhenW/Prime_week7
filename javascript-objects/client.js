console.log('hello objects');

// let penguins = ['Emperor', 'Little', 'Rockhopper', 'Gentoo'];



let penguins = [
    {
        name: 'Emperor',
        colors: ['Black', 'White', 'Yellow'],
        size: 1.0,
        isCute: true
    },
    {
        name: 'Little',
        colors: ['Slate-blue', 'White'],
        size: 0.5,
        isCute: true
    },
    {
        name: 'Rockhopper',
        colors: ['Black', 'White', 'Yellow'],
        size: 0.75,
        isCute: true
    },
    {
        name: 'African',
        colors: ['Black', 'White'],
        size: 0.5,
        isCute: true
    },
    {
        name: 'Gentoo',
        colors: ['Black', 'White'],
        size: 0.5,
        isCute: true
    },
    {
        name: 'Sea Gull',
        colors: ['Gray'],
        size: 0.25,
        isCute: false
    },
    {
        name: 'Chinstrap',
        colors: ['Black', 'White'],
        size: 0.25,
        isCute: true
    },
    {
        name: 'Macaroni',
        colors: ['Black', 'White', 'Yellow'],
        size: 0.5,
        isCute: true
    },
];

console.log(penguins[0].name);
console.log(penguins[1].name);
console.log(penguins[2].name);
console.log(penguins[3].name);

function checkPenguins(allPenguins, maxHeight) {


    let cutePenguins = [];
    console.log(allPenguins);

    for (let i = 0; i < allPenguins.length; i++) {
        if (allPenguins[i].isCute && allPenguins[i].size < maxHeight) {
            cutePenguins.push(allPenguins[i].name);
        }  
    }
    return cutePenguins;
}

//using filter method
// function checkPenguins(allPenguins, maxHeight) {


//     let cutePenguins = [];
//     cutePenguins = allPenguins.filter(penguin => penguin.isCute && penguin.size < maxHeight)
//     return cutePenguins;
// }

console.log(checkPenguins(penguins, 0.9));
