
const civilizations = {}


civilizations.answer = {
    a: {   
        name : 'Romans',
        tally: 0,
        content: 'Time Period: 550 BC - 465 BC<br><br>Based off your selections, you could have been a Roman due to your spirituality; the ancient Roman culture was full of myths, and the foundation of ancient Rome is a legend in itself. Your (alleged) thirst for power would have also come in handy, as the Romans were the MOST POWERFUL ancient civilization overall, ruling over the largest area of land in that era; all the countries surrounding the Mediterranean sea in present day were part of ancient Rome.' 
    },
    b: { 
        name: 'Greeks',
        tally: 0,
        content: 'Time Period: 2700 BC - 1500 BC<br><br>Based off your selections, you could have been an ancient Greek either originating in Italy, Sicily, North Africa, or even as far west as France in the beginning... But of course, Greece itself was home to this incredibily influential civilization. Although the Greeks were not one of the oldest ancient civilizations, they are responsible for many staples of the modern world; You consider yourself to be a particularly political or athletic person, eh? You would have fit in well, as the ancient Greeks were not only responsible for the inception of democracy itself, but also the very first Olympic Games. They were also a scientifically advanced soceity, having created the base for modern geometry, biology and physics.' 
    },
    c: {
        name: 'Persians',
        tally: 0,
        content: 'Time Period: 550 BC - 465 BC<br><br>Based off your selections, you could have been living in modern day Iran as part of one of the most powerful empires in the world at the time. Although they were only in power for a little over 200 years, there were 2 million square miles that were conquered by the Persians; the southern portions of Egypt, the eastern parts of India, and even parts of Greece. The Persian empire was best known for its wise rulers and military strength.' 
    },
    d: {
        name: 'Chinese',
        tally: 0,
        content: 'Time Period: 1600 BCE - 1046 BCE<br><br>Based off your selections, you could have been living in the ancient Chinese civilization, bearing witness to some incredible inventions that have enhanced the lives of humans since their inception; Important materials like paper and silk, useful tools like the compass and (in some cases) gunpowder & cannons, and last but not least, the cause of, and solution to, all of lifes problems; alcohol. Party on, China.' 
    },
    e: {
        name: 'Mongols',
        tally: 0,
        content: 'Time Period: 1206-1368<br><br>Based off your selections, you could have been part of the famously dominant Mongol civilization; the worlds largest empire at the time of its rule, continuously defeating much more populated and powerful enemies than itself until its eventual demise. Founded by the warlord Genghis Khan (or Temujin as he was otherwise known as) along with two million other Mongols, defied all odds and proceeded to conquer most of the Middle East, China and Russia. They were a well-travlled civilization in that respect, and were as resilient as they were resourceful; they had large mobile armies, carrying their herds with them so they could sustain themselves off of horse blood in times of desperation. Sounds tasty... and very metal.'
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
        let yourContent = civilizations.answer.a.content;
        $('.resultBox').html(`<p class="civilization">Your civilization is the... ${yourCiv}</p><p>${yourContent}</p>`);
    } else if (civilizations.answer.b.tally === winner) {
        let yourCiv = civilizations.answer.b.name;
        let yourContent = civilizations.answer.b.content;
        $('.resultBox').html(`<p class="civilization">Your civilization is the... ${yourCiv}</p><p>${yourContent}</p>`);
    } else if (civilizations.answer.c.tally === winner) {
        let yourCiv = civilizations.answer.c.name;
        let yourContent = civilizations.answer.c.content;
        $('.resultBox').html(`<p class="civilization">Your civilization is the... ${yourCiv}</p><p>${yourContent}</p>`);
    } else if (civilizations.answer.d.tally === winner) {
        let yourCiv = civilizations.answer.d.name;
        let yourContent = civilizations.answer.d.content;
        $('.resultBox').html(`<p class="civilization">Your civilization is the... ${yourCiv}</p><p>${yourContent}</p>`);
    } else if (civilizations.answer.e.tally === winner) {
        let yourCiv = civilizations.answer.e.name;
        let yourContent = civilizations.answer.e.content;
        $('.resultBox').html(`<p class="civilization">Your civilization is the... ${yourCiv}</p><p>${yourContent}</p>`);
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