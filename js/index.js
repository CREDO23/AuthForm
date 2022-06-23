/** @format */

//-------Les inputs-----------

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const mail = document.getElementById('mail');
const password = document.getElementById('password');
const form = document.getElementById('form');

//-------Les messages d`erreurs------------

const emptyFirstName = 'First Name cannot be empty';
const emptyLastName = 'Last Name cannot be empty';
const invallidMail = 'Invalid email adress';
const emptyPassword = 'Password cannot be empty';

// ---------Regex------------

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

// -------Validation des inputs ----

const validation = () => {
	let notEmptyFirstName,
		notEmptyLastName,
		notEmptyPassword,
		validMail = false;

	if (emailRegex.test(mail.children[0].value)) {
		validMail = true;
		mail.classList.remove('error');
		mail.children[1].textContent = '';
	} else {
		mail.classList.add('error');
		mail.children[1].textContent = invallidMail;
	}

	if (firstName.children[0].value != '') {
		notEmptyFirstName = true;
		firstName.classList.remove('error');
		firstName.children[1].textContent = '';
	} else {
		firstName.classList.add('error');
		firstName.children[1].textContent = emptyFirstName;
	}

	if (lastName.children[0].value != '') {
		notEmptyLastName = true;
		lastName.classList.remove('error');
		lastName.children[1].textContent = '';
	} else {
		lastName.classList.add('error');
		lastName.children[1].textContent = emptyLastName;
	}

	if (password.children[0].value != '') {
		notEmptyPassword = true;
		password.classList.remove('error');
		password.children[1].textContent = '';
	} else {
		password.classList.add('error');
		password.children[1].textContent = emptyPassword;
	}

	if (
		notEmptyFirstName &&
		notEmptyLastName &&
		notEmptyPassword &&
		validMail
	) {
		return true;
	} else {
		return false;
	}
};

form.addEventListener('submit', (e) => {
	e.preventDefault();

	if (validation()) {
		firstName.children[0].value = '';
		password.children[0].value = '';
		lastName.children[0].value = '';
		mail.children[0].value = '';
	}
});
