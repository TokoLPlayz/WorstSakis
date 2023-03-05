function check() {
  let password = document.getElementById('password').value;
  let username = document.getElementById('username').value;
  
  const request = new XMLHttpRequest();
  request.open('GET', '/config/config.json');
  request.responseType = 'json';
  request.send();
  
  request.onload = function() {
    const users = request.response.users;
    const realusername = users.username;
    const realpassword = users.password;
    if (password == realpassword && username == realusername) {
        alert("Permission Granted!");
        window.location.replace("../page/")
     } else {
        alert("Username or Password is Incorrect!");
     }
  };
}
