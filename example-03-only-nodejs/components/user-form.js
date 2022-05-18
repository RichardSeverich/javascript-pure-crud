const userForm = '<!DOCTYPE html>'
  + '<html>'
  + '<head>'
  + '<link rel="stylesheet" href="/center.css" />'
  + '<link rel="stylesheet" href="/form.css" />'
  + '<script src="/utils-local-storage.js"></script>'
  + '<script src="/mock-data.js"></script>'
  + '<script src="/user-form.js"></script>'
  + '</head>'
  + '<body onload="onLoadFormEdit()">'
  + '<h2 class="center">User Form</h2>'
  + '<form onsubmit="event.preventDefault();onFormSubmit();" class="center">'
  + '<fieldset>'
  + '<label for="nickname">Nickname:</label>'
  + '<input type="text" id="nickname" />'
  + '<br /><br />'
  + '<label for="password">Password:</label>'
  + '<input type="password" id="password" />'
  + '<br /><br />'
  + '<label for="first-name">Names:</label>'
  + '<input type="text" id="first-name" />'
  + '<br /><br />'
  + '<label for="last-name">LastName:</label>'
  + '<input type="text" id="last-name" />'
  + '<br /><br />'
  + '<label for="birthday">Birthday:</label>'
  + '<input type="date" id="birthday" />'
  + '<br /><br />'
  + '<label for="email">Email:</label>'
  + '<input type="text" id="email" />'
  + '<br /><br />'
  + '<label for="type">Type:</label>'
  + '<select id="type">'
  + '<option value="Administrator">Administrator</option>'
  + '<option value="Manager">Manager</option>'
  + '<option value="Developer">Developer</option>'
  + '<option value="Tester">Tester</option>'
  + '</select>'
  + '<br /><br />'
  + '<input type="submit" value="Submit" />'
  + '</fieldset>'
  + '</form>'
  + '</body>'
  + '</html>'

module.exports = userForm;