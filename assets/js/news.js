const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const listNew = document.querySelector('#list-new-body');
const listNewItem = document.querySelectorAll('#list-new-body .item');
var translateY = 0;
var count = listNewItem.length;

function slideNext() {
  if (count === 1) {
    translateY = 0; 
    listNew.style.transform = `translateY(${translateY}px)`;
    count = listNewItem.length; 
    return false;
  }
  translateY -= 673;
  listNew.style.transform = `translateY(${translateY}px)`;
  count--;
}

function slidePrev() {
  if (count === listNewItem.length) {
    translateY = -(670 * (listNewItem.length - 1)); 
    listNew.style.transform = `translateY(${translateY}px)`;
    count = 1; 
    return false;
  }
  translateY += 673;
  listNew.style.transform = `translateY(${translateY}px)`;
  count++;
}

next.addEventListener('click', function (event) {
  event.preventDefault();
  slideNext();
});

prev.addEventListener('click', function (event) {
  event.preventDefault();
  slidePrev();
});

setInterval(slideNext, 3000);