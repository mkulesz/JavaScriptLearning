/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
	"name": "Michał Kulesz",
	"role": "Konsultant SAP",
	"contacts": ["tel. 123456789"],
	"welcomeMessage": "Witam",
	"skills": ["C", "C#.NET", "JAVA", "ABAP", "SAP", "JavaScript"]
}

var work = { 
	"jobPosition": "Młodszy programista ABAP",
	"employer": "KBJ",
	"yearsWorked": "2 months",
	"city": "Warszawa"
}
var education = {
	"schools" :[
	{
		"name": "Uniwersytet Gdański",
		"years": "3 years",
		"city": "Gdańsk"
	},
	{
		"name": "Uniwersytet Gdański",
		"years": "2 years",
		"city": "Gdańsk"
	}
	]
}
var projects = {
	"projects": [
	{
		"title": "Sample Project 1",
		"dates": "2016",
		"description": "Sample Text",
		"images": [

		]
	},
	[
	{
		"title": "Praktyki",
		"dates": "2014",
		"description": "Konwersja HTML na PDF",
		"images": [

		]
	}
	]
	]
}

 var formattedName = HTMLheaderName.replace("%data%", bio.name);
 var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName); 

 $("#main").append(education.name);
 $("#main").append("<br>", work["jobPosition"]); //<br> new line