// I need to be able to insert my name into a form (First Name & Family Name)

// Create a form in html
// Form Title should be to the left of form entry
// Create a placeholder in form with 'Enter Your Name'
// Name should enable user to enter first name AND surname
// Ensure user can only use:
// standard upper / lower case letters
// and permitted characters: !#$%&'*+-/=?^_`{|}~ should be allowed in the name field.
// Ensure user is alerted with error if names do not exist
// Names should have more than 1 letter for each name
// Names should always have two names (first and surname)
// Double barrels are acceptable as they are one word

// I need to be able to insert my email into the form

// Create a form in html
// Form Title should be to the left of form entry
// Create a placeholder in form with 'Enter Your Email'
// Name should enable user to enter email address
// Ensure user cannot input spaces in this text
// Ensure user is alerted with error if email does not exist
// Email must meet format: test@abc.com
// any missing parts of email should be rejected i.e test.com, test@abc, @abc.com, test@.com

// I need to be able to insert my credit/debit card into the form 

// Create a form in html
// Form Title should be to the left of form entry
// Create a placeholder in form with 'Enter a proxy credit card number'
// Name should enable user to enter only numbers
// Ensure user cannot input spaces in this text
// Ensure user is alerted with error if card number does not exist
// Card number must use the LUHN Algorithm
// numbers must have 16 numbers, nothing more, nothing less.
// Stop user from exceeding 16 numbers upon input, and throw error if too low
// One number must be greater than 0

// When the submit button is clicked:
// if all conditions are valid, an email from given email must be sent to challenge@dn-uk.com
// intervals in form must be cleared to allow user to resubmit
// No action ie email is sent when error persists in form in either name, email of card number


// CSS

// For Page Consistency use:
// Calibri font and text size 11
// centred horizontally and vertically
// Form: Green RGB 137,200,46 Hex 89c82e 
// Text: Grey RGB 60,60,59 Hex 3c3c3b 
// Submit Button: Pink RGB 231,0,100 Hex 700064

// Fields in error should be highlighted in Pink RGB 231,0,100 Hex 700064

// I need the application to reduce the load on the back-end server, 
// validation should be done on page.
// I.e. JavaScript event onblur() for Name and Credit Card number
// And HTML field type or Regex for Email.



