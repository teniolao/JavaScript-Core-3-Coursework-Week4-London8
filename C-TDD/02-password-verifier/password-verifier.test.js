let verify = require("./password-verifier");

test("If password < 8 characters return 'Password rejected'", function () {
  // Arrange
  const password = "verify";
  // Act
  const expected = "Password rejected";
  // Assert
  const result = verify(password);
  expect(result).toEqual(expected);
});

test("If password is null return 'Password rejected'", function () {
  // Arrange
  const password = null;
  // Act
  const expected = "Password rejected";
  // Assert
  const result = verify(password);
  expect(result).toEqual(expected);
});

test("If password does not have at least 1 uppercase letter return 'Password rejected'", function () {
  // Arrange
  const password = "verify";
  // Act
  const expected = "Password rejected";
  // Assert
  const result = verify(password);
  expect(result).toEqual(expected);
});

test("If password does not have at least 1 number return 'Password rejected'", function () {
  // Arrange
  const password = "verify";
  // Act
  const expected = "Password rejected";
  // Assert
  const result = verify(password);
  expect(result).toEqual(expected);
});
