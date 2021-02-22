const navBottom = document.querySelector('.nav-bottom')
const navSuperBottom = document.querySelector('.nav-superbottom')
const logo = document.querySelector('.logo')
const sticky = navBottom.offsetTop
console.log(sticky)



window.onscroll = function (){
    myFunction()
}

function myFunction(){
    if (window.pageYOffset >= sticky) {
        navBottom.classList.add("sticky-1")
        navSuperBottom.classList.add('sticky-2')
        logo.style.display='block'
      } else {
        navBottom.classList.remove("sticky-1");
        navSuperBottom.classList.remove('sticky-2')
        logo.style.display='none'
      }
}