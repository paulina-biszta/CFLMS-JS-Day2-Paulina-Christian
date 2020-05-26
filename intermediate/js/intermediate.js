// 1
document.write("Exercise 1:<br><br>")
var student_grades = [
["Martin",76],
["Thomas",85],
["Klaus",65],
["Maria",93],
["David",81]
];

var grades_sum=0;

for (var i = 0; i < student_grades.length; i++) {

	if (student_grades[i][1]<60) {
		document.write(student_grades[i][0] + "\'s Grade with " + student_grades[i][1] + " Points is: F<br>");
	} else if (student_grades[i][1]<70) {
		document.write(student_grades[i][0] + "\'s Grade with " + student_grades[i][1] + " Points is: D<br>");
	} else if (student_grades[i][1]<80) {
		document.write(student_grades[i][0] + "\'s Grade with " + student_grades[i][1] + " Points is: C<br>");
	} else if (student_grades[i][1]<90) {
		document.write(student_grades[i][0] + "\'s Grade with " + student_grades[i][1] + " Points is: B<br>");
	} else {
		document.write(student_grades[i][0] + "\'s Grade with " + student_grades[i][1] + " Points is: A<br>");
	}
	grades_sum+=student_grades[i][1];
}

document.write("<br>The Average grade is: " + (grades_sum/student_grades.length));


// 2
document.write("<br><br><br><br>Exercise 2:<br><br>");
var msg;

for (var i = 1; i <= 100; i++) {
	msg=i;
	if (i%3 == 0) {
		msg="Fizz";
	}
	if (i%5 == 0) {
		msg="Buzz";
	}
	if (i%15 == 0) {
		msg="FizzBuzz";
	}


	document.write(msg+"<br>");

	}

// 3
document.write("<br><br><br><br>Exercise 3:<br><br>");

for (var i = 1; i <= 6; i++) {
		for (var j = 1 ; j <= i; j++) {
			document.write("*");
		} 
		document.write("<br>");
	}