var bt = document.getElementsByClassName("btnAccord")

for (var i = 0; i < bt.length; i++){
    bt[i].onclick = function() {
        for (var j = 0; j < bt.length; j++){
            bt[j].nextElementSibling.classList.remove("active")
        }
        this.nextElementSibling.classList.toggle("active")
    }
}

var btTab = document.querySelectorAll(".btnTab")
var tb = document.querySelectorAll(".tabpanel")

for (var i=0; i< btTab.length; i++){
    btTab[i].onclick = function(){
        var att = this.getAttribute("aytac")
        for (var j =0;j<tb.length; j++){
            tb[j].classList.remove("active")
        }
        document.getElementById(att).classList.toggle("active")
    }
}