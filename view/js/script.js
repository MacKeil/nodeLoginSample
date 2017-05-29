function sendData(){
    var xhp = new XMLHttpRequest();
    var user = document.getELementById('uname').value;
    var pwd = document.getElementById('pwd').value;
    var data = "username="+user+"&password="+pwd;
    xhp.open("POST", "/login", true);
    xhp.send(data);
}