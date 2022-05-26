"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[45377],{32726:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var i=a(87462),n=a(63366),s=(a(67294),a(3905)),r=a(13904),o=["components"],l={title:"Security",tags:["Coding guidelines","Developer processes","Policies","Security"]},d=void 0,p={unversionedId:"development/policies/security/index",id:"development/policies/security/index",title:"Security",description:"This page describes how to write secure Moodle code that is not vulnerable to anything that evil people may try to throw at it.",source:"@site/general/development/policies/security/index.md",sourceDirName:"development/policies/security",slug:"/development/policies/security/",permalink:"/devdocs/general/development/policies/security/",editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/policies/security/index.md",tags:[{label:"Coding guidelines",permalink:"/devdocs/general/tags/coding-guidelines"},{label:"Developer processes",permalink:"/devdocs/general/tags/developer-processes"},{label:"Policies",permalink:"/devdocs/general/tags/policies"},{label:"Security",permalink:"/devdocs/general/tags/security"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1653562912,formattedLastUpdatedAt:"26/05/2022",frontMatter:{title:"Security",tags:["Coding guidelines","Developer processes","Policies","Security"]},sidebar:"policies",previous:{title:"Naming conventions",permalink:"/devdocs/general/development/policies/naming"},next:{title:"Unauthenticated access",permalink:"/devdocs/general/development/policies/security/unauthenticated-access"}},u={},c=[{value:"Security of web applications",id:"security-of-web-applications",level:2},{value:"Secure web app requirements",id:"secure-web-app-requirements",level:3},{value:"Balanced security",id:"balanced-security",level:3},{value:"Moodle security design",id:"moodle-security-design",level:2},{value:"Types of users",id:"types-of-users",level:3},{value:"Administrators",id:"administrators",level:4},{value:"Teachers",id:"teachers",level:4},{value:"Students",id:"students",level:4},{value:"Guests",id:"guests",level:4},{value:"Capability risks",id:"capability-risks",level:3},{value:"Common types of security vulnerability",id:"common-types-of-security-vulnerability",level:2},{value:"Summary of the guidelines",id:"summary-of-the-guidelines",level:2},{value:"Authenticate the user",id:"authenticate-the-user",level:3},{value:"Verify course and module access",id:"verify-course-and-module-access",level:3},{value:"Check permissions",id:"check-permissions",level:3},{value:"Don&#39;t trust any input from users",id:"dont-trust-any-input-from-users",level:3},{value:"Clean and escape data before output",id:"clean-and-escape-data-before-output",level:3},{value:"Escape data before storing it in the database",id:"escape-data-before-storing-it-in-the-database",level:3},{value:"Escape data before using it in shell commands",id:"escape-data-before-using-it-in-shell-commands",level:3},{value:"Log every request",id:"log-every-request",level:3},{value:"Other good practice",id:"other-good-practice",level:3},{value:"See also",id:"see-also",level:2}],m={toc:c};function h(e){var t=e.components,a=(0,n.Z)(e,o);return(0,s.kt)("wrapper",(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(r.Z,(0,i.Z)({frontMatter:l},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"This page describes how to write secure Moodle code that is not vulnerable to anything that evil people may try to throw at it."),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Page organisation")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"The page is organised around the ",(0,s.kt)("a",{parentName:"p",href:"#common-types-of-security-vulnerability"},"common types of security vulnerability"),". For each one, it explains:"),(0,s.kt)("ol",{parentName:"div"},(0,s.kt)("li",{parentName:"ol"},"what the danger is,"),(0,s.kt)("li",{parentName:"ol"},"how Moodle is designed to avoid the problem,"),(0,s.kt)("li",{parentName:"ol"},"what you need to do as a Moodle developer to keep your code secure, and"),(0,s.kt)("li",{parentName:"ol"},"what you can do as an administrator, to make your Moodle more secure.")),(0,s.kt)("p",{parentName:"div"},"The explanation of each vulnerability is on a separate page, linked to in the list below."))),(0,s.kt)("p",null,"This page also summarises all the key guidelines."),(0,s.kt)("h2",{id:"security-of-web-applications"},"Security of web applications"),(0,s.kt)("h3",{id:"secure-web-app-requirements"},"Secure web app requirements"),(0,s.kt)("p",null,"Some companies require the maximum level of security for web applications. You can often see similar general recommendations:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"separate administration backend"),(0,s.kt)("li",{parentName:"ul"},"no sensitive information stored in web application"),(0,s.kt)("li",{parentName:"ul"},"communication has to be encrypted using SSL"),(0,s.kt)("li",{parentName:"ul"},"log all user actions"),(0,s.kt)("li",{parentName:"ul"},"server applications have to be completely separated"),(0,s.kt)("li",{parentName:"ul"},"no files uploaded by users on server"),(0,s.kt)("li",{parentName:"ul"},"no rich text entered by users on server (limited plain text only)"),(0,s.kt)("li",{parentName:"ul"},"validate user identity and actions via separate channel"),(0,s.kt)("li",{parentName:"ul"},"always keep every software up-to-date"),(0,s.kt)("li",{parentName:"ul"},"no 3rd party browser extensions recommended"),(0,s.kt)("li",{parentName:"ul"},"use only one web page, do not open multiple windows with different sites, close/open browser before and after using the secure app")),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},(0,s.kt)("strong",{parentName:"p"},"Web-based banking systems")," are the best examples of these secure web applications. Security is the top-most priority here, security incidents may cost money - either the customer, bank or insurance company, the public image of the institution may be damaged too. Limiting factors may be the cost of application development, maintenance and usability but also the cost of communication via the alternative channels."))),(0,s.kt)("h3",{id:"balanced-security"},"Balanced security"),(0,s.kt)("p",null,"As you can see, many web applications today violate the security design rules. For example, web-based mail systems have to accept rich text messages with file attachments, mail messages often contain very sensitive information. In fact, the Web 2.0 idea goes directly against the security design rules, everybody is submitting content - only app designer/administrator should be adding trusted content."),(0,s.kt)("p",null,"When designing web applications we have to find out what our users are supposed to be doing and then find some reasonable balance between features and security."),(0,s.kt)("h2",{id:"moodle-security-design"},"Moodle security design"),(0,s.kt)("p",null,"The security of web application depends on the intended use and features available for each type of user."),(0,s.kt)("h3",{id:"types-of-users"},"Types of users"),(0,s.kt)("h4",{id:"administrators"},"Administrators"),(0,s.kt)("p",null,"Administrators have following privileges:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Change all settings"),(0,s.kt)("li",{parentName:"ul"},"Create courses"),(0,s.kt)("li",{parentName:"ul"},"Access all courses"),(0,s.kt)("li",{parentName:"ul"},"Modify language packs"),(0,s.kt)("li",{parentName:"ul"},"Modify all users")),(0,s.kt)("p",null,"Indirectly administrators are allowed to execute shell and PHP code. Moodle administrators may be partially restricted by hardcoding settings in config.php.\nLow level server administrators can not be restricted because they can read content of PHP files and may modify them."),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"All administrators have to be fully trusted."))),(0,s.kt)("h4",{id:"teachers"},"Teachers"),(0,s.kt)("p",null,"Teachers are usually creating course content, enrolling students and teaching. They usually need following privileges:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Upload files and submit html texts"),(0,s.kt)("li",{parentName:"ul"},"Create and manage activities"),(0,s.kt)("li",{parentName:"ul"},"Access student grades and other personal information")),(0,s.kt)("p",null,"Uploading of files with javascript, flash and other scripted is often considered to be a security risk. Unfortunately we can not remove these risks from teacher roles because even basic SCORM packages consist of HTML and Javascript which needs to use user session."),(0,s.kt)("p",null,"Browser trusts everything coming from one server, it does not know anything about our courses or origin of data. Once the file is uploaded to server it becomes part of the server application. It is not possible to differentiate between wanted and unwanted code stored on the server."),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"All teachers with risky capabilities have to be trusted, it is not possible to give teacher access to students. In theory teachers may use XSS attacks to gain administrator access."),(0,s.kt)("p",{parentName:"div"},"Technically it would be possible to create a system where teachers can not attack other users but it would prevent all Javascript, Flash, SCORM, Java, HTML forms, SVG, etc."))),(0,s.kt)("h4",{id:"students"},"Students"),(0,s.kt)("p",null,"Students are participating in courses, they are not trusted. Students need following privileges:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Post formatted text with inline images and attachments"),(0,s.kt)("li",{parentName:"ul"},"Upload binary documents")),(0,s.kt)("p",null,"Uploaded files must not be opened directly in browser from the same server. Instead the files need to be served from different domain, or server has to force download of all files to local hard drive before opening them."),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"All student submitted text has to be sanitised before printing the text on any page, this prevent XSS attacks on other users but at the same time prevents Flash, Javascript, SVG and all other HTML scripting. Moodle uses HTML Purifier library for this purpose."))),(0,s.kt)("h4",{id:"guests"},"Guests"),(0,s.kt)("p",null,"For security reasons unregistered users can not be allowed to upload any files or submit any text that is stored in database. Guests could try to spam other users, exploit problems in HTML cleaning routines, abuse other vulnerabilities or try social engineering based attacks."),(0,s.kt)("p",null,"Sites with enabled user sign-up via email have to take extra care in order to prevent spamming and other types of attacks."),(0,s.kt)("h3",{id:"capability-risks"},"Capability risks"),(0,s.kt)("p",null,"Moodle is very flexible system, administrators may define multiple roles. Each role is a set of capabilities defined at system level, roles may be modified via overrides at lower context levels. Risks are part of description of each capability, administrators have to make sure only trusted users get potentially dangerous capabilities."),(0,s.kt)("h2",{id:"common-types-of-security-vulnerability"},"Common types of security vulnerability"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./security/unauthenticated-access"},"Unauthenticated access")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./security/unauthorised-access"},"Unauthorised access")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./security/crosssite-request-forgery"},"Cross-site request forgery (XSRF)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./security/crosssite-scripting"},"Cross-site scripting (XSS)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./security/sql-injection"},"SQL injection")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./security/commandline-injection"},"Command-line injection")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./security/dataloss"},"Data-loss")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./security/info-leakage"},"Confidential information leakage")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./security/configinfo-leakage"},"Configuration information leakage")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./security/session-fixation"},"Session fixation")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./security/dos"},"Denial of service (DOS)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./security/bruteforcing-login"},"Brute-forcing login")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./security/insecure-config"},"Insecure configuration management")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./security/bufferoverruns"},"Buffer overruns and other platform weaknesses")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./security/socialengineering"},"Social engineering"))),(0,s.kt)("h2",{id:"summary-of-the-guidelines"},"Summary of the guidelines"),(0,s.kt)("h3",{id:"authenticate-the-user"},"Authenticate the user"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"With very few exceptions, every script should call ",(0,s.kt)("a",{parentName:"li",href:"/docs/apis/subsystems/access#require_login"},(0,s.kt)("inlineCode",{parentName:"a"},"require_login"))," or ",(0,s.kt)("a",{parentName:"li",href:"/docs/apis/subsystems/access#require_course_login"},(0,s.kt)("inlineCode",{parentName:"a"},"require_course_login"))," as near the start as possible.")),(0,s.kt)("h3",{id:"verify-course-and-module-access"},"Verify course and module access"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"All course areas have to be protected by ",(0,s.kt)("inlineCode",{parentName:"li"},"require_login")," or ",(0,s.kt)("inlineCode",{parentName:"li"},"require_course_login")," with correct ",(0,s.kt)("inlineCode",{parentName:"li"},"$course")," parameter."),(0,s.kt)("li",{parentName:"ul"},"All module areas have to be protected by ",(0,s.kt)("inlineCode",{parentName:"li"},"require_login")," or ",(0,s.kt)("inlineCode",{parentName:"li"},"require_course_login")," with correct ",(0,s.kt)("inlineCode",{parentName:"li"},"$course")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"$cm")," parameter")),(0,s.kt)("h3",{id:"check-permissions"},"Check permissions"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Before allowing the user to see anything or do anything, call to ",(0,s.kt)("a",{parentName:"li",href:"/docs/apis/subsystems/access#has_capability"},(0,s.kt)("inlineCode",{parentName:"a"},"has_capability"))," or ",(0,s.kt)("a",{parentName:"li",href:"/docs/apis/subsystems/access#require_capability"},(0,s.kt)("inlineCode",{parentName:"a"},"require_capability")),"."),(0,s.kt)("li",{parentName:"ul"},"Capabilities should be annotated with the appropriate ",(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"https://docs.moodle.org/dev/Hardening_new_Roles_system#Basic_risks"},"risks")),"."),(0,s.kt)("li",{parentName:"ul"},"If appropriate, restrict what people can see according to ",(0,s.kt)("strong",{parentName:"li"},"groups"),".")),(0,s.kt)("h3",{id:"dont-trust-any-input-from-users"},"Don't trust any input from users"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Use ",(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"https://docs.moodle.org/dev/lib/formslib.php"},"moodleforms"))," whenever possible, with an appropriate ",(0,s.kt)("inlineCode",{parentName:"li"},"setType")," method call for each field."),(0,s.kt)("li",{parentName:"ul"},"Before performing actions, use ",(0,s.kt)("inlineCode",{parentName:"li"},"data_submitted() && confirm_sesskey()")," to check sesskey and that you are handling a POST request."),(0,s.kt)("li",{parentName:"ul"},"Before destroying large amounts of data, add a confirmation step."),(0,s.kt)("li",{parentName:"ul"},"If not using a moodleform, clean input using ",(0,s.kt)("inlineCode",{parentName:"li"},"optional_param")," or ",(0,s.kt)("inlineCode",{parentName:"li"},"required_param")," with an appropriate ",(0,s.kt)("inlineCode",{parentName:"li"},"PARAM_...")," type.\n",(0,s.kt)("strong",{parentName:"li"}," Do not access ",(0,s.kt)("inlineCode",{parentName:"strong"},"$_GET"),", ",(0,s.kt)("inlineCode",{parentName:"strong"},"$_POST")," or ",(0,s.kt)("inlineCode",{parentName:"strong"},"$_REQUEST")," directly.\n")," Group optional_param and required_param calls together at the top of the script, to make them easy to find.")),(0,s.kt)("p",null,"Similarly, clean data from other external resources like RSS feeds before use."),(0,s.kt)("h3",{id:"clean-and-escape-data-before-output"},"Clean and escape data before output"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Use ",(0,s.kt)("inlineCode",{parentName:"li"},"s")," or ",(0,s.kt)("inlineCode",{parentName:"li"},"p")," to output plain text content."),(0,s.kt)("li",{parentName:"ul"},"Use ",(0,s.kt)("inlineCode",{parentName:"li"},"format_string")," to output content with minimal HTML like multi-lang spans (for example, course and activity names)."),(0,s.kt)("li",{parentName:"ul"},"Use ",(0,s.kt)("inlineCode",{parentName:"li"},"format_text")," to output all other content.",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Only use ",(0,s.kt)("inlineCode",{parentName:"li"},"$options->noclean")," if it requires a capability with ",(0,s.kt)("inlineCode",{parentName:"li"},"RISK_XSS")," to input that content (for example web page resources)."))),(0,s.kt)("li",{parentName:"ul"},"Data destined for JavaScript should be escaped using ",(0,s.kt)("inlineCode",{parentName:"li"},"$PAGE->requires->data_for_js")," (Moodle 2.0 onwards) or ",(0,s.kt)("inlineCode",{parentName:"li"},"addslashes_js")," (Moodle 1.9).")),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"More info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"We recommend that you follow the ",(0,s.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Output_functions"},"Output functions")," to get a better understanding of how dynamic data should be sent from Moodle to the browser."))),(0,s.kt)("h3",{id:"escape-data-before-storing-it-in-the-database"},"Escape data before storing it in the database"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Use the ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/XMLDB_editor"},"XMLDB")," library. This takes care of most escaping issues for you."),(0,s.kt)("li",{parentName:"ul"},"When you must use custom SQL code, ",(0,s.kt)("strong",{parentName:"li"},"use place-holders")," to insert values into the queries.",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Before Moodle 2.0, you had to build SQL by concatenating strings. Take particular care, especially with quoting values, to avoid SQL injection vulnerabilities."))),(0,s.kt)("li",{parentName:"ul"},"The ",(0,s.kt)("inlineCode",{parentName:"li"},"addslashes")," method should no longer be use anywhere in Moodle 2.0 onwards."),(0,s.kt)("li",{parentName:"ul"},"Variables must be passed to database queries through bound parameters.")),(0,s.kt)("h3",{id:"escape-data-before-using-it-in-shell-commands"},"Escape data before using it in shell commands"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Avoid shell commands if at all possible.",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Look to see if there is a PHP library instead."))),(0,s.kt)("li",{parentName:"ul"},"If you can't avoid shell commands, use ",(0,s.kt)("inlineCode",{parentName:"li"},"escapeshellcmd")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"escapeshellarg"),".")),(0,s.kt)("h3",{id:"log-every-request"},"Log every request"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Every script should call ",(0,s.kt)("inlineCode",{parentName:"li"},"add_to_log"),".")),(0,s.kt)("h3",{id:"other-good-practice"},"Other good practice"),(0,s.kt)("p",null,"... that helps with security:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Structure your code nicely, minimising the use of global variables. This makes the flow of data, and hence security, easier to verify."),(0,s.kt)("li",{parentName:"ul"},"Initialise objects (for instance, ",(0,s.kt)("inlineCode",{parentName:"li"},"$x = new stdClass;"),") and arrays (",(0,s.kt)("inlineCode",{parentName:"li"},"$x = array()"),") before you first use them."),(0,s.kt)("li",{parentName:"ul"},"Test every input field with tricky input to ensure that it is escaped and un-escaped the right number of times everywhere, and that Unicode characters are not corrupted. One standard test you can use is:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"< > & &lt; &gt; &amp; ' \\' \u7881 \\ \\\\\n")),(0,s.kt)("h2",{id:"see-also"},"See also"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"../process#security-issues"},"Security issue process")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Coding"},"Coding")),(0,s.kt)("li",{parentName:"ul"},"The ",(0,s.kt)("a",{parentName:"li",href:"http://cwe.mitre.org/top25/"},"2010 CWE/SANS Top 25 Most Dangerous Programming Errors")," - this is a generic list of common security mistakes, produced by a group of security experts. The above Moodle-specific guidelines cover most of these general points."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.owasp.org/index.php/PHP_Security_Cheat_Sheet"},"PHP Security Cheat Sheet")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.owasp.org/index.php/Main_Page"},"The Open Web Application Security Project (OWASP)")," - Large collection of documentation and code samples about preventing security issues while using web technologies.")))}h.isMDXComponent=!0}}]);