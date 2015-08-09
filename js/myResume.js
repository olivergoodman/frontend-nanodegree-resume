console.log("Oliver Goodman, Web Developer");

var bioData, workData, eduData, projectsData;

bioData = {
	"name" : "Oliver Goodman",
	"role" : "Web Developer",
	"welcome_msg" : "Let it happen...",
	"contacts" : {
		"mobile" : "415-385-9868",
		"email" : "olivergoodman2017@u.northwestern.edu",
		"github" : "olivergoodman",
		"location" : "San Francisco, CA / Chicago, IL"
	},
	"picture" : "images/me.jpg",
	"skills" : ["C++", "C#", "JavaScript", "HTML/CSS"]
};

workData = {
	"jobs" : [
		{	
			"employer" : "employer 1",
			"title" : "title1",
			"location" : "loc 1",
			"dates" : "dates1",
			"description" : "descrip1"
		},
		{
			"employer" : "employer 2",
			"title" : "title2",
			"location" : "loc 2",
			"dates" : "dates2",
			"description" : "descrip2"
		}
	]
};

eduData = {
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

projectsData = {
	"projects" : [
		{
			"title" : "title1",
			"dates" : 2015,
			"description" : "this describes my project",
			"images" : ["url1, url2, url3"]
		},
		{
			"title" : "title2",
			"dates" : 2015,
			"description" : "this describes my project",
			"images" : ["url1, url2, url3"]
		}
	]
};

//keeping track of click locations(see helper.js)
$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});