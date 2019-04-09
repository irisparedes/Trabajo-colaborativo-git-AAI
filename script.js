'use strict';
const smileyFace = document.querySelector('.face');
function smile(){
    smileyFace.innerHTML= ';)';
}; 
function smileOut(){
    smileyFace.innerHTML= ':)';
}
smileyFace.addEventListener('mouseover', smile);
smileyFace.addEventListener('mouseout', smileOut);