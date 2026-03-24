const helloBtn = document.getElementById("helloBtn");
const taskText = document.getElementById("taskText");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

if (helloBtn && taskText) {
  helloBtn.addEventListener("click", () => {
    const now = new Date();
    taskText.textContent = `Well done!! You just ran JavaScript at ${now.toLocaleTimeString()}. Next: edit a card title in HTML and refresh.`;
  });
}

function setFieldError(input, errorElement, message) {
  if (!input || !errorElement) {
    return;
  }

  errorElement.textContent = message;
  input.setAttribute("aria-invalid", message ? "true" : "false");
}

function validateName() {
  if (!nameInput || !nameError) {
    return true;
  }

  const value = nameInput.value.trim();
  if (value.length < 2) {
    setFieldError(nameInput, nameError, "Please enter at least 2 characters.");
    return false;
  }

  setFieldError(nameInput, nameError, "");
  return true;
}

function validateEmail() {
  if (!emailInput || !emailError) {
    return true;
  }

  const value = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(value)) {
    setFieldError(emailInput, emailError, "Please enter a valid email address.");
    return false;
  }

  setFieldError(emailInput, emailError, "");
  return true;
}

function validateMessage() {
  if (!messageInput || !messageError) {
    return true;
  }

  const value = messageInput.value.trim();
  if (value.length < 10) {
    setFieldError(messageInput, messageError, "Message must be at least 10 characters.");
    return false;
  }

  setFieldError(messageInput, messageError, "");
  return true;
}

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const validName = validateName();
    const validEmail = validateEmail();
    const validMessage = validateMessage();
    const isValid = validName && validEmail && validMessage;

    if (!isValid) {
      formStatus.textContent = "Please fix the highlighted fields and try again.";
      formStatus.className = "form-status error";
      return;
    }

    formStatus.textContent = "Success. Validation passed and your demo message is ready.";
    formStatus.className = "form-status success";
    contactForm.reset();

    setFieldError(nameInput, nameError, "");
    setFieldError(emailInput, emailError, "");
    setFieldError(messageInput, messageError, "");
  });

  if (nameInput) {
    nameInput.addEventListener("blur", validateName);
  }
  if (emailInput) {
    emailInput.addEventListener("blur", validateEmail);
  }
  if (messageInput) {
    messageInput.addEventListener("blur", validateMessage);
  }
}
