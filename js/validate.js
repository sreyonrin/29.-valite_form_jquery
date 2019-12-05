$(document).ready(() => {
  $("#button").on("click", () => {
    // 1. Get the validity of inputs
    let name = $("#name").val();
    let nameValid = isNameValid(name);

    let age = $("#age").val();
    var ageValid = isAgeValid(age);

    let nickName = $("#nickname").val();
    let nicknameValid = isNicknameValid(nickName);

    // 2. Update the success/error status
    var errors = [];

    if (nameValid) {
      displaySuccessOn("name");
    } else {
      displayErrorOn("name");
      errors.push("Name shall not be empty");
    }

    if (ageValid) {
      displaySuccessOn("age");
    } else {
      displayErrorOn("age");
      errors.push("Age shall be a number");
    }

    if (nicknameValid) {
      displaySuccessOn("nickname");
    } else {
      displayErrorOn("nickname");
      errors.push("Nickname shall have at least 9 chars and one uppercase");
    }

    // Update error list
    updateHtmlErrorMessage(errors);
  });
});

// isNameValid()
// Return: true if name is valid - false otherwise
function isNameValid(name) {
  return name != ""; // true if not empty
}

// isAgeValid()
// Return: true if age is valid - false otherwise
function isAgeValid(age) {
  return age != "" && !isNaN(age); // true if not empty and contains a number
}

// isNicknameValid()
// Return: true if nickName is valid - false otherwise
function isNicknameValid(nickName) {
  var atLeast9chars = nickName.length >= 9;
  var atLeast1Uppercase = false;
  for (let i = 0; i < nickName.length; i++) {
    var chars = nickName.charAt(i);
    if (isNaN(chars)) {
      var isUppercase = chars.toUpperCase() == chars;
      atLeast1Uppercase = atLeast1Uppercase || isUppercase;
    }
  }
  return atLeast1Uppercase && atLeast9chars; // true if at least 9 chars and at least one upper case
}

// displayErrorOn()
function displayErrorOn(id) {
  $("#" + id)
    .addClass("border-danger")
    .removeClass("border-success");
}

// displaySuccessOn()
function displaySuccessOn(id) {
  $("#" + id)
    .addClass("border-success")
    .removeClass("border-danger");
}

// updateHtmlErrorMessage()
// Update the html code to display given errors - or success if no errors
function updateHtmlErrorMessage(errors) {
  var isSuccess = errors.length === 0;

  // 1.  Compute the HTML code !
  var htmlCode;
  if (isSuccess) {
    htmlCode = `<div class="alert alert-success"><strong>Success</strong></div>`;
  } else {
    var errorCode = "";
    for (i = 0; i < errors.length; i++) {
      errorCode += " - " + errors[i] + " <br> ";
    }

    htmlCode = `<div class="alert alert-danger"><h5>Error</h5>${errorCode} </div>`;
  }

  // 2. Update the HTML code
  $("#message").html(htmlCode);
}
