/*the onscrollY checks the y axis of the mouse*/
/*if the y axis value is > 0 then queryselector becomes active, else*/
/*becomes not active, the top part becomes white. here it picks out the .header and activates it*/
document.onscroll = () =>{
    if(windowscrollY > 0){
        document.querySelector('.header').classlist.add('active');

    }

    else { 
        document.querySelector('.header').classlist.remove('active')
    }
};
document.onload = () => {
    if(windowscrollY > 0){
        document.querySelector('.header').classlist.add('active');
    }

    else{
        document.querySelector('.header').classlist.remove('active');

    }

}