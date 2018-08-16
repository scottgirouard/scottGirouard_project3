// console.log("hi");




// INITIAL SETUP ********* Below

// const civilizations = {
//     a: "romans",
//     b: "greeks",
//     c: "persians",
//     d: "chinese",
//     e: "mongols"
// };

// $('form').on('submit', function (e) {
//     e.preventDefault();
//     // console.log('helloooooo!');

// });

// var $inputs = $('.ancient-attributes :input').on(click, input, function ();

// var values = { 'a, b, c, d, e'};

// $inputs.each(function (index) {

// });

// END of INITIAL SETUP ********* Above




// Alright, START HERE. This shit gon' WORK *************


const civilizations = {}

// civilizations.answer = {
//     a: 'romans',
//     b: 'greeks',
//     c: 'persians',
//     d: 'chinese',
//     e: 'mongols'
// }
civilizations.answer = {
    a: {
        name: 'romans',
        tally: ''
    },
    b: {
        name: 'greeks',
        tally: ''
    },
    c: {
        name: 'persians',
        tally: ''
    },
    d: {
        name: 'chinese',
        tally: ''
    },
    e: {
        name: 'mongols',
        tally: ''
    }
};

// *******************************************************
// Could I do it THIS way??? AUGUST 15th EVENING RESEARCH **********************************************************

civilizations.tallyAnswers = function(array){
    for(let item in civilizations.answer) {
        $('section').append('civilizations.answer' + item.name);

        console.log(item.name);
    }
}
civilizations.mostFrequentItem = function(array) {







    // var counts = {}; //We are going to count occurrence of item here
    // var compare = 0;  //We are going to compare using stored value
    // var mostFrequentItem;  //We are going to store most frequent item
    console.log(array);
    this.tallyAnswers(array);
    // console.log("success")

 //find duplicates in array - push those duplicates to new array
//compare array length to determine answer
//index value of longest array will determine winning object



};

civilizations.getResults = function () {
    $('form').on('submit', function (e) {
        // console.log("submitted");
        e.preventDefault();
        let answer = $('input[name=active]:checked').val();
        let answer2 = $('input[name=handy]:checked').val();
        let answer3 = $('input[name=resourceful]:checked').val();
        let answer4 = $('input[name=travel]:checked').val();
        let answer5 = $('input[name=party]:checked').val();
        let answer6 = $('input[name=smart]:checked').val();
        let answer7 = $('input[name=power]:checked').val();
        
        // console.log(answer, answer2, answer3, answer4, answer5, answer6, answer7);

        // ^ All answers are displayed in console

        // Now display them in an array:
        let allAnswers = [answer, answer2, answer3, answer4, answer5, answer6, answer7];


        console.log(allAnswers);

        civilizations.mostFrequentItem(allAnswers);
    });
};
    //     for (var i = 0, i < allAnswers.length i++) {
    //     var word = allAnswers[i];

    //     if (counts[word] === undefined) { //if count[word] doesn't exist
    //         counts[word] = 1;    //set count[word] value to 1
    //     } else {                  //if exists
    //         counts[word] = counts[word] + 1; //increment existing value
    //     }

    //     if (counts[word] > compare) {  //counts[word] > 0(first time)
    //         compare = counts[word];   //set compare to counts[word]
    //         mostFrequent = allAnswers[i];  //set mostFrequent value

    //     }
    // };
    


//         $('ul').empty();

//         civilizations.tallyAnswers(answer);
//     });

// }

civilizations.init = function(){
    civilizations.getResults();
}

$(function() {
    civilizations.init();
});



// End of AUGUST 14th EVENING RESEARCH *************







// __________________________________________________________
// FIRST STEPS:::::::::::

// ID's will be grabbed when the quiz is complete, and all the answers have been selected;


// Step 1: When the quiz is complete

// const civilization = civilizations.map((value) => {
//     return value.a;
// });

// Step 2: If the user selects the input, the value will be saved
// const value = "a, b";
// Step 3: Once the quiz is complete, the values will be saved in an array
// const allValues = ["a, b", "b, c", "c, d", "d, e"];

// Step 4: Tally the values 

// Step 5: From the tallied results, the final answer (the answer with the most points) will be selected from the civilizations object

// Step 6: Display result on the page

// _______________________________

// jQuery Steps:

// Step 1: Create a results section that is appended to the quiz page

// Step 2: Correct object is displayed on the page via the .text, .html  
