// Global variable which references the form resumeForm
var myForm = document.resumeForm;

function isValidEmail(emailAddress)
{
    // Regualr Expression for a valid email Address
    const emailRegExp = /^(([^<>()\[\]\\.,;:@"\x00-\x20\x7F]|\\.)+|("""([^\x0A\x0D"\\]|\\\\)+"""))@(([a-z]|#\d+?)([a-z0-9-]|#\d+?)*([a-z0-9]|#\d+?)\.)+([a-z]{2,4})$/i;
    return emailRegExp.test(emailAddress);
}

function validateEmail()
{
    // Local variable which stores the value of the HTMLInputElement named email
    var email = myForm.email;
    if (isValidEmail(email.value))
    {
        generateResume();
    }
    else
    {
        email.focus();
        document.getElementById("emailAddress").innerHTML = "Invalid Email Address";
        document.getElementById("emailAddress").style.color = "red";
        email.style.borderColor = "red";
    }
}
document.getElementById("createResume").addEventListener("click", validateEmail);

function generateResume()
{
    var resumeWindow = window.open('about:blank','myPop');
    myText = ("<html>\n<head>\n<title>Resume/CV</title>\n<meta name=\"viewport\"");
    myText += ("content=\"width=device-width,initial-scale=1.0\">");
    myText += ("<link rel=\"stylesheet\" href=\"popUpStyle.css\">\n</head>\n<body>\n");
    
    var firstName = myForm.firstName.value;
    var lastName = myForm.lastName.value
    var jobTitle = myForm.title.value;
    var headshot = myForm.headshot.value;
    headshot = headshot.substring(12);

    // Start of resume Container
    myText += ("<div id=\"resumeContainer\">");
    
    // Start of header Container & Name /Info Container 
    myText += ("<div id=\"headerContainer\"><img src=\"" + headshot + "\"width=\"165\" height=\"165\"><div id=\"nameAndInfo\">");
    myText +=("<h1 id=\"name\"><span id=\"firstName\">" + firstName + "</span><br><span id=\"lastName\">" + lastName + "</span>");
    myText += ("<br><span id=\"jobTitle\">" + jobTitle + "</span></h1>");   
    
    var city = myForm.city.value;
    var state = myForm.state.value;
    var zipcode = myForm.zipcode.value;
    var phoneNumber = myForm.phoneNumber.value;
    var email = myForm.email.value;
    var linkedIn= myForm.socialsLink.value;
    var portfolio = myForm.portfolioLink.value;
    
    // Start of personal info Container
    myText += ("<div id=\"infoContainer\"><p class=\"info\">" + city + ", " + state + ", " + zipcode + "</p>")
    myText += ("<p class=\"info\">Phone Number: " + phoneNumber + "</p>");
    myText += ("<p class=\"info\">Email: " + email + "</p>");
    myText += ("<p class=\"info\">LinkedIn: " + linkedIn + "</p><p class=\"info\">Portfolio: " + portfolio + "</p>");
    //End of personal Info Container, name/Info, and header Container
    myText += ("</div></div></div>")

    var developerProfile = myForm.developerProfile.value;
    var profileArray = developerProfile.split(".");
    
    // Start of main resume content Container and Profile Section
    myText += ("<div class=\"resumeContent\"><div class=\"resumeSection\">");
    // Start of section title container(includes left and right columns)
    myText += ("<div class=\"sectionTitle\"><div class=\"leftColumn\"><h1 class=\"profileHeader\">Developer Profile</h1>");
    // End of leftColumn beginning/end of rightColumn
    myText += ("</div><div class =\"rightColumn\"><div class=\"dividers\"></div></div>")
    // End of section title Container
    myText += ("</div>")
    
    // Developer Profile Content Section
    myText += ("<div class =\"rightColumn\"><div class=\"content\"><ul>");
    for (var i = 0; i < profileArray.length - 1; i++)
    {
        myText += ("<li>" + profileArray[i] +"</li>");
    }
    // End of Profile content Section and First Section
    myText += ("</ul></div></div></div>");

    /** Work Experience Section
     */
    
    var company = [
        myForm.company1.value,
        myForm.company2.value,
        myForm.company3.value
    ];
    var position = [
        myForm.position1.value,
        myForm.position2.value,
        myForm.position3.value
    ]
    var startDates = document.getElementsByClassName("startDate");
    var endDates = document.getElementsByClassName("endDate");
    var jobDescription = myForm.jobDescription.value;
    var jobArray = jobDescription.split(".");
    
    // Start of work Experience Section(this line includes section title container)
    myText += ("<div class =\"resumeSection\"><div class=\"sectionTitle\"><div class=\"leftColumn\">");
    myText += ("<h1 class=\"profileHeader\">Experience</h1>");
    // End of left Column, beginning/end of rightColumn
    myText += ("</div><div class=\"rightColumn\"><div class=\"dividers\"></div></div>");  
    // End of section title container
    myText += ("</div>");

    for (var i = 0; i < 3; i++)
    {
        // Start of work Experience Content Section, end of left column(position)
        myText += ("<div class=\"experienceContainer\"><div class=\"leftColumn\"><h2 class =\"position\">" + position[0] + "</h2></div>");
        // Start of right column(company + description) including <div> inside right column(job description)
        myText += ("<div class=\"rightColumn\"><div class=\"experienceContent\"><span class=\"company\">" + company[0]);
        
        // Start and end date inside <span> inside right column(job description)
        myText += ("(" + startDates[0].value.substring(0,4) + " - " + endDates[0].value.substring(0,4) + ")");
        // End of company and date </span>
        myText += ("</span>");

        // Start  of unordered List for job description
        myText += ("<ul class=\"jobDescription\">")
        for (var j = 0; j < jobArray.length - 1; j++)
        {
            myText +=("<li>" + jobArray[j] + "</li>")
        }
        // End of unorder list for job description
        myText += ("</ul>");

        // End of job description <div> inside right column (company  + description)
        myText += ("</div>");
        
        // End of right column(company and Description(content))
        myText += ("</div>");

        // End of experienceContainer
        myText +=("</div>")
    }
     /**  
      * End of Work experience resumeSection (title + content sections)
    */
      myText += ("</div>");

    // Work Experience info section
    // for (var i = 0; i < 3; i++)
    // {
    //     // Work Experience Content Section
    //     myText += ("<div class=\"experienceContainer\"><div class=\"leftColumn\"><h2 class=\"position\">" + position[i] + "</h2>");

    //     // End of left Column, beginning of right column
    //     myText += ("</div><div class=\"rightColumn\"><div class=\"experienceContent\"><span class=\"company\">" + company[i]);

    //     // Company span
    //     myText += ("(" + startDates[i].value.substring(0,4) + " - " + endDates[i].value.substring(0,4) + ")" +"</span>");

    //     myText += ("<ul class=\"jobDescription\">")
    //     for (var j = 0; j < jobArray.length - 1; j++)
    //     {
    //         myText += ("<li>" + jobArray[j] +"</li>");
    //     }
    //     // End of work content Section
    //     myText += ("</ul>");
    //     // End of Right column
    //     myText += ("</div>");

 
    /**
     * Start of Key Skills Section
     */
    // Start of work Experience Section(this line includes section title container)
    myText += ("<div class =\"resumeSection\"><div class=\"sectionTitle\"><div class=\"leftColumn\">");
    myText += ("<h1 class=\"profileHeader\">Key Skills</h1>");
    // End of left Column, beginning/end of rightColumn
    myText += ("</div><div class=\"rightColumn\"><div class=\"dividers\"></div></div>");  
    // End of section title container
    myText += ("</div>");

    /**
     *  End of resume Content container
     */
    myText += ("</div>");
    // End of Pop Up window 
    myText += ("\n</div></body>\n</html>");
    

    resumeWindow.document.write(myText);
}