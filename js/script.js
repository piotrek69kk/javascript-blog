'use strict';
const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');
    console.log(event);
    /* remove class 'active' from all article links  */
const activeLinks = document.querySelectorAll('.titles a.active');
for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
    console.log('class active removed');
    console.log(activeLink);
}
    /* add class 'active' to the clicked link */
clickedElement.classList.add('active');
    console.log(clickedElement);
    console.log('clickedElement:', clickedElement); 
    /* remove class 'active' from all articles */
const activeArticles = document.querySelectorAll('.posts article.active');
for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
    console.log('class post active removed');
    console.log(activeArticles);
} 
    /* get 'href' attribute from the clicked link */
const FindClickedId = clickedElement.getAttribute("href");
    console.log(clickedElement.getAttribute("href"));
    /* find the correct article using the selector (value of 'href' attribute) */
const targetArticle = document.querySelector(FindClickedId);
    console.log(targetArticle);
    /* add class 'active' to the correct article */
    targetArticle.classList.add('active');
    console.log(targetArticle);
}
const links = document.querySelectorAll('.titles a');
for(let link of links){
    link.addEventListener('click', titleClickHandler);
}
