var scrollToTopBtn = document.getElementById("scroll-btn")
var rootElement = document.documentElement                 //returns    document's element (as an Element object).
window.onscroll=()=>{              //onscroll event occurs when the scroll bar scrolled
    scrollFn();                         //calling function for showing scroll top button 
}

/**
 * @description function for  showing scroll  button
 */
function scrollFn(){
if(document.documentElement.scrollTop>20){                                             
    document.getElementById("scroll-btn").style.display="block";
}
else{
    document.getElementById("scroll-btn").style.display="none";
}
}

/**
 * @description function for  scroll to Top 
 */
function scrollToTop() {
    // Scroll to top logic
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  scrollToTopBtn.addEventListener("click", scrollToTop)
