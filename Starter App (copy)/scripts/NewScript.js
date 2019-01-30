function serverSayHello() {
  return "Hello, " + Session.getActiveUser().getEmail() + "!";
}