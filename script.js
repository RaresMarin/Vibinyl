
if(document.getElementById("b")!=null)
{
setInterval(()=>{
    document.getElementById("b").style.display="block";
},2000)
}
let ima = ['Album.jpg','Album1.jpg','Album2.jpg','Album3.jpg','Album4.jpg','Album5.jpg','Album6.jpg','Album7.jpg'];
let sun = ['Sunet (3).mp3','Sunet (2).mp3','Sunet (1).mp3','Sunet (7).mp3','Sunet (5).mp3','Sunet (6).mp3'];
let a = ['The Dark Side of the Moon' , 'Back in Black' , 'Hotel California' , 'Led Zeppelin IV' , 'The Beatles White Album' , 'Thriller'];
let pret = ['100 RON' , '120 RON' , '150 RON' , '130 RON' , '90 RON' , '110 RON'];
let o = 1;
let o1 = 1;
let o2 = 1;
let o3 = 1;
let o4 = 1;
let o5 = 1;
function f0(x){
    document.getElementById("M").innerHTML="";
    document.getElementById("P").innerHTML="";
    document.getElementById("Ap").innerHTML="";
    document.getElementById("D").innerHTML="";
    document.getElementById("G").innerHTML="";
    document.getElementById("F").innerHTML="";
    document.getElementById("L").innerHTML="";
    document.getElementById("T").innerHTML="";
     document.getElementById("M").style.color="white";
    document.getElementById("P").style.color="white";
    document.getElementById("Ap").style.color="white";
    document.getElementById("D").style.color="white";
    document.getElementById("G").style.color="white";
    document.getElementById("F").style.color="white";
    document.getElementById("L").style.color="white";
    document.getElementById("T").style.color="white";
if(x==0 && o==1){
    document.getElementById("C").style.display = "none";
document.getElementById("S").style.display = "block";
document.getElementById("AL").src = ima[x];
document.createElement("audio").src = sun[x];
document.getElementById("A").src = sun[x];
document.getElementById("A").play();
document.getElementById("Album").innerHTML = a[x];
document.getElementById("Pret").innerHTML = pret[x];
    document.getElementById("M").innerHTML="The Dark Side of the Moon";
    document.getElementById("P").innerHTML="Pink Margarita";
    document.getElementById("P").style.color="pink";
    document.getElementById("Ap").innerHTML="Fever";
    document.getElementById("D").innerHTML="Dependent on You";
    document.getElementById("G").innerHTML="Love me";
    document.getElementById("F").innerHTML="Money";
    document.getElementById("L").innerHTML="Us and Them";
    document.getElementById("T").innerHTML="Any Colour You Like";
document.getElementById("Album").style.color = 'pink';
o = 0;
}else if(x==1 && o1==1){
    document.getElementById("C").style.display = "none";
document.getElementById("S").style.display = "block";
document.getElementById("AL").src = ima[x];
document.createElement("audio").src = sun[x];
document.getElementById("A").src = sun[x];
document.getElementById("A").play();
document.getElementById("Album").innerHTML = a[x];
document.getElementById("Pret").innerHTML = pret[x];
    document.getElementById("M").innerHTML="Back in Black";
    document.getElementById("P").innerHTML="Rai di ri di dam";
    document.getElementById("P").style.color="cyan";
    document.getElementById("Ap").innerHTML="Shoot to Thrill";
    document.getElementById("D").innerHTML="What Do You Do for Money Honey";
    document.getElementById("L").innerHTML="Back in Black";
    document.getElementById("T").innerHTML="You Shook Me All Night Long (Valleria version)";
document.getElementById("Album").style.color = 'cyan';
o1 = 0;
}else if(x==2 && o2==1){
    document.getElementById("C").style.display = "none";
document.getElementById("S").style.display = "block";
document.getElementById("AL").src = ima[x];
document.createElement("audio").src = sun[x];
document.getElementById("A").src = sun[x];
document.getElementById("A").play();
document.getElementById("Album").innerHTML = a[x];
document.getElementById("Pret").innerHTML = pret[x];
    document.getElementById("M").innerHTML="Hotel California";
    document.getElementById("Ap").innerHTML="Dance & Cry";
    document.getElementById("Ap").style.color="indigo";
    document.getElementById("D").innerHTML="Life in the Fast Lane";
    document.getElementById("G").innerHTML="Wasted Time";
    document.getElementById("F").innerHTML="Victim of Love";
    document.getElementById("L").innerHTML="Pretty Maids All in a Row";
    document.getElementById("T").innerHTML="Try and Love Again";
document.getElementById("Album").style.color = 'indigo';
o2 = 0;
}
else if(x==3 && o3==1){
    document.getElementById("C").style.display = "none";
document.getElementById("S").style.display = "block";
document.getElementById("AL").src = ima[x];
document.createElement("audio").src = sun[x];
document.getElementById("A").src = sun[x];
document.getElementById("A").play();
document.getElementById("Album").innerHTML = a[x];
document.getElementById("Pret").innerHTML = pret[x];
    document.getElementById("M").innerHTML="In the middle";
    document.getElementById("P").innerHTML="Black Dog";
    document.getElementById("Ap").innerHTML="Rock and Roll";
    document.getElementById("D").innerHTML="The Battle of Evermore";
    document.getElementById("G").innerHTML="Stairway to Heaven";
    document.getElementById("F").innerHTML="Misty Mountain Hop"; 
   document.getElementById("M").style.color="grey";
   document.getElementById("Album").style.color = 'grey';
o3 = 0;
}
else if(x==4 && o4==1){
document.getElementById("C").style.display = "none";
document.getElementById("S").style.display = "block";
document.getElementById("AL").src = ima[x];
document.createElement("audio").src = sun[x];
document.getElementById("A").src = sun[x];
document.getElementById("A").play();
document.getElementById("Album").innerHTML = a[x];
document.getElementById("Pret").innerHTML = pret[x];
    document.getElementById("P").innerHTML="Come Together";
    document.getElementById("Ap").innerHTML="Something";
    document.getElementById("D").innerHTML="Maxwell's Silver Hammer";
    document.getElementById("G").innerHTML="Oh! Darling";
    document.getElementById("F").innerHTML="Octopus's Garden";
    document.getElementById("F").style.color="springgreen";
    document.getElementById("Album").style.color = 'springgreen';
o4 = 0;
}
else if(x==5 && o5==1){
    document.getElementById("C").style.display = "none";
document.getElementById("S").style.display = "block";
document.getElementById("AL").src = ima[x];
document.createElement("audio").src = sun[x];
document.getElementById("A").src = sun[x];
document.getElementById("A").play();
document.getElementById("Album").innerHTML = a[x];
document.getElementById("Pret").innerHTML = pret[x];
    document.getElementById("M").style.color="gold";
    document.getElementById("M").innerHTML="Evidement";
    document.getElementById("P").innerHTML="Wanna Be Startin' Somethin'";
    document.getElementById("Ap").innerHTML="Baby Be Mine";
    document.getElementById("D").innerHTML="The Girl Is Mine";
document.getElementById("Album").style.color = 'gold';
o5 = 0;
}
}
function res(){
document.getElementById("C").style.display = "grid";
document.getElementById("S").style.display = "none";
document.getElementById("A").pause();
}

