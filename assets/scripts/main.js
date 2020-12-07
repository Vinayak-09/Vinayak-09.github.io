function clicked(siteName){
    var URL ='';
    if(siteName == 'fb'){
        URL = 'https://www.facebook.com/Vinayak8600/'
    }
    if(siteName == 'ig'){
        URL = 'https://www.instagram.com/vinayak_patil_09/'
    }
    if(siteName == 'gh'){
        URL = 'https://github.com/Vinayak-09'
    }
    if(siteName == 'tw'){
        URL = 'https://twitter.com/vinayakm777'
    }
    window.open(URL, '_blank');
}