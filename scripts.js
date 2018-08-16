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


//BEGIN TRIAL AND ERROR

const random = function (array) {
    const number = Math.floor(Math.random() * array.length);
    // console.log(number);
    return array[number];
};


$(function () {
    //Our code goes in here

    //when the form submits

    $('form').on('submit', function (e) {
        e.preventDefault();
        // console.log('Ancient Civilizations HOLLAAAAA');

        const answerYes = $('input[name=active-yes]:checked').val();
        const answerNo = $('input[name=active-no]:checked').val();
        console.log($('input[name=active-yes]'));



        //match the users choice to the info object
        //get the dink information
        const civilizationIndicator = civilizations[answerYes];

        //get price information
        const civilizationArray = [];

        for (let i = 0; i < civilizationIndicator.length; i++) {
            if (civilizationIndicator[i].price === answerNo) {
                // console.log(drinkInfo[i]);
                civilizationArray.push(civilizationIndicator[i].title);
            }
        }
        console.log(civilizationArray);

        console.log(random(civilizationArray));

        $('.results').html(`<h2 class="choice">${random(civilizationArray)}</h2>`)

    });

});

//END TRIAL AND ERROR 




// *******************************************************
// Could I do it THIS way??? AUGUST 14th EVENING RESEARCH **********************************************************

// civilizations.tallyAnswers = function(){
//     for(let item in civilizations.answer) {
//         $('section').append('hi.scott' + item.name);

//         console.log(item.name);
//     }
// }

// civilizations.getResults = function () {
//     $('form').on('submit', function (e) {
//         e.preventDefault();
//         let answers1 = $('input[name=active]').data('firstLetter', 'secondLetter');

//         // civilizations.answer[answers] = 
//         // civilizations.answer[answers] + 1;
//         console.log(answers1);

//         $('ul').empty();

//         civilizations.tallyAnswers(answers1);
//     });

// }

// civilizations.init = function(){
//     civilizations.getResults();
// }

// $(function() {
//     civilizations.init();
// });



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

// Step 2: Correct object is displayed on the page via the .text, .html or .append
