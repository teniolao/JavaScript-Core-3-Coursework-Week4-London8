function verify(password) {
  let i = 0;
  if (
    password == null ||
    password.length < 8 ||
    password.search(/[A-Z]/) ||
    password.search(/[0-9]/)
  ) {
    return "Password rejected";
  }
  return "Password accepted";
}

module.exports = verify;