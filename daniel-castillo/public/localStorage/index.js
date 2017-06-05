
orderContacts = function() {

  var contacts = JSON.parse(localStorage.getItem('contacts'));
  
  var orderContacts = contacts.sort(function(a, b) {
    var nameA = a.name.toUpperCase(),
        nameB = b.name.toUpperCase();
    return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
  });

  orderContacts = setId(orderContacts);

  return orderContacts;

};

dropUser = function(id) {

  var contacts =  JSON.parse(localStorage.getItem('contacts'));

  contacts.forEach(function(contact) {
    if(contact.id === id)
      console.log('vaaaamos ' + id)
  });

},

saveContact = function() {

  var contacts = JSON.parse(localStorage.getItem('contacts')) || [],
      inputs = Array.from(document.getElementsByTagName('input')),
      contact = {};

  inputs.forEach(function(input) {
    contact[input.name] = input.value;
  });

  contact['id'] = contacts.length;

  contacts.push(contact);

  localStorage.setItem('contacts', JSON.stringify(contacts));

  orderContacts;

};


getContacts = function() {
  var contacts =  JSON.parse(localStorage.getItem('contacts')) || [];
  var html = '';

  contacts.forEach(function(contact) {

    var i = 1;
    var keys = Object.keys(contact);

    keys.forEach(function(key) {

      if (i === 1)
        html += '<div class="contact" onclick="dropUser(' + contact.id + ')">'

      html += '<p class="' + key + '"><span>' + key + ':</span>' + contact[key] + '</p>';

      if (i === keys.length)
        html += '</div>'

      i++;
    });

  });

  document.getElementById('contacts-container').innerHTML = html;


}