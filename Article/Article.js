// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

/**
 * Constants
 */

const articles = Array.from(document.getElementsByClassName('article'))

/**
 * Define class
 */

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement
    // create a reference to the ".expandButton" class.
    this.expandButton = this.domElement.querySelector('.expandButton')
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'expand'
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle())
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.add('article-open')
    this.domElement.classList.remove('close')
  }

  closeArticle() {
    this.domElement.classList.add('close')
    this.domElement.classList.remove('article-open')
  }
}

/* START HERE:

- Select all classes named ".article" and assign that value to the articles variable.

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

articles.forEach(makeArticle)

function makeArticle(article) {
  return new Article(article)
}
