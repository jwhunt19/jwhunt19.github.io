// get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// listen to the resize event
window.addEventListener('resize', () => {
    // execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

// variable for portfolio
const portfolio = document.getElementsByClassName('portfolio-grid')[0];
// function to open and close modal
portfolio.addEventListener('click', () => {
    const modalId = event.target.id + '-modal';
    const modals = document.getElementsByClassName('modal');
    if (event.target.className == 'modal-btn'){
        for( i = 0; i < modals.length; i++ ){
            if (modals[i].id == modalId){
                modals[i].style.display = 'block';
            }
        }
    } else if (event.target.className == 'close'){
        for( i = 0; i < modals.length; i++ ){
            modals[i].style.display = 'none';
        }
    } else if (event.target.className == 'modal'){
        for( i = 0; i < modals.length; i++ ){
            modals[i].style.display = 'none';
        }
    }
});