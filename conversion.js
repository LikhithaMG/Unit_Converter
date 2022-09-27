function wgconverter(){
    var data=document.getElementById("weight").value;
    var select=document.forms["one"].option.value;
    var result="Please select any unit"
    if(select=="one"){
       result=(data*1000+"mg");
    }
    if(select=="two"){
       result=(data*100+"cg");
    }
    if(select=="three"){
       result=(data*10+"dg");
    }
    if(select=="four"){
       result=(data+"g");
    }
    if(select=="five"){
       result=(data/1000+"kg");
    }
    if(select=="six"){
       result=(data/1000000+"t");
    }
    if(select=="seven"){
       result="Please select any on the unit";
    }
    document.getElementById("result").innerHTML=result;
}
function lgconverter(){
    var data=document.getElementById("length").value;
    var select=document.forms["two"].option.value;
    var result="Please select any unit";
    if(select=="one"){
       result=(data*1000+"mm");
    }
    if(select=="two"){
       result=(data*100+"cm");
    }
    if(select=="three"){
       result=(data*10+"dm");
    }
    if(select=="four"){
       result=(data+"m");
    }
    if(select=="five"){
       result=(data/1000+"km");
    }
    if(select=="six"){
        result="Please select any on the unit";
    }
    document.getElementById("value").innerHTML=result;
}
function tmconverter(){
    var data=document.getElementById("time").value;
    var select=document.forms["three"].option.value;
    var result="Please select any unit";
    if(select=="one"){
       result=(data*60+"ms");
    }
    if(select=="two"){
       result=(data+"s");
    }
    if(select=="three"){
       result=(data/60+"min");
    }
    if(select=="four"){
       result=(data/3600+"hrs");
    }
    if(select=="five"){
       result=(data/86400+"days");
    }
    if(select=="six"){
        result="Please select any on the unit";
    }
    document.getElementById("solution").innerHTML=result;
}
