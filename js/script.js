'use strict';
{
  const optArticleSelector = '.post';
  const optTitleSelector = '.post-title';
  const optTitleListSelector = '.titles';
  const optArticleTagsSelector = '.post-tags .list';
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
  
  function generateTitleLinks(customSelector = '') {
    const titleList = document.querySelector(optTitleListSelector);
    /* remove contents of titleList */
    titleList.innerHTML = '';
    const articles = document.querySelectorAll(optArticleSelector + customSelector);
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
    /* find all articles */
    const articles = document.querySelectorAll(optArticleSelector);
    /* START LOOP: for every article: */
    for(let article of articles) {
      /* find tags wrapper */
      const tagWrap = article.querySelector(optArticleTagsSelector);
      /* make html variable with empty string */
      var html = '';
      /* get tags from data-tags attribute */
      const tag = article.getAttribute('data-tags');
      /* split tags into array */
      const tagsArray = tag.split(' ');
      /* START LOOP: for each tag */
      for(let tagLink of tagsArray) {
        /* generate HTML of the link */
        var tagHtml = '<li><a href="#tag-' + tagLink + '">' + tagLink + '</a>&nbsp;<li>';
        /* add generated code to html variable */
        html = html + tagHtml;
      /* END LOOP: for each tag */
      }
      /* insert HTML of all the links into the tags wrapper */
      tagWrap.innerHTML = html;
    /* END LOOP: for every article: */
    }
  }
  
  generateTags();

  function tagClickHandler(event){
    /* prevent default action for this event */
    event.preventDefault();
    /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;
    /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');
    console.log(href);
    /* make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-', '');
    console.log(tag)
    /* find all tag links with class active */
    const tagsActive = document.querySelectorAll('a.active[href^="#tag-"]');
    console.log(tagsActive);
    /* START LOOP: for each active tag link */
    for(let tagActive of tagsActive) {
    /* remove class active */
      tagActive.classList.remove('active');
    /* END LOOP: for each active tag link */
  }
    /* find all tag links with "href" attribute equal to the "href" constant */
    const tagsEqual = document.querySelectorAll('a[href="' + href + '"]');
    /* START LOOP: for each found tag link */
    for(let tagEqual of tagsEqual) {
    /* add class active */
      tagEqual.classList.add('active');
    /* END LOOP: for each found tag link */
  }
    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-tags~="' + tag + '"]');
  }
  
  function addClickListenersToTags() {
    /* find all links to tags */
    const allLinks = document.querySelectorAll('.post-tags a');
    /* START LOOP: for each link */
    for(let allLink of allLinks) {
    /* add tagClickHandler as event listener for that link */
    allLink.addEventListener('click', tagClickHandler);
    /* END LOOP: for each link */
    }
  }
  
  addClickListenersToTags();
}
