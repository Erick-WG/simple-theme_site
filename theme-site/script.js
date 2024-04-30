'use strict';

const themeButton = document.querySelector('.theme-btn')


themeButton.addEventListener('click', ()=>{
    // the className has to be updated with every function call ('clicks'), hence should be stored within the eventListener.
    const className = document.body.className

    document.body.classList.toggle('light-theme')
    document.body.classList.toggle('dark-theme')


    // condition to control the button text based on the theme.
    className == 'light-theme' ? themeButton.textContent = 'Dark' : themeButton.textContent = 'Light'

    console.log(`Current class name: ${className}`)

});






