var smallImg = document.querySelectorAll('.small');

// console.log(smallImg);

Array.prototype.slice.call(smallImg).forEach(function(smallItem, i) {
    smallItem.onclick = function () {
        var bigImg = smallItem.parentElement.parentElement.childNodes[1];
        for (var n = 0; n < bigImg.childNodes[1].childNodes.length; n++){
            
            var del = bigImg.childNodes[1].childNodes[n];

            if (del.nodeType == 3) {
                bigImg.childNodes[1].removeChild(del);
            }
        }

        for (var a = 0; a < bigImg.childNodes[1].childNodes.length; a++){
            bigImg.childNodes[1].childNodes[a].style.display = 'none';
        }

        for (var b = 0; b < smallImg.length; b++) {
            smallImg[b].childNodes[1].style.display = 'none';
        }

        smallItem.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[i].style.display = 'block';
        smallItem.childNodes[1].style.display = 'block';
    }
});

var sizes = size.querySelectorAll('li');
var colors = color.querySelectorAll('li');

Array.prototype.slice.call(sizes).forEach(function(sizeItem) {
    sizeItem.onclick = function() {
        for (var i = 0; i < sizes.length; i++){
            sizes[i].style.backgroundColor = 'transparent';
            sizes[i].id = '';
        }

        sizeItem.style.backgroundColor = '#707070';
        sizeItem.id = 'size_choosen';
    }
});

Array.prototype.slice.call(colors).forEach(function(colorItem) {
    colorItem.onclick = function() {
        for (var i = 0; i < colors.length; i++){
            colors[i].style.backgroundColor = 'transparent';
            colors[i].id = '';
        }

        colorItem.style.backgroundColor = '#707070';
        colorItem.id = 'color_choosen';
    }
});


// localStorage

var item = document.querySelectorAll('.options');


item[0].querySelector('button').onclick = function addToCart(){
    if (document.querySelector('#size_choosen') !== null && document.querySelector('#color_choosen') !== null) {

        var cartData = getCartData() || {},
                itemTitle = document.querySelector('#item_title').innerHTML,
                itemPrice = document.querySelector('#item_price').innerHTML,
                itemSize =  document.querySelector('#size_choosen').childNodes[0].innerHTML,
                itemColor = document.querySelector('#color_choosen').childNodes[0].innerHTML,
                itemId = itemTitle + ' ' + itemSize + ' ' + itemColor;

        if(cartData.hasOwnProperty('totalPrice')){
            cartData['totalPrice'][0] += +itemPrice;
        } else{
            cartData['totalPrice'] = [+itemPrice, 0];
        }

        console.log(count);

        if(cartData.hasOwnProperty(itemId)){
            cartData[itemId][4]++;
        } else {
            cartData[itemId] = [itemPrice, itemTitle, itemColor, itemSize, 1];
            cartData['totalPrice'][1]++;
        }
        setCartData(cartData);
        
        return false;
    } else {
        alert('You should choose size and color');
    }
}
