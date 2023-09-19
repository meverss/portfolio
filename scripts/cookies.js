function show_cookies_policy(){
    page = location.origin +'/pages/cookies.html';
    window.open(page, '', 'resizable=no, toolbar=0, status=0, top=200, left=500, width=800, height=600');
}

PDCookieConsent.config({
    "defaultLang" : "en",
    "brand": {
        "dev" : false,
        "name": "My Portfolio",
        "url" : location.origin,
        "websiteOwner" : "KiniunTech"
    },

    "cookiePolicyLink": location.origin + "/cookies.html",
    "hideModalIn": [location.origin + "/cookies.html"],
    
    "styles": {
        "primaryButton": {
            "bgColor" : "#D2691E",
            "txtColor": "#FFFFFF"
        },
    "secondaryButton": {
        "bgColor" : "#CCC",
        "txtColor": "#333333"
    }
    }
});

