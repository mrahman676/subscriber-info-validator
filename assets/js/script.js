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

    console.log("Card Number from Form: ", cardNumArray);
    
    if (cardNumArray.length === 16) {

        // Check the number only contains numeric characters

        for (i=0; i < cardNumArray.length; i++) {

            if (isNaN(cardNumArray[i])) {
                alert("Card Number must contain only numerical characters, please re-enter");
                return;
            };
        };

        console.log("No NaN within Card Number");

        // Check the sum of the number is not 0

        let total = 0;

        for (j=0; j < cardNumArray.length; j++) {
            
            total = total + cardNumArray[j];
        };

        console.log("Total of Card Numbers: ", total)

        if (total === 0) {
            alert("Card Number should not total to 0, please re-enter");
            console.log("The total should not be: ", total);
            return; };

        // New array for only single digits
        
        const singleArray = [];

        for (k=cardNumArray.length - 1; k > 0; k -= 2) {

            singleArray.push(cardNumArray[k]);
        }

        console.log("New Array with only single digits: ", singleArray);

        // Starting from the rightmost digit, double the value of every second digit

        let doubleArray = [];
        let double;

        for (l=cardNumArray.length -2; l >= 0; l -= 2) {

            double = cardNumArray[l]*2;
            doubleArray.push(double);
        }

        console.log("New Array with only double digits: ", doubleArray);

        // const splitArray = [];

        //  If doubling the number results in a two-digit number greater than 9, then add the digits of the product.
        for (m=0; m < doubleArray.length; m++) {
            if (doubleArray[m] > 9) {
                const split = doubleArray[m].toString().split('').map(Number);

                console.log("Array of Split Numbers: ", split)

                let totalSplit = split[0] + split[1];
                console.log("Split Number Added: ", totalSplit);
                doubleArray[m] = totalSplit;
            }
        }

        console.log("New Array, splitting and combining product of double digits: ", doubleArray);

        const newSingleArray = [];

        for (n=0; n<singleArray.length; n++) {
            newSingleArray.push(singleArray[n]);
        }

        console.log(newSingleArray);

        for (o=0; o<doubleArray.length; o++) {
            newSingleArray.push(doubleArray[o]);
        }

        console.log("New Array of Single Digits: ", newSingleArray);

        let singleTotal = 0;

        for (p=0; p<newSingleArray.length; p++) {
            singleTotal = newSingleArray[p] + singleTotal;
        }

        console.log("Total of All Single Digits: ", singleTotal);

        if (singleTotal % 10 === 0) {

            console.log("Card Number is Valid")

        }

            else {
            alert("Card Number is not Valid")
            return;
            }
        

        const realCardNumber = cardNumArray.join('');
        console.log(realCardNumber);
        return (realCardNumber);
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