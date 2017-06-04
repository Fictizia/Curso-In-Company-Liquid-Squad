saveContact = function() {

  var contacts = JSON.parse(localStorage.getItem('contacts')) || [],
      inputs = Array.from(document.getElementsByTagName('input')),
      contact = {};

  inputs.forEach(function(input) {
    contact[input.name] = input.value;
  });

  contacts.push(contact);

  localStorage.setItem('contacts', JSON.stringify(contacts));

};


getContacts = function() {
  var contacts =  JSON.parse(localStorage.getItem('contacts')) || [];

  var html = '';

  contacts.forEach(function(contact) {

    html += '<div class="contact">'

    Object.keys(contact).forEach(function(key) {
      html += '<p class="' + key + '"><span>' + key + ':</span>' + contact[key] + '</p>';
    });

    html += '</div">'

    console.log(html)

    document.getElementById('contacts').innerHTML = html;

  });


}