var cartCont = document.getElementById('bag_content');
var totPriceBag = document.getElementById('tot_price_bag');
var cartData = getCartData();

function openCart(){
            totalItems = '';
            
    // console.log(JSON.stringify(cartData));
    if(cartData !== null){
        for(var items in cartData){
            if (items !== 'totalPrice') {
                st = '';
                if (cartData[items][4] < 1){
                    st = 'block';
                    console.log(st);
                }
                
                totalItems += '<div class="item"><div class="item_hover" style="display:';
                totalItems += st;
                totalItems += '"></div><figure><div class="item_img"><div class="hover"></div><img src="img/arr1.jpg" alt=""></div><figcaption>£ <span id="price">';
                totalItems += cartData[items][0];
                totalItems += '</span></figcaption></figure><div class="details"><h4>'
                totalItems += cartData[items][1];
                totalItems += '</h4><p>Color: <span id="color">'
                totalItems += cartData[items][2];
                totalItems += '</span></p><p>Size: <span id="size">'
                totalItems += cartData[items][3];
                totalItems += '</span></p><p>Quantity: <span>'
                totalItems += cartData[items][4];
                totalItems += '</span></p><button id="remove_item">Remove item</button></div></div>';
            } else {
                if (cartData[items][0] < 0){
                    cartData[items][0] *= -1;
                }
                totPriceBag.innerHTML = '£ ' + cartData[items][0].toFixed(2);
                totPrice.innerHTML = '£ ' + cartData[items][0].toFixed(2);
            }
        }
        cartCont.innerHTML = totalItems;
        buy.style.display = 'block';
    } else {
        cartCont.innerHTML = '<p class="empty">Your shopping bag is empty. Use <a href = "catalog.html">Catalog</a> to add new items.</p>';
    }

    var remove = document.querySelectorAll('#remove_item');

    Array.prototype.slice.call(remove).forEach(function(rem) {
        rem.onclick = function () {
            
            var itemTitle = this.parentElement.querySelector('h4').innerHTML;
            var itemColor = this.parentElement.querySelector('#color').innerHTML;
            var itemSize = this.parentElement.querySelector('#size').innerHTML;
            var itemPrice = this.parentElement.parentElement.querySelector('#price').innerHTML;
            var itemId = itemTitle + ' ' + itemSize + ' ' + itemColor;

            cartData[itemId][4] --;
            cartData['totalPrice'][0] -= itemPrice;
            setCartData(cartData);
            openCart();
            if (cartData[itemId][4] < 1){
                rem.parentElement.parentElement.childNodes[0].style.display = 'block';
            }

            console.log(cartData['totalPrice']);
        }
    });

    return false;
}
openCart();

document.getElementById('empty_bag').onclick = function(){
    localStorage.removeItem('cart');
    cartCont.innerHTML = '<p class="empty">Your shopping bag is empty. Use <a href = "catalog.html">Catalog</a> to add new items.</p>';
    buy.style.display = '';    
};

document.getElementById('buy_now').onclick = function(){
    localStorage.removeItem('cart');
    cartCont.innerHTML = '<p class="empty">Thank you for your purchase</p>';
    buy.style.display = '';    
};


console.log(document.querySelector('#price'));