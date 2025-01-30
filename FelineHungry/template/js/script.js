
// This function gets called everytime 
// our users want to go to a slide
// This is called on buttons in each slide
let theScore = 0;
let score = document.querySelector('#score');

function moveCat(catNumberShow) {
    // Get a list of every HTML element with a class of slide
    // Every slide in our "choose your own adventure" is a
    // fullscreen DIV with a class of "slide"
    let cat = document.querySelectorAll('.cat');

    // When we run this function, we first loop
    // through every slide DIV and set it to display none
    // This hides it
    for (let x of cat) {
        // x is a different slide every iteration
        // of this loop
        x.style.display = 'none';
    }
    // This function was called with the slide our 
    // users wants to navigate to. The DIVs with .slide
    // class also have a unique ID like "slide_7"
    let theSlide = cat[catNumberShow]; //document.querySelector('#cat'+catNumber);
    
    // After hiding all the slides, we show the particular
    // slide our user wants to see. This could be 
    // display:block, too.
    theSlide.style.display = 'flex';

    // Coding challenge solution, made more efficient
    // by moving this slide 7 code to its own function
    // If this is the div with id="slide_7", run code
    // specifically for this one slide once it's shown
    //if (catNumber == 1) {
        // In functional and procedural programming,
        // it's the norm to move specific functionality
        // like this into its own function (functions
        // shouldn't be doing too many unrelated tasks)
        //Cat1();
    //}
}



function insertItem (theitems) {

let items = document.querySelectorAll('.river')

}


let catNumber = 1;
let lives = 0;

document.addEventListener ('keydown', function (event){

    
    if (event.key == 'ArrowRight' || event.key == 'd' || event.key == 'D'){
        catNumber++;
        //moves the cat from column 0 to 2
  
        if (catNumber <= 2) {
            moveCat(catNumber);
        }

        if (catNumber > 2) {
            catNumber = 2;
            //does not go over 2 
        }
    }
    else if (event.key == 'ArrowLeft'|| event.key == 'a' || event.key == 'A'){
        catNumber--;

        if (catNumber >= 0) {
            moveCat(catNumber);
        }

        if (catNumber < 0) {
            catNumber = 0;
        }
    }
});



let fishNumber = 0;

function insertItem() {
    let columns = document.querySelectorAll('.column');
    let randomNum = Math.floor(Math.random() * columns.length);
    let theItem = document.createElement('img');
    
    theItem.className = 'item';
    theItem.src = 'template/img/Fish.png';

    columns[randomNum].append(theItem);
    moveItem(theItem, randomNum, fishNumber);

    fishNumber++;
}




function moveItem(theElement, columnNumber, theFishNumber) {
    let bottom = 0;
    let firstImageChanged = false; // track if the first image has been changed

    let missLogged = false; // track if a miss has been logged for each element

    let theInt = setInterval(function () {
        bottom += 15;
        theElement.style.bottom = bottom + 'px';

        let characterProperties = theElement.getBoundingClientRect();

        if (typeof theElement.dataset.missLogged === 'undefined') {
            theElement.dataset.missLogged = false;
        }
        //the two logged outcomes score or miss
        if (characterProperties.top < 115 && catNumber == columnNumber) {
            console.log('score');
            //115 is how many pixels from the top the cat intersects with the fish
            theElement.parentNode.removeChild(theElement);
            clearInterval(theInt);
            //removes the fish because the cat ate it
            theScore += 100;
        }
        else if (characterProperties.top < 115 && catNumber != columnNumber && !missLogged)  {
            console.log('miss');
            missLogged = true; // Set the flag to true indicating a miss has been logged for this element
            //theScore -= 100;     
            //if you miss a fish you loose 100 points
            
            let hearts = document.querySelectorAll('.heart');
            hearts[lives].src = 'template/img/Heart1.png';

            lives++;

            if (lives == 9) {
                //GAME OVER CODE
                window.location = 'gameover.html';
            }



//I wanted to change the images each time a miss was logged and on the 10th miss you were sent to the gameover page. there is a link to return to the game there and it would restart for you. 
//I could only get the first heart to change, or the first and the second at the same time. 
// If you could tell me how to get this to work I would appreciate it

        // if (!firstImageChanged) {
        //     document.getElementById("img").src = img.src.replace("Heart0.png", "Heart1.png");
        //     missLogged = true; // Set the flag to true indicating a miss has been logged for this element
        //     firstImageChanged = true;
        //     }
        
        // else if(firstImageChanged == true) {
        //     document.getElementById("img1").src = img.src.replace("Heart0.png", "Heart1.png");

        // }

        }
        score.innerHTML = theScore;
    }, 100);
}


setInterval(function() {
    insertItem();
}, 2000);
//how often a fish is inserted (every two seconds)



//https://stackoverflow.com/questions/7312553/change-image-source-with-javascript
//trying to change the heart image to broken heart

//I used ChatCBT to explain the code and try to find solutions. It didn't do a great job
//but I learned a lot about Javascript asking it questions and having it explain each section did
//if you need a copy of the conversation I could get it for you

