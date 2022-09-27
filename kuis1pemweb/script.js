function validateEmail()
{
	let inputEmail = document.getElementById('inputEmail').value;
	let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(mailformat.test(inputEmail))
	{
		document.getElementById('inputEmailPrompt').style.color="green";
		document.getElementById('inputEmailPrompt').innerHTML="Valid";
		return true;
	}
	else
	{
		document.getElementById('inputEmailPrompt').style.color="red";
		document.getElementById('inputEmailPrompt').innerHTML="Please input a valid email!";
		return false;
	}
}

function validatePhoneNumber()
{
	let inputPhoneNumber = document.getElementById('inputPhoneNumber').value;
	let phoneNumberFormat = /\+?([ -]?\d+)+|\(\d+\)([ -]\d+)/;
	if(phoneNumberFormat.test(inputPhoneNumber))
	{
		document.getElementById('inputPhoneNumberPrompt').style.color="green";
		document.getElementById('inputPhoneNumberPrompt').innerHTML="Valid";
		return true;
	}
	else
	{
		document.getElementById('inputPhoneNumberPrompt').style.color="red";
		document.getElementById('inputPhoneNumberPrompt').innerHTML="Please input a valid phone number!";
		return false;
	}
}