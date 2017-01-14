/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var awesomeThoughts = "I am Mike and I am AWESOME!";

 //console.log(awesomeThoughts);

 var funthoughts = awesomeThoughts.replace("AWESOME", "FUN");

 //$("#main").append(funthoughts);

 var name = "Michał Kulesz";
 var role = "Konsultant SAP";

 var formattedName = HTMLheaderName.replace("%data%", name);
 var formattedRole = HTMLheaderRole.replace("%data%", role);

 
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
