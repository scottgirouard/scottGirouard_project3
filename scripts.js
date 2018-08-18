
const civilizations = {}


civilizations.answer = {
    a: {   
        name : 'Romans',
        tally: 0
    },
    b: { 
        name: 'Greeks',
        tally: 0
    },
    c: {
        name: 'Persians',
        tally: 0
    },
    d: {
        name: 'Chinese',
        tally: 0
    },
    e: {
        name: 'Mongols',
        tally: 0,
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, quod atque libero, placeat ex neque eveniet sit soluta accusamus nam eos ea incidunt laboriosam quia doloribus praesentium distinctio quidem mollitia minima quos illo deleniti eius. Quae necessitatibus odio, est ratione eligendi, sed maiores nesciunt libero adipisci beatae eius illum quasi.' 
    }
};


civilizations.tally = []

civilizations.tallyAnswers = function(array){
    for (let answer in civilizations.answer) {
        let count = array.reduce(function (n, val) {
            return n + (val === `${answer}`);
        }, 0);
        civilizations.answer[answer].tally = civilizations.answer[answer].tally + count; 
    }
    
    civilizations.displayWinner(civilizations.answer)

}
civilizations.mostFrequentItem = function(array) {

    console.log(array);
    
};

civilizations.getResults = function () {
    $('form').on('submit', function (e) {
        
        e.preventDefault();
        let answer = $('input[name=active]:checked').val();
        let answer2 = $('input[name=handy]:checked').val();
        let answer3 = $('input[name=resourceful]:checked').val();
        let answer4 = $('input[name=travel]:checked').val();
        let answer5 = $('input[name=party]:checked').val();
        let answer6 = $('input[name=smart]:checked').val();
        let answer7 = $('input[name=power]:checked').val();
        
        
        let allAnswers = [answer, answer2, answer3, answer4, answer5, answer6, answer7];


        console.log(allAnswers);

        civilizations.mostFrequentItem(allAnswers);

        civilizations.tallyAnswers(allAnswers)
    });
};

civilizations.init = function(){
    civilizations.getResults();
}

$(function() {
    civilizations.init();
    
});

civilizations.displayWinner = function(finalTally){
    console.log(finalTally);
    let results = Object.entries(finalTally);
    console.log(results);

    let cleanedUpResults = results.map(function(item){
          return item[1]
    });

    console.log(cleanedUpResults);
    let allScores =[];
    cleanedUpResults.forEach(function(scores){
        allScores.push(scores.tally);

    });
    console.log(allScores);
    let winner = Math.max(...allScores);
    console.log(winner);

    if(civilizations.answer.a.tally === winner) {
        let yourCiv = civilizations.answer.a.name;
        $('.resultBox').html(`<p class="civilization">Your civilization is ${yourCiv}</p>`);
    } else if (civilizations.answer.b.tally === winner) {
        let yourCiv = civilizations.answer.b.name;
        $('.resultBox').html(`<p class="civilization">Your civilization is ${yourCiv}</p>`);
    } else if (civilizations.answer.c.tally === winner) {
        let yourCiv = civilizations.answer.c.name;
        $('.resultBox').html(`<p class="civilization">Your civilization is ${yourCiv}</p>`);
    } else if (civilizations.answer.d.tally === winner) {
        let yourCiv = civilizations.answer.d.name;
        $('.resultBox').html(`<p class="civilization">Your civilization is ${yourCiv}</p>`);
    } else if (civilizations.answer.e.tally === winner) {
        let yourCiv = civilizations.answer.e.name;
        let yourContent = civilizations.answer.e.content;
        $('.resultBox').html(`<p class="civilization">Your civilization is ${yourCiv}</p><p>${yourContent}</p>`);
    } else null

 //   $('.resultBox').html(`<p class="civilization">Your civilization is ${yourCiv}</p>`);
       

   
        
    

}

// Take the cleanedUpReults array and use the "sort" method to sort it by tally key in the object from highest to lowest

 //keys = Object.keys(finalTally),
//i, len = keys.length;

// in the brackets below, target the objects INSIDE the array
//finalTally[i].tally
//end result of this function, is going to give you the object with the highest tally value
//from there, append highest object to page

// keys.sort();

// for (i = 0; i > finalTally.length; i++) {
//     k=keys[i];
//     alert(k + ':' + finalTally[k]);

// var finalTally = $.map(items, function(i) {
//     if (i < 2)
//         return null;
//     return i;    
// });
    
// }