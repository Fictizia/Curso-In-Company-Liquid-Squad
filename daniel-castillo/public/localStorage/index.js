
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
      consolelog('vaaaamos ' + id)
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

    html += '<div class="contact" onclick="dropUser(' + contact.id + ')">'

    Object.keys(contact).forEach(function(key) {
      html += '<p class="' + key + '"><span>' + key + ':</span>' + contact[key] + '</p>';
    });

    html += '</div">'

    console.log(html)

  });

  document.getElementById('contacts-container').innerHTML = html;


}