const child = document.querySelector('.child');

child1 = document.getElementById('1');
child2 = document.getElementById('2');
child3 = document.getElementById('3');

child1.classList.remove('blur');
child2.classList.remove('blur');
child3.classList.remove('blur');



child1.addEventListener('mouseenter', () => {
  child2.classList.add('blur');
  child3.classList.add('blur');

});

child1.addEventListener('mouseleave', () => {
    child2.classList.remove('blur');
    child3.classList.remove('blur');
  });


child2.addEventListener('mouseenter', () => {
    child1.classList.add('blur');
    child3.classList.add('blur');
  });
  
  child2.addEventListener('mouseleave', () => {
    child1.classList.remove('blur');
    child3.classList.remove('blur');
  });


  child3.addEventListener('mouseenter', () => {
    child1.classList.add('blur');
    child2.classList.add('blur');
  });
  
  child3.addEventListener('mouseleave', () => {
    child1.classList.remove('blur');
    child2.classList.remove('blur');
  });