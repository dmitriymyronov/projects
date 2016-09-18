var count = 1;
var list = carousel.querySelector('ul');
var car_items = list.querySelectorAll('li');
var scroll = document.querySelector('.scroll');


function dotsAdd () {
    scroll.innerHTML += '<div class = "scroll1"></div>'; 
}
for (var p = 0; p < car_items.length; p++){
    dotsAdd();
}


var dots = document.querySelectorAll('.scroll1');

dots[0].style.backgroundColor = '#f14a58';

function move() {
    if (count == 5) {
        count = 0;
    }

    for (var n = 0; n < dots.length; n++){
        dots[n].style.backgroundColor = '';
    }

    dots[count].style.backgroundColor = '#f14a58';
    if (count == 2){
        dots[count].style.backgroundColor = '#50c1e9';
    }

    list.style.marginLeft = -100*count + '%';
    count++;
}

var slide = setInterval(move, 3000);

list.onmouseout = function () {
    if (!self.slide) 
    slide = setInterval (move, 3000);
}
list.onmouseover = function () {
    if (!!self.slide) 
    clearInterval (slide); 
    slide = null;
}

Array.prototype.slice.call(dots).forEach(function(dotItem, i) {
    dotItem.onclick = function () {
        for (var n = 0; n < dots.length; n++){
            dots[n].style.backgroundColor = '';
        }

        dotItem.style.backgroundColor = '#f14a58';
        if (i == 2){
            dotItem.style.backgroundColor = '#50c1e9';
        }

        count = i;
        list.style.marginLeft = -100*count + '%';
        count++;
    }
});

function bannerChange() {
    watches.style.display = 'inline-block';
    ban_tab_hover.style.display = 'none';
}
function bannerChangeBack(){
    watches.style.display = '';
    ban_tab_hover.style.display = '';
}

setTimeout(bannerChange, 3000);
setTimeout(bannerChangeBack, 6000);

setInterval(function(){
    setTimeout(bannerChange, 3000);
    setTimeout(bannerChangeBack, 6000);
},6000);


