// 1

var current_temperatue = Math.round(Math.random()*30)-5;
document.write("<div style='text-align: center; font-size: 2em'> Current Temperature is " + current_temperatue + "C<br>");


if (current_temperatue <= 10) {
	document.write("The weather is cold<br>");
	document.write("<img src='https://cdn.icon-icons.com/icons2/2165/PNG/512/snowman_architecture_and_city_winter_cold_weather_icon_133101.png'></div>")
} else if (current_temperatue > 32) {
	document.write("The weather is hot<br>");
	document.write("<img src='https://cdn.icon-icons.com/icons2/2106/PNG/512/hot_weather_icon_129725.png'></div>")
} else {
	document.write("The weather is moderate<br>");
	document.write("<img src='https://cdn.icon-icons.com/icons2/37/PNG/512/sun_weather_3497.png'></div>")
	
}

// 2

//document.write("<br> Maximum is: " + Math.max(1, 7, -3, 9));

