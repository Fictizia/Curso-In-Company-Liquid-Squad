function orderContacts() {

  var contacts = JSON.parse(localStorage.getItem('contacts')) || [];
  
  return contacts.sort(function(a, b) {
    var nameA = a.name.toUpperCase(),
        nameB = b.name.toUpperCase();
    return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
  });

};

function dropAllContacts() {
  localStorage.setItem('contacts', JSON.stringify([]));
  showMsg('All contacts have been deleted');
};

function setContactTemplate(contact) {
  var template = '<div class="contact">#content<button type="button" onclick="dropContact(#id)"">Drop contact</button></div>';
  var content = '';

  Object.keys(contact).forEach(function(key) {
    content += '<p class="' + key + '"><span>' + key + ':</span>' + contact[key] + '</p>';
  });

  template = template.replace('#id', contact.id);
  template = template.replace('#content', content);

  return template;
};

function searchContact() {
  var contacts = JSON.parse(localStorage.getItem('contacts')) || [];
  var search = document.getElementById('name').value.toLowerCase();
  var contactsHtml = '';

  setLayerContent('msg-container', '');

  contacts.forEach(function(contact) {

    if((contact.name).toLowerCase().indexOf(search) !== -1) {
      contactsHtml += setContactTemplate(contact);
    };

  });

  setLayerContent('contacts-container', contactsHtml);

  if(contactsHtml === '')
    showMsg('Contact not found');

};

function showMsg(msg) {
  var template = '<p id="msg">' + msg + '</p>';
  document.getElementById('msg-container').innerHTML = template;
  setLayerContent('contacts-container', '');
};

function setLayerContent(layer, content) {
  document.getElementById(layer).innerHTML = content;
};

function dropContact(id) {

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
};

function clearForm() {
  var inputs = Array.from(document.getElementsByTagName('input'));
  inputs.forEach(function(input) {
    input.value = '';
  });
};

function saveContact() {

  var contacts = JSON.parse(localStorage.getItem('contacts')) || [],
      inputs = Array.from(document.getElementsByTagName('input')),
      contact = {};
      name = '',
      emptyValue = false;

  inputs.forEach(function(input) {

    if (input.value == '')
      emptyValue = true;

    contact[input.name] = input.value;

  });


  var saveIt = function() {
    contact['id'] = contacts.length;

    contacts.push(contact);

    name = contact.name;

    localStorage.setItem('contacts', JSON.stringify(contacts));

    showMsg(name + ' has been included in the list');
    clearForm();
  };

  emptyValue ? showMsg('Please, check the form') : saveIt();

};


function getContacts() {

  setLayerContent('msg-container', '');

  var contacts =  orderContacts(),
      contactsHtml = '';

  contacts.forEach(function(contact) {
    contactsHtml += setContactTemplate(contact);
  });

  setLayerContent('contacts-container', contactsHtml);

  if(!contacts.length)
    showMsg('No contacts found');

};