// Instructions Given
// Write a function that accepts a user input phone number string type and returns a normalized United States phone number string type in E.164 format.
// Return null (or an equivalent value) if the user input phone number is invalid.
// * Use your preferred general purpose programming language.
// * Write a readme.txt file that describes the code's functionality and why you decided on your solution.
// * There is no time limit. Out of respect for your time, you can document the remainder of your solution if this problem takes more than 1 hour.
// * Document any online resources, third party libraries, and assumptions made when coding your solution.
// * Provide your solution as source files or a compressed folder and email to careers@joshdeshong.com along with a copy of your resume.



// OPTIONAL
// Making a US Area Code Hash to check if phone number is valid
// Can be expanded to include other nation's area codes and to adjust
// E164 conversion appropriately
const usAreaCodeArray = [
  205, 251, 256, 334, 938, 907, 684, 480, 520, 602, 623, 928, 479,
  501, 870, 209, 213, 310, 323, 408, 415, 424, 442, 510, 530, 559,
  562, 619, 626, 628, 650, 657, 661, 669, 707, 714, 747, 760, 805,
  818, 831, 858, 909, 916, 925, 949, 951, 303, 719, 720, 970, 203,
  475, 860, 959, 302, 239, 305, 321, 352, 386, 407, 561, 727, 754,
  772, 786, 813, 850, 863, 904, 941, 954, 229, 404, 470, 478, 678,
  706, 762, 770, 912, 671, 808, 208, 217, 224, 309, 312, 331, 618,
  630, 708, 773, 779, 815, 847, 872, 219, 260, 317, 463, 574, 765,
  812, 930, 319, 515, 563, 641, 712, 316, 620, 785, 913, 270, 364,
  502, 606, 859, 225, 318, 337, 504, 985, 207, 240, 301, 410, 443,
  667, 339, 351, 413, 508, 617, 774, 781, 857, 978, 231, 248, 269,
  313, 517, 586, 616, 734, 810, 906, 947, 989, 218, 320, 507, 612,
  651, 763, 952, 228, 601, 662, 769, 314, 417, 573, 636, 660, 816,
  406, 308, 402, 531, 702, 725, 775, 603, 201, 551, 609, 732, 848,
  856, 862, 908, 973, 505, 575, 212, 315, 332, 347, 516, 518, 585,
  607, 631, 646, 680, 716, 718, 845, 914, 917, 929, 934, 252, 336,
  704, 743, 828, 910, 919, 980, 984, 701, 670, 216, 220, 234, 330,
  380, 419, 440, 513, 567, 614, 740, 937, 405, 539, 580, 918, 458,
  503, 541, 971, 215, 267, 272, 412, 484, 570, 610, 717, 724, 814,
  878, 787, 939, 401, 803, 843, 854, 864, 605, 423, 615, 629, 731,
  865, 901, 931, 210, 214, 254, 281, 325, 346, 361, 409, 430, 432,
  469, 512, 682, 713, 737, 806, 817, 830, 832, 903, 915, 936, 940,
  956, 972, 979, 385, 435, 801, 802, 340, 276, 434, 540, 571, 703,
  757, 804, 206, 253, 360, 425, 509, 202, 304, 681, 262, 414, 534,
  608, 715, 920, 307
];
const usAreaCodeHash = {};
for (var i = 0; i < usAreaCodeArray.length; i++) {
  usAreaCodeHash[usAreaCodeArray[i]] = true;
}


var phoneE164Conversion = function(phoneNum) {
  // remove all non-numbers from the input
  let removeIdx = 0;
  while (removeIdx < phoneNum.length){
    if ( isNaN(Number(phoneNum[removeIdx])) || phoneNum[removeIdx] === " " ){
      phoneNum = phoneNum.slice(0, removeIdx) + phoneNum.slice(removeIdx+1);
      removeIdx -= 1;
    }
    removeIdx += 1;
  }

  // VADLIDATION
  // check if phone number has 10 digits
  if (phoneNum.length !== 10){
    return null;
  }
  // OPTIONAL: check if phone number has an US area code
  if (usAreaCodeHash[phoneNum.slice(0,3)] !== true){
    return null;
  }

  // Add +1 in front of the phone number for United States E164
  phoneNum = "+1" + phoneNum;
  return phoneNum;
};


// BASIC TESTS
// console.log(phoneE164Conversion("(123) 456-771"));
// console.log(phoneE164Conversion("(123) 456-7717"));
// console.log(phoneE164Conversion("(907) 456-7717"));
