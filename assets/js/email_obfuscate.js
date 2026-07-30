(function() {
  var user = "b.scully";
  var domain = "mail.utoronto.ca";
  var link = document.getElementById("email-link");
  link.href = "mailto:" + user + "@" + domain;
  link.textContent = user + "@" + domain;
})();
