orderContacts = function() {

  var contacts = JSON.parse(localStorage.getItem('contacts')) || [];
  
  return contacts.sort(function(a, b) {
    var nameA = a.name.toUpperCase(),
        nameB = b.name.toUpperCase();
    return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
  });


};

dropAllContacts = function() {
  localStorage.setItem('contacts', JSON.stringify([]));
  showMsg('All contacts have been deleted');
};

setContactTemplate = function(contact) {
  var template = '<div class="contact">#content<button type="button" onclick="dropContact(#id)"">Drop contact</button></div>';
  var content = '';

  Object.keys(contact).forEach(function(key) {
    content += '<p class="' + key + '"><span>' + key + ':</span>' + contact[key] + '</p>';
  });

  template = template.replace('#id', contact.id);
  template = template.replace('#content', content);

  return template;
};

searchContact = function() {
  var contacts = JSON.parse(localStorage.getItem('contacts')) || [];
  var search = document.getElementById('name').value.toLowerCase();
  var contactsHtml = '';

  hideMsg();

  contacts.forEach(function(contact) {

    if((contact.name).toLowerCase().indexOf(search) !== -1) {
      contactsHtml += setContactTemplate(contact);
    };

  });

  document.getElementById('contacts-container').innerHTML = contactsHtml;

  if(contactsHtml === '')
    showMsg('Contact not found');

};

showMsg = function(msg) {
  var template = '<p id="msg">' + msg + '</p>';
  document.getElementById('msg-container').innerHTML = template;
  hideContacts();
};

hideMsg = function() {
  document.getElementById('msg-container').innerHTML = '';
};

hideContacts = function() {
  document.getElementById('contacts-container').innerHTML = '';
};

dropContact = function(id) {

  var contacts =  JSON.parse(localStorage.getItem('contacts'));
  var newContacts = [];
  var i = 0;
  var name = '';

  contacts.forEach(function(contact) {
    if(contact.id !== id)
      newContacts.push(contact);
    else
      name = contact.name;
  });

  newContacts.forEach(function(contact) {
    contact.id = i;
    i++;
  });

  localStorage.setItem('contacts', JSON.stringify(newContacts));

  showMsg(name + ' has been removed from the list');
},

saveContact = function() {

  var contacts = JSON.parse(localStorage.getItem('contacts')) || [],
      inputs = Array.from(document.getElementsByTagName('input')),
      contact = {};
      name = ''

  inputs.forEach(function(input) {
    contact[input.name] = input.value;
    input.value = '';
  });

  contact['id'] = contacts.length;

  contacts.push(contact);

  name = contact.name;

  localStorage.setItem('contacts', JSON.stringify(contacts));

  orderContacts;

  showMsg(name + ' has been included in the list');
};


getContacts = function() {

  hideMsg();

  var contacts =  orderContacts(),
      contactsHtml = '';

  contacts.forEach(function(contact) {
    contactsHtml += setContactTemplate(contact);
  });

  document.getElementById('contacts-container').innerHTML = contactsHtml;

  if(!contacts.length)
    showMsg('No contacts found');

}