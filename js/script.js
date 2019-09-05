'use strict';
{
  const optArticleSelector = '.post';
  const optTitleSelector = '.post-title';
  const optTitleListSelector = '.titles';
  const optArticleTagsSelector ='.post-tags .list';
  const titleClickHandler = function(event) {
    const clickedElement = this;
    event.preventDefault();
    /* remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');
    for(let activeLink of activeLinks) {
      activeLink.classList.remove('active');
    }
    /* add class 'active' to the clicked link */
    clickedElement.classList.add('active');
    /* remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts article.active');
    for(let activeArticle of activeArticles) {
      activeArticle.classList.remove('active');
    }
    /* get 'href' attribute from the clicked link */
    const findClickedId = clickedElement.getAttribute('href');
    /* find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(findClickedId);
    /* add class 'active' to the correct article */
    targetArticle.classList.add('active');
  };

  function generateTitleLinks() {
    const titleList = document.querySelector(optTitleListSelector);
    /* remove contents of titleList */
    titleList.innerHTML = '';
    const articles = document.querySelectorAll(optArticleSelector);
    let html = '';
    /* for each article */
    for(let article of articles) {
      /* get the article id */
      const articleId = article.getAttribute('id');
      /* get the title from the title element */
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      /* create HTML of the link */
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      html = html + linkHTML;
    }
    /* insert link into titleList */
    titleList.innerHTML = html;
    const links = document.querySelectorAll('.titles a');
    for(let link of links) {
      link.addEventListener('click', titleClickHandler);
    }
  }
  generateTitleLinks();

function generateTags() {
  const articles = document.querySelectorAll(optArticleSelector);
  console.log(articles);
  for(let article of articles) {
    const tagList = article.querySelector(optArticleTagsSelector)
    console.log(tagList);
    var html = ' ';
    console.log(html);
    const articleTags = article.getAttribute('data-tags');
    console.log(articleTags)
    const articleTagsArray = articleTags.split(' ');
    console.log(articleTagsArray);
    for(let tag of articleTagsArray) {
      const linkHTML ='<li><a href="#tag-' + tag + '">' + tag + '</a>&nbsp;</li>';
      html = html + linkHTML;
      console.log(html);
    }
    tagList.innerHTML = html;
  }

}

generateTags();
}
function tagClickHandler(event) {
  /* prevent default action for this event */

  /* make new constant named "clickedElement" and give it the value of "this" */

  /* make a new constant "href" and read the attribute "href" of the clicked element */

  /* make a new constant "tag" and extract tag from the "href" constant */

  /* find all tag links with class active */

  /* START LOOP: for each active tag link */

    /* remove class active */

  /* END LOOP: for each active tag link */

  /* find all tag links with "href" attribute equal to the "href" constant */

  /* START LOOP: for each found tag link */

    /* add class active */

  /* END LOOP: for each found tag link */

  /* execute function "generateTitleLinks" with article selector as argument */
}

function addClickListenersToTags(){
  /* find all links to tags */

  /* START LOOP: for each link */

    /* add tagClickHandler as event listener for that link */

  /* END LOOP: for each link */
}

addClickListenersToTags();