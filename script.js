var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+918600765857'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'>8600765857</label></div> </a> <a href='mailto:patilvinu777@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/Vinayak-09'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/918600765857'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''></div> </a> <a target='_blank' href='https://t.me/vinayak_09'> <div class='socialItem'><img class='socialItemI' src='images/telegram.svg' alt=''></div> </a> <a target='_blank' href='https://instagram.com/vinayak_patil_09'> <div class='socialItem'><img class='socialItemI' src='images/instagram.svg' alt=''> </div> </a> <a href='https://www.linkedin.com/in/vinayak-patil-793bb5206/' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div> </a> </div>";
var resumeString = "<img src='images/resumeThumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Vinayak Resume.pdf</label></div><a href='assets/Vinayak Patil&#39;s Resume.pdf' download='Vinayak_Patil_Resume.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238.63833262443757!2d74.19014864534314!3d16.865338763272877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1a7dcf40f5dd7%3A0xd7b69fe1fcfa9877!2zMTbCsDUxJzU1LjQiTiA3NMKwMTEnMjUuMyJF!5e0!3m2!1sen!2sin!4v1645079906766!5m2!1sen!2sin' class='map'></iframe></div><label class='add'><address>B2 'Asara'<br>Kodoli<br>Kolhapur, Maharashtra, INDIA 416114</address>";
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
                sendTextMessage("Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>Vinayak Ramchandra Patil</a>.</span><br><br>I am a <span class='bold'>Software Engineer & Team Lead 👨🏻‍💻⚙️</span>, focused on Platform/SRE and backend systems with Go, Kubernetes and Cloud.<br><br>I am currently available to join immediately, so I would be pleased to chat about job openings in the engineering sphere.<br><br>Send <span class='bold'>'help'</span> to know more about me.<br>");
            }, 2000);
            break;
        case "help":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'experience'</span> - to know my work experience<br><span class='bold'>'address'</span> - to get my address<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br><span class='bold'>'about'</span> - to know about this site</span>");
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
        case "skills":
            sendTextMessage("<span class='sk'>I hold a B.Tech in Computer Science Engineering, and currently work as a <span class='bold'>Software Engineer & Team Lead</span> focused on Platform/SRE and backend systems.<br><br>Languages I write code in :<br><span class='bold'>Go (Golang)<br>Python<br>JavaScript<br>Node.js<br>Java</span><br><br>Cloud & Infrastructure :<br><span class='bold'>Kubernetes (GKE, EKS)<br>Docker<br>GCP<br>AWS<br>Azure<br>Linux</span><br><br>CI/CD, Security & Observability :<br><span class='bold'>Bitbucket Pipelines<br>GCP Cloud Build<br>SonarQube<br>Trivy<br>Prometheus<br>Grafana<br>cAdvisor</span><br><br>I use <span class='bold'>Arch Linux</span> as my daily driver.<br>Favourite IDE : VSCode</span>");
            break;

        case "education":
            sendTextMessage("I completed my B.Tech in Computer Science Engineering from TKIET Kolhapur<br>Passing Year : 2023<br>Result : 86%<br><br>I completed my Diploma in Computer Engineering from Government Polytechnic Karad<br>Passing Year : 2020<br>Result : 86.06%<br><br>I completed my Secondary school from local school known as SWV<br>Passing Year : 2016");
            break;

        case "experience":
            sendTextMessage("<span class='sk'>Most recently, I worked as a <span class='bold'>Software Engineer & Team Lead</span> at <span class='bold'>Pienomial Technologies Pvt Ltd</span>, Kolhapur (Jan 2023 – Jul 2026).<br><br>I'm a Platform/SRE-focused engineer with 3+ years operating production services on <span class='bold'>Kubernetes</span> (GKE, EKS), backed by 2+ years of <span class='bold'>Go</span> development.<br><br>A few highlights :<br>• Designed and shipped backend services in Go — REST & gRPC APIs, and microservices over gRPC and Redis pub/sub<br>• Built CI/CD pipelines (Bitbucket Pipelines + GCP Cloud Build), cutting release cycles from a manual 2-day process to ~20 minutes, gated on SonarQube & Trivy scans<br>• Diagnosed and root-caused production incidents using Prometheus, Grafana and cAdvisor<br>• Solely built and operated <span class='bold'>Knolens Edge</span> end-to-end — Go backend, GCP deployment, App Store/Play Store release<br>• Grew and led a team from 2 to 4 engineers across 3 concurrent projects<br><br>I'm currently available to join immediately — feel free to reach out if you're hiring! 🚀</span>");
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
            sendTextMessage("<span class='sk'>Here are a couple of things I've worked on recently :<br><br><span class='bold'>Knolens Edge</span> — Go · Flutter · GCP Cloud Run · Kubernetes.<br>Sole developer and operator end-to-end: infrastructure, CI/CD, deployment and release management.<br><br><span class='bold'>Multi-Cloud Client Rollout</span> — AWS EKS · Docker · EFS · S3.<br>Deployed and operated a production workload on a client's AWS EKS cluster with shared persistent and artifact storage.<br><br>Want to check out more? Then just jump into my Github Account.</span><br><br><div class='social'><a target='_blank' href='https://github.com/Vinayak-09'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>");
            break;
        case "new":
            sendTextMessage(addressString);
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Hey I couldn't catch you...😢<br>Send 'help' to know more about usage.");
            }, 2000);
            break;
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
