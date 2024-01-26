
// Step-by-Step Process to Build a Form with Specific Requirements:

// 1. Form Design:

// Create an HTML document.
// Establish a form structure with a title positioned to the left of each form entry.
// Utilize placeholders for clarity, such as 'Enter Your Name.'

// 2. Name Input:

// Add input fields for both first names and surnames.
// Implement restrictions for input: standard upper/lowercase letters and permitted characters: !#$%&'*+-/=?^_`{|}~.
// Set up error alerts for missing names, names with fewer than two letters, or names without both first and surnames.
// Allow double barrels as one word.

// 3. Email Input:

// Integrate a section for email input with a placeholder like 'Enter Your Email.'
// Restrict input to prevent spaces.
// Establish error alerts for a missing or incorrectly formatted email (e.g., test@abc.com) or incomplete email addresses.

// 4. Credit/Debit Card Input:

// Include a section for credit/debit card input with a placeholder like 'Enter a proxy credit card number.'
// Allow input of only numbers.
// Restrict input to prevent spaces.
// Alert users with an error if the card number is missing, doesn't follow the LUHN Algorithm, or is not exactly 16 numbers.
// Throw an error if the user inputs too few or too many numbers.
// Ensure at least one number is greater than 0.

// 5. Submit Button:

// Implement validation checks for all conditions before allowing submission.
// If conditions are valid, configure the form to send an email from the provided email to challenge@dn-uk.com.
// Clear intervals in the form to allow users to resubmit.
// No action (e.g., email sending) should occur if errors persist in the form (name, email, or card number).

// 6. CSS Styling:

// Maintain page consistency by using the Calibri font and text size 11.
// Center the page both horizontally and vertically.
// Assign a green color (RGB 137, 200, 46; Hex 89c82e) to the form, a grey color (RGB 60, 60, 59; Hex 3c3c3b) to text, and a pink color (RGB 231, 0, 100; Hex 700064) to the submit button.
// Highlight fields in error with a pink color (RGB 231, 0, 100; Hex 700064).

// 7. Page Optimization:

// Implement JavaScript events onblur() for name and credit card number fields.
// Use HTML field types or Regex for email validation.
// Conduct validation on the page to reduce the load on the back-end server.