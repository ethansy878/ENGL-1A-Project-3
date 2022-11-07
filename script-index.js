

/* IMPORTANT: YOU WILL USE THIS FOR FADE IN SCROLLING
HTML syntax
The syntax is simple. Any attribute on any element whose attribute name starts with data- is a data attribute. Say you have an article and you want to store some extra information that doesn't have any visual representation. Just use data attributes for that:

<article
  id="electric-cars"
  data-columns="3"
  data-index-number="12314"
  data-parent="cars">
  …
</article>
Copy to Clipboard
JavaScript access
Reading the values of these attributes out in JavaScript is also very simple. You could use getAttribute() with their full HTML name to read them, but the standard defines a simpler way: a DOMStringMap you can read out via a dataset property.

To get a data attribute through the dataset object, get the property by the part of the attribute name after data- (note that dashes are converted to camelCase).

const article = document.querySelector("#electric-cars");
// The following would also work:
// const article = document.getElementById("electric-cars")

article.dataset.columns; // "3"
article.dataset.indexNumber; // "12314"
article.dataset.parent; // "cars"
Copy to Clipboard
Each property is a string and can be read and written. In the above case setting article.dataset.columns = 5 would change that attribute to "5".

*/