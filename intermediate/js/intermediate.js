console.log("Ok");
var student_grades = [
["Martin",76],
["Thomas",85],
["Klaus",65],
["Maria",93],
["David",81]
];
console.log(student_grades[1][1]);


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

}