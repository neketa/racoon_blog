
function socialsCounterUp(button) {
    var counterElement = button.querySelector('.socials__item-counter'); 
    var count = parseInt(counterElement.innerHTML);
    counterElement.innerHTML = count + 1;      
};

function socialsCounterDown(button) {
    var counterElement = button.querySelector('.socials__item-counter');  
    var count = parseInt(counterElement.innerHTML);
    if (count > 0) {
        counterElement.innerHTML = count - 1;
    }      
};


var socialButtons = document.getElementsByClassName('socials__item');
// [].forEach.call(socialButtons, function(button) {
//     button.addEventListener('click', function(e){
//         socialsCounterUp(e.currentTarget)
//     })
// });

for(var i = 0; i < socialButtons.length; i++) {
    socialButtons[i].addEventListener('click', function(e){
        socialsCounterUp(e.currentTarget)
    })
    socialButtons[i].addEventListener('contextmenu', function(e){
        e.preventDefault();
        socialsCounterDown(e.currentTarget);
    })
};