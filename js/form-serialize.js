// https://gist.github.com/liveloper/cabed192f58d5b24dc7b
function formToObject(form) {
  var i, j, object = {};

  if (!form || form.nodeName !== "FORM") return;

  for (i = form.elements.length; i--;) {

    if (form.elements[i].name === "") continue;

    switch (form.elements[i].nodeName) {
      case 'INPUT':
      switch (form.elements[i].type) {
        case 'button':
        case 'date':
        case 'datetime':
        case 'datetime-local':
        case 'color':
        case 'email':
        case 'hidden':
        case 'password':
        case 'month':
        case 'number':
        case 'reset':
        case 'search':
        case 'submit':
        case 'tel':
        case 'text':
        case 'time':
        case 'url':
        case 'week':
        object[form.elements[i].name] = encodeURIComponent(form.elements[i].value);
        break;
        case 'checkbox':
        case 'radio':
        if (form.elements[i].checked) {
          object[form.elements[i].name] = encodeURIComponent(form.elements[i].value);
        }
        break;
      }
      break;
      case 'file':
      break;
      case 'TEXTAREA':
      object[form.elements[i].name] = encodeURIComponent(form.elements[i].value);
      break;
      case 'SELECT':
      switch (form.elements[i].type) {
        case 'select-one':
        object[form.elements[i].name] = encodeURIComponent(form.elements[i].value);
        break;
        case 'select-multiple':
        for (j = form.elements[i].options.length; j--;) {
          if (form.elements[i].options[j].selected) {
            object[form.elements[i].name] = encodeURIComponent(form.elements[i].options[j].value);
          }
        }
        break;
      }
      break;
      case 'BUTTON':
      switch (form.elements[i].type) {
        case 'reset':
        case 'submit':
        case 'button':
        object[form.elements[i].name] = encodeURIComponent(form.elements[i].value);
        break;
      }
      break;
    }
  }
  return object;
}

function serialize(formElement) {
  obj = formToObject(formElement);
  console.dir(obj);
  var str = [];
  for(var p in obj)
  if (obj.hasOwnProperty(p)) {
    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
  }
  return str.join("&");
}
