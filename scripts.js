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





// Could I do it THIS way??? AUGUST 14th EVENING RESEARCH *************

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
civilizations.tallyAnswers = function(){
    for(let item in civilizations.answer) {
        $('section').append('hi.scott ' + item.name);

        console.log(item.name);
    }
}




// var dataArray = new Array();
// $('.popupDiv').each(function () {
//     var data-firstLetter data-secondLetter = $(this).data('activate');
//     if (!dataArray.indexOf(data-firstLetter data-secondLetter)) {
//         dataArray.push(data-firstLetter data-secondLetter);
//         $('.popupDiv[data-layer="' + data-firstLetter + data-secondLetter + '"]').each(function () {
//         });
//     }
// });


civilizations.getResults = function () {
    $('form').on('submit', function (e) {
        e.preventDefault();
        let answers1 = $('input[name=active]').data('firstLetter', 'secondLetter');

        // civilizations.answer[answers] = 
        // civilizations.answer[answers] + 1;
        console.log(answers1);

        $('ul').empty();

        civilizations.tallyAnswers(answers1);
    });

}

civilizations.init = function(){
    civilizations.getResults();
}

$(function() {
    civilizations.init();
});



// End of AUGUST 14th EVENING RESEARCH *************



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
