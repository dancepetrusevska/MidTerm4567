function contact() {
  event.preventDefault();

  let surname;
  if (!document.getElementById("surname").value.trim()) {
    alert("Enter your surname!");
    return false;
  }  else {
    alert("Invalid input!");
    return false;
  }

  let name;
    if (!document.getElementById("name").value.trim()) {
    alert("Enter your name!");
    return false;
    }else{
        alert("Invalid input!");
    return false;
  }

  let id;
  if (!document.getElementById("id").value.trim()) {
    alert("Enter your Student ID!");
    return false;
  }else {
      alert("Invalid input!");
    return false;
  }

  let email;
    if (!document.getElementById("email").value.trim()) {
        alert("Enter your E-mail!");
        return false;
    }else {
        alert("Invalid input!");
        return false;
    }

  let note;
  if (!document.getElementById("note").value.trim()) {
    alert("The note is empty");
    return false;
    }
}

function Save() {
    let Obj = {
        surname,
        name,
        id,
        email,
        note,
    };
    if (document.getElementById("Agreement").checked) {
        localStorage.setItem("contactSave", JSON.stringify(Obj));
    }
    alert("Successfully saved");
}

function again() {
    document.getElementById("result").style.display = "none";
}

$(document).ready(function () {
    $('input[name=optionsRadios]').change(function () {
        $('.alert').remove();
        if ($('input[name=optionsRadios]:checked').val() === "CORRECT") {
            $(this).parent().append('<span class="alert green">&#10004 Correct Answer</span>');
        } else {
            $(this).parent().append('<span class="alert red">&#10006 Wrong Answer</span>');
        }
    });
});

var beginCount, seconds;
function Count() {
    beginCount = new Date();
};
function Time() {
    seconds = new Date();
    var diff = seconds - beginCount;
    diff /= 1000;
    var result = Math.round(diff);
    alert(result);
}
