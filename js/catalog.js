var list = document.querySelectorAll('.options');
var spans = document.querySelector('.filter_cont').querySelectorAll('span');
var range = document.getElementById('price_range');
var min = 12;
var max = 650;
var show = document.getElementById('show');
var figures = document.querySelectorAll('.hide_fig');

Array.prototype.slice.call(list).forEach(function(listItem, m){
    listItem.onclick = function(){
        listItem.parentElement.parentElement.style.fontSize = '12px';
        listItem.parentElement.parentElement.style.backgroundColor = '#f7f7f7';
        listItem.parentElement.parentElement.style.padding = '14px 0';
        listItem.parentElement.parentElement.childNodes[3].innerHTML = this.innerHTML;

        for (var n = 0; n < listItem.parentElement.querySelectorAll('.options').length; n++){
            listItem.parentElement.querySelectorAll('.options')[n].childNodes[0].style.color = '';

        }
        listItem.childNodes[0].style.color = '#f14a58';

        for (var i = 0; i < spans.length; i++){
            if (spans[i].id == listItem.parentElement.parentElement.childNodes[1].innerHTML){
                spans[i].innerHTML = this.innerHTML;
                spans[i].style.color = '#f14a58';
                if (listItem.childNodes[0].innerHTML == 'Not selected'){
                    spans[i].innerHTML = spans[i].id;
                    spans[i].style.color = '';
                    listItem.childNodes[0].style.color = '';
                }           
            }
        }
    };
});

range.onmouseleave = function(){
    range.parentElement.parentElement.style.paddingTop = '7px';
    range.parentElement.parentElement.classList.add('noafter');
    inner = '';
    inner += '<div class="slider"><div class="min"></div><div class="max"></div><input type="range" step="0.01" min="0" max="1000" value="';
    inner += min + ',' + max;
    inner += '"/></div>';
    range.parentElement.parentElement.innerHTML = inner;
    slider();
}


function slider(){
    $(function (){
        
        $('input[type=range]').nativeMultiple({
            stylesheet: "slider",
            onCreate: function(first_value, second_value) {
                $('.min').html("£ " + min);
                $('.max').html("£ " + max);
            },
            onChange: function(first_value, second_value) {
                $('.min').html("£ "+first_value);
                $('.max').html("£ "+second_value);
                min = first_value;
                max = second_value;
            },
            onSlide: function(first_value, second_value) {
                $('.min').html("£ "+first_value);
                $('.max').html("£ "+second_value);
            },
        });
    });
}

slider();

show.onclick = function () {
    for (var i = 0; i < figures.length; i++){
        figures[i].style.display = 'inline-block';
    }
    show.style.display = 'none';
}