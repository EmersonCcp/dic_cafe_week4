function confirmSubmit() {
  const forms = document.forms;
  forms[0].onsubmit = function () {
    const name = document.getElementById("name").value;
    if (!confirm(`${name} ¿Está seguro de que quiere enviarlo?`)) {
      alert("Cancelado.");
      return false;
    }
  };
}

window.onload = confirmSubmit;

function emailValidation() {
  const form = document.getElementById("form");
  const emailInput = document.getElementById("email");
  const emailConfirmInput = document.getElementById("email_confirm");
  let errorMessage = null;

  emailConfirmInput.addEventListener("input", () => {
    const emailValue = emailInput.value;
    const emailConfirmValue = emailConfirmInput.value;

    if (emailValue === emailConfirmValue) {
      if (errorMessage) {
        errorMessage.remove();
        errorMessage = null;
      }
      emailConfirmInput.style.backgroundColor = "initial";
    } else {
      if (!errorMessage) {
        errorMessage = createErrorMessage();
        errorMessage.id = "error-message";
        const trElement = emailConfirmInput.closest("tr");
        trElement.insertAdjacentElement("afterend", errorMessage);
      }

      emailConfirmInput.style.backgroundColor = "rgba(230,169,171,.5)";
    }
  });
}

function createErrorMessage() {
  const errorMessage = document.createElement("p");
  errorMessage.textContent = "El correo electrónico no coincide.";
  errorMessage.style.color = "#d14539";
  return errorMessage;
}

window.onload = emailValidation;
