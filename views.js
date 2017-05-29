var views = {};

module.exports = views;

views.header = function(){
    var output = "<!Doctype html>\n<html>\n<head>\n<link href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous'>";
    output += "\n<title>Login Sample With Node</title>\n<meta name='viewport' content='width=device-width, initial-scale=1.0'>";
    output += "\n</head>\n<body>\n<div class='navbar fixed-top'><a href='#' class='navbar-brand'>Login Sample</a>\n";
    output += "<ul class='navbar-nav mr-auto'>\n<li class='nav-item'><a href='#' class='nav-link'>Home/Login</a></li>\n";
    output += "<li class='nav-item'><a href='#' class='nav-link'>Signup(not implemented)</a></li>\n</ul>";
    return output;
};

views.footer = function(){
    var output = "<footer class='footer'>\n<div class='container'>\n<span>Author: Zachary MacKeil</span>\n";
    output += "</div>\n</footer>\n<script src='script.js'></script></body></html>";
    return output;
};

views.login = function(){
    var output = "<form method='post' action='/login'>\n<input type='text' id='uname' name='username' placeholder='Username'>\n";
    output += "<br><input type='password' name='password' placeholder='password' id='pwd'><br>\n<button class='btn' onclick='send()'>Login</button>";
    output += "\n</form>";
    return output;
};

views.jumboStart = "<div class='jumbotron'>";
views.jubmoEnd = "</div>";

views.success = "<h1>You Logged in!</h1>";

views.failure = "<h1>Login Failed</h1>";