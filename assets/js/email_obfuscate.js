(function() {
  var user = "account";
  var domain = "mail.com";
  var link = document.getElementById("email-link");
  link.href = "mailto:" + user + "@" + domain;
  link.textContent = user + "@" + domain;
})();
