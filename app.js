const currentContainer = document.getElementById('current-container');
const finalContainer = document.getElementById('final-container');
const button = document.getElementById('submit');
const answerHolder = document.getElementById('rate');
const ratingNums = document.querySelectorAll('.rate-num');
const back = document.querySelector('.back');

let ratingAnswer = 4;


ratingNums.forEach(rating => {
    rating.addEventListener('click', addClass);
    
});


function addClass(event) {
    ratingNums.forEach(rating => {
        rating.classList.remove ('active');
    });
   
    if(event.target.classList.contains('rate-num')){
        event.target.classList.add('active');
    }
    else{
        event.target.parentElement.classList.add('active');
    }
    ratingAnswer = event.target.textContent;
    
}

button.addEventListener('click', () => {
    currentContainer.style.display ="none";
    answerHolder.textContent = ratingAnswer;
    finalContainer.style.display = "flex";
    back.style.display ="block";
    
});




