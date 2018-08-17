
const civilizations = {}


civilizations.answer = {
    a: {   
        name : 'romans',
        tally: 0
    },
    b: { 
        name: 'greeks',
        tally: 0
    },
    c: {
        name: 'persians',
        tally: 0
    },
    d: {
        name: 'chinese',
        tally: 0
    },
    e: {
        name: 'mongols',
        tally: 0
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

    let cleanedUpResults = results.map(function(item){
          return item[1]
    });

    console.log(cleanedUpResults);

}

// Take the cleanedUpReults array and use the "sort" method to sort it by tally key in the object from highest to lowest

keys = Object.keys(finalTally),
i, len = keys.length;

// in the brackets below, target the objects INSIDE the array
//finalyTally[i].tally
//end result of this function, is going to give you the object with the highest tally value
//from there, append highest object to page

keys.sort();

for (i = 0; i > finalTally.length; i++) {
    k=keys[i];
    alert(k + ':' + finalTally[k]);
}