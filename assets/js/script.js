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

    // Convert input into an array of numbers that can be checked for NaN and length of characters

    const cardNumberString = document.getElementById("form-input3").value
    const cardNumArrayString = cardNumberString.split('');
    const cardNumArray = Array.from(cardNumArrayString, Number);

    console.log(cardNumArray);
    
    if (cardNumArray.length === 16) {

        // Check the number only contains numeric characters

        for (i=0; i < cardNumArray.length; i++) {

            if (isNaN(cardNumArray[i])) {
                alert("Card Number must contain only numerical characters, please re-enter");
            }
        };

        const newArray = cardNumArray;
        const realCardNumber = newArray.join('');
        return realCardNumber;

        

        // Check the sum of the number is not 0

        // for (j=0; j < cardNumArray.length; i++) {
        //     if (cardNumArray[i]++ === 0) {
        //         alert("Card Number should not total to 0, please re-enter");
        //     }

        //     else {
        //         return cardNumArray;
        //     }
        // }

        
        

    }
        else {
            alert("Your card number must be 16 digits long")
        }; 
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