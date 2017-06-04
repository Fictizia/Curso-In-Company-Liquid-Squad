saveUser = function() {


  var users = JSON.parse(localStorage.getItem("users")) || [];

  var user = {
    name: document.getElementById('name').value,
    phone: document.getElementById('phone').value,
    email: document.getElementById('email').value
  }

  users.push(user)

  localStorage.setItem('users', JSON.stringify(users))

  console.log('users ', users)

}