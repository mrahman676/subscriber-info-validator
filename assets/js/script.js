// Functionality for Name Input

function validateName () {
    // Conditions to meet for Names
}

function validateEmail () {

    // const recipientEmail = "mailto:challenge@dn-uk.com"
    // const mailtoLink = 'mailto:' + recipientEmail;

   

    // Open the user's default email client
    
}

function validateCard () {

    // LUHN Algorithm

    // Validate that card number is 16 digits

    const cardNumber = document.getElementById("form-input3").value
    const cardNumArray = cardNumber.split('');
    
    if (cardNumArray.length === 16) {
        return cardNumArray;
    }
    else {
        alert("Your card number must be 16 digits long")
    }

    const realCardNumber = cardNumArray.join('');

    // Input value needs to 16 digits, we can put digits into an array, count the length of array
    // then put it back as a string

    const cardNumberValue = parseFloat(realCardNumber);

    return cardNumberValue;
}
    

function submitButton() {

    // Submit works when conditions are met: validateName() || validateEmail() || 

    if (validateCard()) {

        console.log("card is validated");

        const senderEmail = 'mailto:challenge@dn-uk.com';
        const nameValue = document.getElementById("form-input1").value;
        const emailValue = document.getElementById("form-input2").value;
        const cardNumValue = document.getElementById("form-input3").value;

    window.location.href = senderEmail + 
    `?subject=Subscriber%20Details&body=Name:%20${nameValue}%0D%0AEmail:%20${emailValue}%0D%0ACard%20Number:%20${cardNumValue}&cc=` ;
    return;
    }
    
    

    

}