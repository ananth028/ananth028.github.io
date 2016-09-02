var bio = {
    "name": "Anantha Kumar",
    "role": "Student, VIT",
    "contacts": {
        "mobile": "+91-9688316688",
        "email": "ananthakumar028@gmail.com",
        "github": "https://github.com/anantha028",
        "location": "Vellore, TN"
    },
    "biopic": "images/me.jpg",
    "welcomeMessage": "Enthusiastic Programmer and a Relentless Learner",
    "skills": ["HTML", "CSS", "Bootstrap", "Javascript", "jQuery"]
};

/* var work = {
    "jobs": [{
        "employer": "Wipro Technologies",
        "title": "Project Engineer",
        "location": "Chennai, India",
        "dates": "December 2013 - Present",
        "description": "Role involves installation and configuration of Windows Servers (Windows Server 2003 and Windows Server 2008 R2)" +
            " and configuring DNS, DHCP, GPOs and Active Directory changes and implementaions as needed."
    }]
}; */

var education = {
    "schools": [{
        "name": "Vellore Institute of Technology",
        "dates": "2012 - 2017",
        "location": "Vellore, TN",
        "degree": "MS Software Engineering (PG Integrated)",
        "majors": ["Software Engineering"],
        "url": "http://www.vit.ac.in/"
    }],
    "onlineCourses": [{
            "school": "Udacity",
            "title": "Intro to HTML and CSS",
            "date": "January 2016",
            "url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
        },

        {
            "school": "Udacity",
            "title": "Javascript Basics",
            "date": "March 2016",
            "url": "https://www.udacity.com/course/javascript-basics--ud804"
        },

        {
            "school": "Udacity",
            "title": "Object-Oriented JavaScript",
            "date": "May 2016",
            "url": "https://www.udacity.com/course/object-oriented-javascript--ud015"
        },

        {
            "school": "FreeCodeCamp",
            "title": "Front-End Development",
            "date": "June 2016",
            "url": "https://www.freecodecamp.com/ananth028"
        }
    ]
};

var projects = {
    "projects": [{
        "title": "Neighborhood Map",
        "dates": "July 2016",
        "description": "Single-page, responsive application built with Knockout.js framework and hosted on GitHub Pages. Developed a full-page map that loads with 15 popular hangout spots in Chennai, TN. User can view recent pictures taken at each location (retrieved by AJAX request to Flickr API).",
        "images": ["images/apj1.jpg", "images/apj2.jpg"],
        "url": "https://github.com/ananth028/Chennai-Hangouts---Google-Maps-API"
    }, {
        "title": "Online Portfolio",
        "dates": "May 2016",
        "description": "Single-page, responsive website built using HTML, CSS, JavaScript and jQuery and hosted on GitHub Pages. Developed an online resume with details of my education, projects and skills. Used jQuery and JavaScript to update the DOM dynamically and used Bootstrap media queries to achieve full responsiveness.",
        "images": ["images/fe21.jpg", "images/fe22.jpg"],
        "url": "#"
    }]
};


bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

    var formattedContactInfo = [];
    formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
    formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
    //formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));
    formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));


    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMsg);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        for (i in bio.skills) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
        }
    }

    for (i in formattedContactInfo) {
        $("#topContacts").append(formattedContactInfo[i]);
        $("#footerContacts").append(formattedContactInfo[i]);
    }
};

bio.display();

/* work.display = function() {

    if (work.jobs.length > 0) {

        $("#workExperience").append(HTMLworkStart);

        for (i in work.jobs) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

            var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

            $(".work-entry:last").append(formattedEmployerWorkTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedDatesWorked);
            $(".work-entry:last").append(formattedWorkDescription);
        }

    }

} 

work.display(); */


projects.display = function() {
    if (projects.projects.length > 0) {
        for (i in projects.projects) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);

            for (img in projects.projects[i].images) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
                $(".project-entry:last").append(formattedProjectImage);
            }


        }
    }
}

projects.display();

education.display = function() {
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
        for (i in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);

            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);
        }

        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for (i in education.onlineCourses) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedOnlineURL);
            }
        }

    }
}

education.display();

$("#mapDiv").append(googleMap);