function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

//function form() {
//  let nombre_form = document.getElementById("nombre");
//  let apellido_form = document.getElementById("apellido");
//   let email_form = document.getElementById("email");
//  let password1_form = document.getElementById("password1");
//let password2_form = document.getElementById("password2");
//  let terminos_form = document.getElementById("terminos");
//
//}

const todo = document.getElementsByClassName("form-control");
const pw1 = document.getElementById("password1");
const pw2 = document.getElementById("password2");
const terminos = document.getElementById("terminos");
let boton = document.getElementById("regBtn");
boton.addEventListener("click", () => {
    let cantCompletas = 0;
    for (por_cada of todo) {

        if (por_cada.value.length != 0) {
            cantCompletas += 1;
        }
    }
    if (cantCompletas == 5) {
        alertSuccess();

    } else {
        alertError();

    }
});
function matchPassword() {
    if (pw1 != pw2) {
        alertError();
    } else {
        alertSuccess();
    }
}

function lengthPassword() {
    if (pw1.length != 6) {
        alertError();
    } else {
        alertSuccess();
    }
}
function checkedCheckbox() {
    if (terminos.checked = true) {
        alertSuccess();
    } else {
        alertError();
    }

}