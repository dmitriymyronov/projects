tab_button.onclick = search_form.onmouseover = function(){

    document.getElementById('search_form').classList.add('search_form_display');
    document.getElementById('tab_button').classList.add('tab_button_last_menu_item_display');
    document.getElementById('last_menu_item').classList.add('tab_button_last_menu_item_display');
    document.querySelectorAll('nav')[0].classList.add('nav_width');

}
tab_button.onmouseout = search_form.onmouseout = function(){

    document.getElementById('search_form').classList.remove('search_form_display');
    document.getElementById('tab_button').classList.remove('tab_button_last_menu_item_display');
    document.getElementById('last_menu_item').classList.remove('tab_button_last_menu_item_display');
    document.querySelectorAll('nav')[0].classList.remove('nav_width');
}
menu_ico.onclick = drop.onmouseover = menu_close.onmouseover = function(){
    document.getElementById('drop').classList.add('drop_visible');
    document.getElementById('menu_close').classList.add('close_display');
    document.getElementById('menu_ico').classList.add('menu_ico_display');
}
menu_ico.onmouseout = drop.onmouseout = menu_close.onmouseout = menu_close.onclick = function(){
    document.getElementById('drop').classList.remove('drop_visible');
    document.getElementById('menu_close').classList.remove('close_display');
    document.getElementById('menu_ico').classList.remove('menu_ico_display');
}

function getCartData(){
    return JSON.parse(localStorage.getItem('cart'));
}
function setCartData(o){
    localStorage.setItem('cart', JSON.stringify(o));
    return false;
}

var totPrice = document.getElementById('tot_price');
var count = 0;

window.onload = function openCart(){
    var cartData = getCartData();
    if(cartData !== null){
        if (cartData['totalPrice'][0] < 0){
            cartData['totalPrice'][0] *= -1;
        }

        totPrice.innerHTML = "£ " + cartData['totalPrice'][0].toFixed(2) + " (" + cartData['totalPrice'][1] + ")";
        
    }

    return false;
}