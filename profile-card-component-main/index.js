import { makeElement, render } from './utils.js';




let app = document.getElementById('app');


//main container

let img = makeElement('div', {
  content: `<img src="images/image-victor.jpg" alt='image of victer'/>`,
  classlist: 'card-image'
})

let initialsText = makeElement('section', {
  content: `<h1> Victor Crest
<span>26</span> </h1>
<p>london</p>
`,
  classlist: 'text'

})

let stats = makeElement('section', {
  classlist: `card-stats`,
  content: `
  
  <p> <span>80K</span>Followers</p>
  
  <p> <span>803K</span>Likes</p>
  <p> <span>1.4K</span>Photos</p>
  `
})

let article = makeElement('article')
render(article, [img, initialsText, stats])

render(app, article)