let p =  0;
let ok  = true;
let ok1 = true;
let ok2 = true;

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("Puncte").innerHTML = p;
});

function cod() {
    let x = document.getElementById("Sal").value;

    if (x === "Salut" && ok) {
        p += 300;
        ok = false;
    }

    if (x === "CARDOSH" && ok1) {
        p += 1000;
        ok1 = false;
    }

    if (x === "STOIAND" && ok2) {
        p += 1000;
        ok2 = false;
    }

    document.getElementById("Puncte").innerHTML = p;
}
function d(){
    document.getElementById("D").style.display="none";
    document.getElementById("p").style.display="block";
}
document.addEventListener("DOMContentLoaded", () => {
    const el = document.getElementById("Puncte");
    if (el) el.innerHTML = p;
});
let b = 300;
function buy(){
    let pretText = document.getElementById("Pret").innerText;
    let pretValue = parseInt(pretText);
    if(b >= pretValue){
        b -= pretValue;
        document.getElementById("Puncte").innerHTML = b;
            if(pretValue==100){
                document.getElementById("Pink").style.filter = "grayscale(100%)";
            }
            if(pretValue==120){
                document.getElementById("Val").style.filter = "grayscale(100%)";
            }
            if(pretValue==130){
                document.getElementById("N").style.filter = "grayscale(100%)";
            }
            if(pretValue==150){
                document.getElementById("N1").style.filter = "grayscale(100%)";
            }
            if(pretValue==90){
                document.getElementById("N2").style.filter = "grayscale(100%)";
            }
            if(pretValue==110){
                document.getElementById("N3").style.filter = "invert(100%) grayscale(100%)";
            }
        alert("Achizitie reusita!");
    }else{
        alert("Puncte insuficiente!");
    }
    res();
}
if(document.getElementById("cont1")!=null)
document.getElementById("cont1").style.display = "none";
function f(){
    document.getElementById("cont1").style.display = "block";
    document.getElementById("cont").style.display = "none";
}
function f1(){
    document.getElementById("cont").style.display = "block";
    document.getElementById("cont1").style.display = "none";
}
      function Inre() {
  const nume = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const parola = document.getElementById("password").value;

  if (!nume || !email || !parola) {
    alert("Completează toate câmpurile");
    return;
  }

  let user = { nume, email, parola };
  localStorage.setItem("demoUser", JSON.stringify(user));

  alert("Cont creat!");
}

function Trim() {
  const email = document.getElementById("email").value;
  const parola = document.getElementById("password").value;

  const user = JSON.parse(localStorage.getItem("demoUser"));

  if (!user) {
    alert("Nu există cont");
    return;
  }

  if (user.email === email && user.parola === parola) {
    alert("Autentificare reușită!");
    localStorage.setItem("loggedUser", JSON.stringify(user));
        window.location.href = "index1.html";
  } else {
    alert("Date greșite");
  }
}