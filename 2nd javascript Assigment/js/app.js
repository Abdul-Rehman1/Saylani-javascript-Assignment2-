/* 1.Declare an empty array using JS literal notation to store
student names in future. */

var studentName=[];

/*2. Declare an empty array using JS object notation to store
student names in future. */

b = new Array();

/*3. Declare and initialize a strings array. */
var stringArray=["ar","sa"];

/*4. Declare and initialize a numbers array.*/

var numArray=[1,2,3,4];

/*5. Declare and initialize a boolean array.*/

var boolArray=[true,false];

/*6. Declare and initialize a mixed array.*/

var boolArray=[true,1,false,"a"];

/*7. Declare and Initialize an array and store available mobile
networks in Pakistan. */

var Netwoks=["Zong","Ufone"]; //these are  only two available mobile networks in Pakistan

/*8. Declare and Initialize an array and store available education
qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS,
M. Phil., PhD). Show the listed qualifications in your browser
like: */

var Qualifications=["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h2>Available Education Qualifications in Pakistan</h2><br> "+Qualifications);

/*9. Declare and initialize an empty array to store top movies of
2015. Add movies one by one in an array. Display the elements
& length of array in your browser. (Use array’s length method)*/

var Movies=[];
Movies.push("Avengers:Age of Ultron")   
Movies.push("Spectre")
Movies.push("Jurassic World")
Movies.push("Inside Out")
document.write("<h1>Movies</h1><br>"+Movies[0]+"<br>"+Movies[1]+"<br>"+Movies[2]+"<br>"+Movies[3]+"<br>");
document.write("<h4>length of array is "+Movies.length+"</h4>");

/*10. Declare and Initialize an array with your favorite cars. Show
a. First index of the array
b. Car at first index of the array
c. Last index of the array
d. Car at last index of the array */

var Cars=[];
Cars.push("Geely")   
Cars.push("Audi")
Cars.push("Volvo")
Cars.push("Lamborghiny")
document.write("<h1>Favorite Cars</h1><br>"+Cars+"<br>");
document.write("First index of Array:"+"0");
document.write("<br>Car at first index of the array:"+Cars[0]);
var c="";
document.write("<br>Last index of the array:"+(c=Cars.length-1));
document.write("<br>Car at last index of the array:"+Cars[c]);

/*11. Write a program to store 3 student names in an array. Take
another array to store score of these three students. Assume
that total marks are 500 for each student, display the scores &
percentages of students like:*/

var studentNames=[];
var studentScores=[];
total=500;
document.write("<h1>Student Percentage</h1>")
for(i=0;i<3;i++)
{
    studentNames[i]=prompt("Enter student "+(i+1)+" name");
    studentScores[i]=prompt("Enter student "+(i+1)+" score(0-500)");
    if(studentScores[i]<0||studentScores[i]>500)
    {
        alert("Error:score must be (0 to 500)");
        i=i-1;
    }
}
for(i=0;i<3;i++)
{
    document.write("<br>Score of "+studentNames[i]+" is "+studentScores[i]+" and Percentge is "+(studentScores[i]*100)/total+"%");
}
 /*12. Initialize an array with color names. Display the array
elements in your browser.
    a. Ask the user what color he/she wants to add to the
    beginning & add that color to the beginning of the array.
    Display the updated array in your browser.
    b. Ask the user what color he/she wants to add to the end &
    add that color to the end of the array. Display the updated
    array in your browser.
    c. Add two more color to the beginning of the array. Display
    the updated array in your browser.
    d. Delete the first color in the array. Display the updated
    array in your browser.
    e. Delete the last color in the array. Display the updated
    array in your browser.
    f. Ask the user at which index he/she wants to add a color &
    color name. Then add the color to desired position/index.
    . Display the updated array in your browser.
    g. Ask the user at which index he/she wants to delete
    color(s) & how many colors he/she wants to delete. Then
    remove the same number of color(s) from user-defined
    position/index. . Display the updated array in your
    browser.
*/
document.write("<h1>Colors</h1>")
var Colors=["Red","Green","Pink","Yellow"];
document.write(Colors);
//Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.
var Prompt=prompt("Enter color you want to add to the beginning of the array.");
Colors.unshift(Prompt);
document.write("<br>"+Colors);
//Ask the user what color he/she wants to add to the end & add that color to the end of the array.
var Prompt=prompt("Enter color you want to add to the end of the array.");
Colors.push(Prompt);
document.write("<br>"+Colors);
//Add two more color to the beginning of the array. Display the updated array in your browser.
Colors.unshift("blue","white");
document.write("<br /> Blue and white added at the beginning "+Colors);
//Delete the first color in the array. Display the updated array in your browser.
Colors.shift();
document.write("<br /> First color Deleted "+Colors);
//Delete the last color in the array. Display the updated array in your browser.
Colors.pop();
document.write("<br /> Last color Deleted "+Colors);
//Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index.Display the updated array in your browser.
var Color=prompt("Enter a color to add");
var selectedIndex=+prompt("Enter the index at which the color to be added");
Colors.splice(selectedIndex,0,Color);
document.write("<br /> After added "+Color+" The list is now "+Colors);
// Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-definedposition/index. . Display the updated array in your browser.
var selectedIndex=+prompt("Enter the index from you want to delete colors");
var noOfColorsDelete=+prompt("How many colors you want to delete?");
Colors.splice(selectedIndex,noOfColorsDelete);
document.write("<br /> After deleted the list is now "+Colors);

