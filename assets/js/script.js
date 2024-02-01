// Functionality for Name Input

function validateName () {

    const name = document.getElementById("form-input1").value

    if (name === '') {
        console.log("Please Enter Your Given Name and Family Name")
        return;
    };

    const nameArray = name.split(' ');
    console.log(nameArray);
    
    if (nameArray.length < 2) {
        console.log("Name is invalid");
        return;
    }

    let firstName = nameArray[0].split('');
    let secondName = nameArray[1].split('');

    // Ensure that users enter a first name with more than 1 character

    if (firstName.length < 2 || secondName.length < 2) {
        console.log("Name is invalid")
    }

    else {
        console.log("Name is valid")
        return name;
    }
    
}

function validateEmail () {

    const email = document.getElementById("form-input2").value

    if (email === '') {
        console.log("Please Enter Your Email")
        return;
    };

    const emailArray = email.split('@');

    console.log(emailArray);

    const other = emailArray[1].split('.');
    
    console.log(other);

    const emailArray2 = [emailArray[0], '@', other[0], '.', other[1]];
    
    console.log(emailArray2);

    if (emailArray2[0] === '' || emailArray2[1] === ''|| emailArray2[2] === '' || emailArray2[3] === '' || emailArray2[4] === '' ) {
        console.log("Email Address is invalid");
    }

    else if (emailArray2[0] === undefined || emailArray2[1] === undefined || emailArray2[2] === undefined || emailArray2[3] === undefined || emailArray2[4] === undefined ) {
        console.log("Email Address is invalid");
    }

    else {
        console.log("Email Address is valid")
        return email;
    }
}

function validateCard () {

    // LUHN Algorithm

    // Validate that card number is 16 digits

    // Convert input into an array of numbers that can be checked for NaN and length of characters

    const errorColour = document.querySelector("#form-input3");

    const cardNumberString = document.getElementById("form-input3").value

    if (cardNumberString === '') {
        console.log("Please Enter Your Card Number")
        return;
    };

    const cardNumArrayString = cardNumberString.split('');
    const cardNumArray = Array.from(cardNumArrayString, Number);

    console.log("Card Number from Form: ", cardNumArray);
    
    if (cardNumArray.length === 16) {

        // Check the number only contains numeric characters

        for (i=0; i < cardNumArray.length; i++) {

            if (isNaN(cardNumArray[i])) {
                console.log("Card Number must contain only numerical characters, please re-enter");
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
            console.log("Card Number should not total to 0, please re-enter");
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
            console.log("Card Number is not Valid")
            return;
            }
        

        const realCardNumber = cardNumArray.join('');
        console.log(realCardNumber);
        return realCardNumber;
    }
        else {
            console.log("Your card number must be 16 digits long")
            
            errorColour.classList.add("invalid");
        }; 

}

function submitButton() {

    if (validateName() && validateEmail() && validateCard()) {

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