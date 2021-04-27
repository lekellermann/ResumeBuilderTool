// Global variable which references the form resumeForm
var myForm = document.resumeForm;


// function checkFormElementValue()
// {
//     alert(email.value);
// }
// document.getElementById("createResume").addEventListener("click" , checkFormElementValue);

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
    
    var name = myForm.fullName.value;
    var jobTitle = myForm.title.value;
    var headshot = myForm.headshot.value;
    headshot = headshot.substring(12);
    
    myText += ("<div id=\"resumeContainer\"><div id=\"headshot\"><img src=\"" + headshot + "\"width=\"165\" height=\"165\"></div>\n<h1 id=\"name\">"+ name + "<br/><span id=\"jobTitle\">"+ jobTitle + "</span></h1>");
    
    var city = myForm.city.value;
    var state = myForm.state.value;
    var zipcode = myForm.zipcode.value;
    var phoneNumber = myForm.phoneNumber.value;
    var email = myForm.email.value;
    var linkedIn= myForm.socialsLink.value;
    var portfolio = myForm.portfolioLink.value;

    myText += ("<div id=\"personalInfo\">\n<p class =\"info\">" + city + ", " + state + "," + zipcode + "</p>");
    myText += ("<p class=\"info\">Email: " + email + "</p>" + "<p class=\"info\">Phone Number: " + phoneNumber)
    myText +=("<p class= \"info\">LinkedIn Profile: " + linkedIn +"</p><p class=\"info\">Portfolio: " + portfolio + "</p></div>");
    myText += ("</p>\n</div></body>\n</html>");
    

    resumeWindow.document.write(myText);
}