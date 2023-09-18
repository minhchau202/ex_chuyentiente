function convert(){
    let money = document.getElementById("a").value;
    let before = document.getElementById("b").value;
    let after = document.getElementById("c").value;
    if(before == after){
        alert(money)
    }if(before=="VietNam" && after=='China'){
        alert(money/3000);
    }if(before=="VietNam" && after=='Usa'){
        alert(money/22000);
    }if(before=="VietNam" && after=='Japan'){
        alert(money/165);
    }
}