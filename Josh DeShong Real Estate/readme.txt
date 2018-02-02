
Hello, my name is Anna Oh.


**ASSUMPTIONS & RESOURCES**
Online resources and third party sources:
https://en.wikipedia.org/wiki/E.164
https://support.twilio.com/hc/en-us/articles/223183008-Formatting-International-Phone-Numbers

According to these resources, E.164 formatting appeared to be add a "+1" in front of
any US phone number and remove any parentheses or dashes.

Example Input: (415)555-2671
Example Output: +14155552671


I assumed that:
- All phone numbers entered and returned are United States phone numbers.
- All phone numbers entered were valid phone numbers as long as they were 10 digits long.
- Only United States phone numbers were valid
    - Valid US area codes were taken from:
      https://www.allareacodes.com/area_code_listings_by_state.htm

**WHY JAVASCRIPT?**
As Josh DeShong Real Estate is looking for a Frontend Software Engineer with experience in Node.js, I used JavaScript for this coding challenge.
Also, JavaScript is the language of HTML and web browsing, and I assume that this position is more heavily focused with joshdeshong.com.


**CODE FUNCTIONALITY**
First, using an array of US Area Codes, the code makes a US Area Code hash that sets its value to true.
The conversion to a hash is done to make lookup constant time.

The code first removes all non-numbers from the input to prepare the phone number for validation.
This process takes O(n) time and O(n) space.

After removing all non-numbers from the input, the phone number undergoes validation.
I employed a simple validation that checks for the presence of 10 digits and if the number had a valid US area code.
The valid US area code checker is optional and can be turned off if Josh DeShong Real Estate needs to enter phone numbers
beyond the US. The area code checker can also easily be changed to accomodate other nations by expanding the input array,
and slightly changing the array to hash conversion.

As the instructions asked for conversion to a "normalized United States phone number", I only added a "+1" before the 10 digits to convert to E.164 format.


AUTHOR: Anna Oh
GitHub: https://github.com/AnnaNOh/coding-challenges/tree/master/Josh%20DeShong%20Real%20Estate
LinkedIn: https://www.linkedin.com/in/annanoh/
Profile Website: https://annanoh.github.io/profile-website/
