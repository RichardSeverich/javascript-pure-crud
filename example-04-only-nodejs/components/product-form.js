const productForm = '<!DOCTYPE html>'
  + '<html>'
  + '<head>'
  + '<link rel="stylesheet" href="/center.css" />'
  + '<link rel="stylesheet" href="/form.css" />'
  + '</head>'
  + '<body>'
  + '<h2 class="center">Product Form</h2>'
  + '<form method="POST" class="center">'
  + '<fieldset>'
  + '<label for="name">Name:</label>'
  + '<input type="text" name="name" id="name" />'
  + '<br /><br />'
  + '<label for="quantity">Quantity:</label>'
  + '<input type="text" name="quantity" id="quantity" />'
  + '<br /><br />'
  + '<label for="price">Price:</label>'
  + '<input type="text" name="price" id="price" />'
  + '<br /><br />'
  + '<input type="submit" value="Submit" />'
  + '</fieldset>'
  + '</form>'
  + '</body>'
  + '</html>'

module.exports = productForm;
