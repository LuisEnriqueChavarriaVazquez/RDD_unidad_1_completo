let browserContainer = document.getElementById('browserContainer-inputContainer');
let buttonBrowser = document.getElementById('buttonBrowser');
let inputBrowser = document.getElementById('inputBrowser');

let scrollDown, scrollUp;
window.onscroll = function () {
    scrollDown = window.scrollY;
    scrollUp = window.scrollX;

    console.log(scrollDown)

    if(scrollDown >= 105){
        browserContainer.classList.add('browserContainer-inputContainer-fixed');
        

        buttonBrowser.classList.add('buttonBrowserOwn-fixed');
        buttonBrowser.classList.add('cl1');
        buttonBrowser.classList.remove('cl5');

        inputBrowser.classList.add('browserContainer-inputContainer-input-fixed');
        
    }else{
        browserContainer.classList.remove('browserContainer-inputContainer-fixed');
        

        buttonBrowser.classList.remove('buttonBrowserOwn-fixed');
        buttonBrowser.classList.remove('cl1');
        buttonBrowser.classList.add('cl5');

        inputBrowser.classList.remove('browserContainer-inputContainer-input-fixed');
    }
};
