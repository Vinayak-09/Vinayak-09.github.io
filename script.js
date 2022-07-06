var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+918600765857'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'>8600765857</label></div> </a> <a href='mailto:patilvinu777@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/Vinayak-09'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/918600765857'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''></div> </a> <a target='_blank' href='https://t.me/vinayak_09'> <div class='socialItem'><img class='socialItemI' src='images/telegram.svg' alt=''></div> </a> <a target='_blank' href='https://instagram.com/vinayak_patil_09'> <div class='socialItem'><img class='socialItemI' src='images/instagram.svg' alt=''> </div> </a> <a href='https://www.linkedin.com/in/vinayak-patil-793bb5206/' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div> </a> </div>";
var resumeString = "<img src='images/resumeThumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Vinayak Resume.pdf</label></div><a href='assets/Vinayak Patil&#39;s Resume.pdf' download='Vinayak_Patil_Resume.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238.63833262443757!2d74.19014864534314!3d16.865338763272877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1a7dcf40f5dd7%3A0xd7b69fe1fcfa9877!2zMTbCsDUxJzU1LjQiTiA3NMKwMTEnMjUuMyJF!5e0!3m2!1sen!2sin!4v1645079906766!5m2!1sen!2sin' class='map'></iframe></div><label class='add'><address>B2 'Asara'<br>Kodoli<br>Kolhapur, Maharashtra, INDIA 416114</address>";



var repliesfForHowAreYou = ["I'm fine.", "I'm good. And yourself?", "Not bad. How are you?", "I'm doing well, and you?", "Good, how about you?", "I'm great!", "Everything is fine when you are around.", "The best I can be. I hope you are at your best too.", "I'm still learning and eagerly waiting to grasp new things."];
var repliesForHello = ["Hello there!", "Hey!", "Hola!", "Nice to meet you!", "I'm here!", "Hey! How's it going?", "What's up?", "Hey! What a pleasant surprise!"];
var repliesForBye = ["Catch you on the flip side!", "Bye-bye, butterfly.", "See you soon!", "Catch you later!", "Bye for now", "See you on the internet!"];
var repliesfForLove = ["I get that a lot!", "You are day-dreaming again!", "I love You........Tube! LOL!", "Are you sure you aren't sick or something?", "I love you too!", "You are not my type!", "❤️"]
var repliesForCommandUnknown = ["Hey I couldn't catch you....<br>Send 'help' to know more about usage.", "I didn't get it.", "Please can you repeat it?", "I'm still learning...please use approriate keywords in your phrase.", "I'm still working on it.<br>"];
var repliesForVoiceAssistants = ["Yes! I know her.", "Of-cource! Who don't know her?", "I'm teching lessions from her!", "She is my BFF!", "My childhood friend!"];



function getRandom(arrayOfReplies) {
    var sizeOfArray = arrayOfReplies.length;
    return arrayOfReplies[Math.floor(Math.random() * sizeOfArray)];
}




function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>Vinayak Ramchandra Patil</a>.</span><br><br>I am a Computer Engineering student at <span class='bold'>Ch. Shivaji University 👨🏻‍💻📚</span><br><br>I am eager to hear about potential career opportunities, so I would be pleased to chat about job openings in the engineering sphere.<br><br>Send <span class='bold'>'help'</span> to know more about me.<br>");
            }, 2000);
            break;
        case "help":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'address'</span> - to get my address<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br><span class='bold'>'about'</span> - to know about this site</span>");
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
        case "skills":
            sendTextMessage("<span class='sk'>I am currently pursuing B.Tech degree in Computer Science Engineering.<br><br>I can comfortably write code in following languages :<br><span class='bold'>Java<br>C++<br>C<br>PHP<br>Kotlin<br>Dart<br>Python<br>CSS<br>HTML</span><br><br>I've experiance with following frameworks :<span class='bold'><br>Android<br>Flutter<br>ReactJs<br>GTK</span><br><br>I use <span class='bold'>Arch Linux</span> as daily driver on my HP Pavilion 15-ec0xxx<br>OS:Arch Linux<br>DE:Gnome(More often) Kde(often)<br>Favourite IDE:VSCode</span>");
            break;

        case "education":
            sendTextMessage("I am currently pusuing B.Tech degree in Computer Science Engineering from TKIET Kolhapur<br>Passing Year : 2023<br><br>I have completed my Diploma from Government Polytechnic Karad<br>Passing Year:2020<br>Result:86.06%<br><br>I have completed my Secondary school from local school known as SWV<br>Passing Year:2016");
            break;

        case "address":
            sendTextMessage(addressString);
            break;
        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage("🛠️💻 This portfolio website is built using HTML, CSS and JavaScript from SCRATCH!<br><br>👨🏻‍💻 Designed and Developed by <a class='alink' target='_blank' href='https:\/\/instagram.com/vinayak_patil_09/'><span class='bold'>Vinayak Patil</a> with ❤️</span>");
            break;
        case "contact":
            sendTextMessage(contactString);
            break;
        case "projects":
            sendTextMessage("You want to check my projects? Then just jump into my Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/Vinayak-09'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>");
            break;
        case "new":
            sendTextMessage(addressString);
            break;
            default:
                ifElseThinkAndExecute(inputText.toLowerCase().trim());
                break;
    }

}



function ifElseThinkAndExecute(textString) {
    if (textString.includes("hii") || textString.includes("hi") || textString.includes("hello") || textString.includes("hola") || textString.includes("hey")) {
        // reply for hi message
        sendTextMessage(getRandom(repliesForHello));
    } else if (textString.includes("i need break") || textString.includes("leave me") || textString.includes("bye") || textString.includes("see you soon") || textString.includes("bye bye") || textString.includes("goodbye")) {
        // reply for bye message
        sendTextMessage(getRandom(repliesForBye));
    } else if (textString.includes("i love you") || textString.includes("love you") || textString.includes("you are hot") || textString.includes("i like you")) {
        // reply for i love you
        sendTextMessage(getRandom(repliesfForLove));
    } else if (textString.includes("how are you") || (textString.includes("hows going") || textString.includes("how its going" || textString.includes("how it's going") || textString.includes("what are you doing")))) {
        // reply for 'how are you' request
        sendTextMessage(getRandom(repliesfForHowAreYou));
    } else if (textString.includes("you know") && (textString.includes("bixby") || textString.includes("siri" || textString.includes("alexa") || textString.includes("cortana")))) {
        // reply for 'you know other chattingBots' request
        sendTextMessage(getRandom(repliesForVoiceAssistants));
    } else {
        setTimeout(() => {
            sendTextMessage(getRandom(repliesForCommandUnknown));
        }, 2000);
    }
}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
