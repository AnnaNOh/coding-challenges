// Instructions
// Write a function that accepts a user input phone number string type and returns a normalized United States phone number string type in E.164 format.
// Return null (or an equivalent value) if the user input phone number is invalid.
// * Use your preferred general purpose programming language.
// * Write a readme.txt file that describes the code's functionality and why you decided on your solution.
// * There is no time limit. Out of respect for your time, you can document the remainder of your solution if this problem takes more than 1 hour.
// * Document any online resources, third party libraries, and assumptions made when coding your solution.
// * Provide your solution as source files or a compressed folder and email to careers@joshdeshong.com along with a copy of your resume.


// ASSUMPTIONS & RESOURCES
// Online resources and third party sources:
// https://en.wikipedia.org/wiki/E.164
// https://support.twilio.com/hc/en-us/articles/223183008-Formatting-International-Phone-Numbers
//
// According to these resources, E.164 formatting appeared to be add a "+1" in front of
// any US phone number and remove any parentheses or dashes.
//
// Example Input: (415)555-2671
// Example Output: +14155552671
//
//
// I assumed that:
// - All phone numbers entered and returned are United States phone numbers.
//   - Code can be improved to check the area code before conversion into a normalzied US phone number
// - All phone numbers entered were valid phone numbers as long as they were 10 digits long.
//
//
// WHY JAVASCRIPT?
// As Josh DeShong Real Estate is looking for a Frontend Software Engineer with experience in Node.js, I used JavaScript for this coding challenge.
// Also, JavaScript is the language of HTML and web browsing, and I assume that this position is more heavily focused with joshdeshong.com.
