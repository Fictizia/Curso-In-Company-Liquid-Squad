
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


  contacts.forEach(function(contact) {

    var template = '<div class="contact" onclick="dropUser(#id)">#content</div>';
    var keys = Object.keys(contact);
    var content = '';

    keys.forEach(function(key) {
      content += '<p class="' + key + '"><span>' + key + ':</span>' + contact[key] + '</p>';
    });

    template.replace('#id', contact.id);
    template.replace('#content', content);

    document.getElementById('contacts-container').appendChild(template)

  });




}