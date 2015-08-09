var awesomeThoughts = "I am Olly and I am AWESOME";
console.log(awesomeThoughts); //check the console

var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
console.log(funThoughts); //printed on the main part of page, added to <div id="main"> in html file

//create formatted versions of header name and role, using helper.js
/*
var formattedName = HTMLheaderName.replace("%data%", "Oliver Goodman");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
$("#header").append(formattedName);
$("#header").append(formattedRole); //NOTE: "prepend(NAME)" puts NAME at beginning rather than end */

//appending on array of skills
//var skills = ["C++", "C#", "JavaScript", "HTML/CSS"];
//$("#main").append(skills.join(" ")); //using the join(char) function, separates each element in array with char

//bio object using object literal notation
var bio = {
	"name" : "Oliver Goodman",
	"role" : "Web Developer",
	"contact_info" : {
		"mobile" : "415-385-9868",
		"email" : "olivergoodman2017@u.northwestern.edu",
		"github" : "olivergoodman",
		"location" : "San Francisco, CA / Chicago, IL"
	},
	"picture_url" : "images/me.jpg",
	"welcome_msg" : "Thank you for visiting! Please contact me!",
	"skills" : ["C++", "C#", "JavaScript", "HTML/CSS"]
};
/* displaying bio? work on later
// REPLACE THE HELPER VARS WITH NEW FORMATTED ONES
var name = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(name);
var role = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(role);
var picture = HTMLbioPic.replace("%data%", bio.picture_url);
$("#header").append(picture);
var welcome = HTMLWelcomeMsg.replace("%data%", bio.welcome_msg);
$("#header").append(welcome);
var contact = HTMLcontactGeneric.replace("%data%", bio.contact_info);
$("#header").append(contact);
var mobile = HTMLmobile.replace("%data%", bio.mobile);
$("#header").append(bio.contact_info.mobile);
*/

//work object using dot notation
var work = {};
work.position = "Operations Intern";
work.employer = "Comcast Sportsnet Bay Area";
work.yearsWorked = "June 2014 - September 2014";
work.city = "San Francisco, CA";

/*education object using bracket notation
var education = {};
education["name"] = "Northwestern University";
education["yearsAttended"] = "2013 - Present";
education["location"] = "Evanston, IL";
*/

//display work and education
//$("#main").append(work["position"]);	//can use either notation to access object's properties
//$("#main").append(education.name);

//JSON = JavaScript Object notation
var education = {
	"schools" : [
		{
			"name" : "Northwestern University",
			"city" : "Evanston IL",
			"years" : "2013-Present",
			"degee" : "Bachelor of Arts",
			"major" : "Computer Science"
		},
		{
			"name" : "San Francisco University High School",
			"city" : "San Francisco, CA",
			"years" : "2009-2013"
		}
	],
	"online_courses" : [
		{
			"title" : "JavaScript Basics",
			"company" : "Udacity"
		},
		{
			"title" : "HTML/CSS",
			"company" : "Udacity"
		}
	]
};