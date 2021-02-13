var item1 = document.getElementById('item1');
var item2 = document.getElementById('item2');
var item3 = document.getElementById('item3');
var item4 = document.getElementById('item4');
var item5 = document.getElementById('item5');
var item6 = document.getElementById('item6');
var homepage = document.getElementById('item');
var item= [homepage,item1,item2,item3,item4,item5,item6];
function showPage(id) {
    var x = document.getElementById(id);
    var i;
    for (i = 0; i => 7 ;i++ ) {
    if (item[i].style.height =  "100vh"){
        item[i].style.height =  "0";
        item[i].style.transition = "height 1.2s ease-out";
        x.style.height = "100vh";
        x.style.transition = " height 1.2s ease-out";
    }
    else {
        x.style.height = "100vh";
        x.style.transition = "height 1.1s ease";
    }
}

}

