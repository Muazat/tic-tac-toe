//-----------------global variables---------------------------------------------
var place= [0,0,0,0,0,0,0,0,0];
var winner;
var bb;
var keep;
// selection menu-----------------------------------------------
function chang(){
        document.getElementById("pop").style.visibility="visible";
        document.getElementsByClassName("board")[0].style.opacity="0.4";        
    }
    function change(){
        document.getElementById("pop").style.visibility="hidden";
        document.getElementsByClassName("board")[0].style.opacity="1";
    }
//dark mode---------------------------------------------------------------------------

function dark(){
    document.body.style.backgroundColor="rgb(63, 62, 62)"; 
    document.getElementsByClassName("board")[0].style.backgroundColor="rgb(119, 119, 119)";
}
//light mode----------------------------------------------------------------------
function light(){
    document.body.style.backgroundColor="rgba(255, 255, 255, 0.836)"; 
    document.getElementsByClassName("board")[0].style.backgroundColor="rgb(202, 245, 202)";
}
//------------------------dplayer
//show turns----------
function showT(){
    document.getElementById("nply").innerHTML="<b>Game On!!</b>";
    function myReply(){
    document.getElementById("nply").innerHTML="";
}
    setTimeout(myReply,3000);  
}
// alert win-------------------------
function winAlrt(){
    document.getElementById("nply").innerHTML="Player <b>"+ winner +" </b> won the game!!";
    function myReply(){
    document.getElementById("nply").innerHTML="";
    
}
    setTimeout(myReply,3000);    
}
//lose alert--------------------------------------------
function loseAlrt(){
    document.getElementById("nply").innerHTML= winner;
    function myReply(){
    document.getElementById("nply").innerHTML="";
    
}
    setTimeout(myReply,3000);    
}


//determing wins--------------------------------------
function yay(yayy){

var b1, b2, b3, b4,b5,b6, b7, b8, b0;
b0=document.getElementById("p1").innerHTML;
b1=document.getElementById("p2").innerHTML;
b2=document.getElementById("p3").innerHTML;
b3=document.getElementById("p4").innerHTML;
b4=document.getElementById("p5").innerHTML;
b5=document.getElementById("p6").innerHTML;
b6=document.getElementById("p7").innerHTML;
b7=document.getElementById("p8").innerHTML;
b8=document.getElementById("p9").innerHTML;
var k1= b0==yayy&&b1==yayy&&b2==yayy
var k2=b3==yayy&&b4==yayy&&b5==yayy;
var k3=b6==yayy&&b7==yayy&&b8==yayy;
var k4=b0==yayy&&b3==yayy&&b6==yayy;
var k5=b1==yayy&&b4==yayy&&b7==yayy;
var k6=b2==yayy&&b5==yayy&&b8==yayy;
var k7=b0==yayy&&b4==yayy&&b8==yayy;
var k8=b2==yayy&&b4==yayy&&b6==yayy;
var finalTest=k1||k2||k3||k4||k5||k6||k7||k8
if(finalTest){
    keep=0;
    winner=yayy;
    winAlrt();
    setTimeout(start,3000);
    
}
else if(b0!=="" && b1!=="" && b2!=="" && b3!==""&& b4!==""&& b5!==""&& b6!==""&& b7!==""&& b8!==""){
    winner="Congratulations!! <br/> You are all <b>loserzzzz!!</b>";
    loseAlrt();
    setTimeout(start,3000);
}
}

// start game single player-------------------------------------------------------------------------------
//restart game ----------------------------------------------------------------------------

function start(){
    bb=0;
    keep=1;
    place= [0,0,0,0,0,0,0,0,0];
    for(i=1; i<10; i++){
        document.getElementById("p"+i).innerHTML="";
        document.getElementById("p"+i).style.backgroundColor="rgb(142, 199, 142)";
    }
    document.getElementById("plyr").innerHTML="Player X";
    showT();
      }

//selecting tiles------------------------------------------------------------------------------------
function put(e){
    var p1 = e.path[0];
    var boxNumber = p1.dataset.number;

 if (place[boxNumber]==0 && p1.innerHTML=="" && (bb==0 || bb==2 || bb==4 || bb==6 || bb==8) && keep==1){
        p1.innerHTML="X";
        p1.style.backgroundColor="rgb(136, 136, 136) ";
        place[boxNumber]="x";
        document.getElementById("plyr").innerHTML="Player O";
        bb=bb+1;
        yay("X");
    }
else if (place[boxNumber]==0 && p1.innerHTML=="" && (bb==1 || bb==3 || bb==5 || bb==7 || bb==9) && keep==1){
        p1.innerHTML="O";
        p1.style.backgroundColor="rgb(136, 136, 136) ";
        place[boxNumber]="o";
        document.getElementById("plyr").innerHTML="Player X";
        bb=bb+1;
        yay("O");
    }

else if (place[boxNumber]!==0 ){
    document.getElementById("nply").innerHTML="You can't play here again";
    function myReply(){
    document.getElementById("nply").innerHTML="";
}
    setTimeout(myReply,1500);
    
} 

}
