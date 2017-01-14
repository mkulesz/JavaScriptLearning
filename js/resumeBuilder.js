/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var awesomeThoughts = "I am Mike and I am AWESOME!";

 //console.log(awesomeThoughts);

 var funthoughts = awesomeThoughts.replace("AWESOME", "FUN");

 //$("#main").append(funthoughts);


 /*
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
*/
var skills = ["ABAP", "programming", "Java"];
var contactInfo = "tel. 123456789";
var pictureURL = "images/fry.jpg";
var welcomeMessage = "Witam";

var bio = {
	"name" : "Michał Kulesz",
	"role" : "Konsultant SAP",
	"contacts" : {
		"mobile" : contactInfo
	} ,
	"welcomeMessage" : welcomeMessage,
	"skills" : skills ,
	"biopic" : pictureURL
};

var work = { };
	work.jobPosition = "Młodszy programista ABAP";
	work.employer = "KBJ";
	work.yearsWorked = "2 months";
	work.city = "Warszawa";

var education = { };
	education["name"] = "Uniwersytet Gdański";
	education["years"] = "5 years";
	education["city"] = "Gdańsk";

 var formattedName = HTMLheaderName.replace("%data%", bio.name);
 var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);

 

 $("#main").append(education.name);
 $("#main").append(work["jobPosition"]);