/*13. Write a program to store student scores in an array & sort
the array in ascending order using Array’s sort method.*/
document.write("<h1> Score Sorting</h1>");
var Stuscore=[320,120,440,250,188];
document.write("<br /> Before Sort "+Stuscore);
document.write("<br /> After Sort "+Stuscore.sort());

/*14. Write a program to sort the below mentioned array:
var fruits = [“strawberry”, “apple”, “orange”, “banana”];*/
document.write("<h1> String Sorting</h1>");
var fruits = ["strawberry", "apple", "orange", "banana"];
document.write("<br /> Before Sort "+fruits);
document.write("<br /> After Sort "+fruits.sort());

/*15. Write a program to initialize an array with city names. Copy
3 array elements from cities array to selectedCities array.*/
document.write("<h1> Cities Array</h1>");
var Cities = ["Lahore", "Karachi", "Islamabad", "Queta","Peshawar"];
var selectedCities=[];
selectedCities[0]=Cities[1];
selectedCities[1]=Cities[3];
selectedCities[2]=Cities[2];
document.write("<br /> City list "+Cities);
document.write("<br /> Selected City list "+selectedCities);

/*16. Write a program to create a single string from the below
mentioned array:
var arr = [“This ”, “ is ”, “ my ”, “ cat”];
(Use array’s join method) */
document.write("<h1> Array join</h1>");
var arr = ["This" ,  "is" ,  "my" ,  "cat"];
document.write("<br /> Array: "+arr);
document.write("<br /> String: "+arr.join(" "));

/*17. Create a new array. Store values one by one in such a way
that you can access the values in the order in which they were
stored. (FIFO-First In First Out) */
document.write("<h1>FIFO-First In First Out</h1>");
var arr = [];
arr.push("Keyboard");
arr.push("Mouse");
arr.push("Monitor");
arr.push("Printer");
document.write("<br /> Devices: "+arr);
document.write("<br /> <h4>Out</h4> "+"<br />"+arr.shift()+"<br />"+arr.shift()+"<br />"+arr.shift()+"<br />"+arr.shift());

/*18. Create a new array. Store values one by one in such a way
that you can access the values in reverse order. (Last In-First
Out) */
document.write("<h1>Last In-First Out</h1>");
var arr = [];
arr.push("Keyboard");
arr.push("Mouse");
arr.push("Monitor");
arr.push("Printer");
document.write("<br /> Devices: "+arr);
document.write("<br /> <h4>Out</h4> "+"<br />"+arr.pop()+"<br />"+arr.pop()+"<br />"+arr.pop()+"<br />"+arr.pop());

/*19. Write a program to store phone manufacturers (Apple,
Samsung, Motorola, Nokia, Sony & Haier) in an array. Display
the following dropdown/select menu in your browser using
document.write() method: */
document.write("<h1>dropdown</h1>");
var Mobiles = ["Haier","Sony","Nokia","Samsung","Apple","Huawei"];
document.write("<br /> <select>"
+"<option>"+Mobiles[0]+"</option>"
+"<option>"+Mobiles[1]+"</option>"
+"<option>"+Mobiles[2]+"</option>"
+"<option>"+Mobiles[3]+"</option>"
+"<option>"+Mobiles[4]+"</option>"
+"<option>"+Mobiles[5]+"</option>"
+"</select>"
);

/*20. Declare and initialize an empty multidimensional array.
(Array of arrays)*/
document.write("<h1>Multidimensional Array</h1>");
var items = [
  [1, 2],
  [3, 4],
  [5, 6]
];
document.write("<br />  ["
 +"<br /> [1, 2],"
 +"<br /> [3, 4],"
 +"<br /> [5, 6]"
 +"<br />];"
);
document.write("<br /> item[0][0]: "+items[0][0]);
document.write("<br /> item[0][1]: "+items[0][1]);
document.write("<br /> item[1][0]: "+items[1][0]);
document.write("<br /> item[1][1]: "+items[1][1]);
document.write("<br /> item[2][0]: "+items[2][0]);
document.write("<br /> item[2][1]: "+items[2][1]);

/*21. Declare and initialize a multidimensional array representing
the following matrix: */
document.write("<h1>Multidimensional Array</h1>");
var items = [
  [0,1,2,3],
  [1,0,1,2],
  [2,1,0,1]
];
document.write("<br />  ["
 +"<br /> [0,1,2,3],"
 +"<br /> [1,0,1,2],"
 +"<br /> [2,1,0,1]"
 +"<br />];"
);
document.write("<br /> item[0][0]: "+items[0][0]);
document.write("<br /> item[0][1]: "+items[0][1]);
document.write("<br /> item[0][2]: "+items[0][2]);
document.write("<br /> item[0][3]: "+items[0][3]);
document.write("<br /> item[1][0]: "+items[1][0]);
document.write("<br /> item[1][1]: "+items[1][1]);
document.write("<br /> item[1][2]: "+items[1][2]);
document.write("<br /> item[1][3]: "+items[1][3]);
document.write("<br /> item[2][0]: "+items[2][0]);
document.write("<br /> item[2][1]: "+items[2][1]);
document.write("<br /> item[2][2]: "+items[2][2]);
document.write("<br /> item[2][3]: "+items[2][3]);
