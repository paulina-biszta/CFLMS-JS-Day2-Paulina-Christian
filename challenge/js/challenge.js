// [  0 ,   1  ,   2  ,   3   ]
// [Bill, Value, Stash, toGive]

var matrix = [
["Hundreds",100,10,0],
["Fifties",50,10,0],
["Twenties",20,10,0],
["Tens",10,10,0]
];

var withdraw = 340;
var rest = withdraw;

for (var i = 0; i < matrix.length; i++) {
	matrix[i][3]=Math.floor(rest/matrix[i][1]);
	rest%=matrix[i][1];
	if (matrix[i][2] < matrix[i][3]) {
		rest+=(matrix[i][3]-matrix[i][2])*matrix[i][1];
		matrix[i][3]=matrix[i][2];
	}
}

document.write("Amout you want to withdraw: "+withdraw);
document.write("<br>You get: "+matrix[0][3]+" Hundreds, "+matrix[1][3]+" Fifties, "+matrix[2][3]+" Twenties, "+matrix[3][3]+" Tens.")
document.write("<br>Could not be withdrawn: "+rest);