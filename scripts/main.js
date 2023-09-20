// SHOW WEBSITE AFTER LOADED
function show_page(){
    page_content.style.opacity = '1';
    page_loader.style.display = 'none';
    document.body.style.overflow = 'auto';
    document.getElementById('btn_send').disabled = true;
}

// SHOW/HIDE ALTERANTIVE MENU

m_menu_open_btn.addEventListener('click', showmenu);
m_menu_close_btn.addEventListener('click', hidemenu);

function showmenu(){
    m_menu_open_btn.style = 'display: none; right: 0;';
    m_menu_close_btn.style = 'display: flex; right: 0;';
    m_menu.style['transform'] = 'translate(0%)';
}

function hidemenu(){
    m_menu_close_btn.style = 'display: none; right: 0;';
    m_menu_open_btn.style = 'display: flex; right: 0;';
    m_menu.style['transform'] = 'translate(100%)';
}

const m_menu_items = document.querySelectorAll('.m_menu_item');

m_menu_items.forEach(menu => {
    menu.addEventListener('click', function(){
        m_menu.style['transform'] = 'translate(100%)';
        hidemenu();
    });
})


// SACROLL TO SECTIONS

function scroll_to_section(section){
    var element = document.getElementById(section);
    var position = element.offsetTop;
    window.scrollTo(0, position - 200);
    }
function scroll_to_section_m(section){
    var element = document.getElementById(section);
    var position = element.offsetTop;
    window.scrollTo(0, position - 75);
}

var menu = document.querySelectorAll('.menu_item');
var alt_menu = document.querySelectorAll('.m_menu_item');

menu.forEach(obj => {
    if(obj.classList[1] != 'm_menu_item'){
        if(obj.id != ''){
            const sec = obj.id;
            obj.addEventListener('click', function(){
                scroll_to_section('s_'+sec);
            });
        }
    }
})

alt_menu.forEach(obj1 => {
    if(obj1 != 's_m_menu_open_btn'){
        obj1.addEventListener('click', function(){
                scroll_to_section_m('s_'+obj1.id);
            });
    }
    
})

//COPYRIGHT
const fecha = new Date();
const copyright = 'Copyright ©'+ fecha.getFullYear()+' KiniunTech.';
footer.innerHTML = copyright;
my_age.innerHTML = fecha.getFullYear() - 1985;


// TEST

// fetch('./languages/languages.json')
// .then(resp => resp.json())
// .then(d => showInfo(d));

// function showInfo(){
//     console.table(data.languages);
// }

// SHARE MY PORTFOLIO

const social_n = document.querySelectorAll('.social_item');
const my_website = encodeURIComponent(location.origin + '/portfolio');
const my_website_title = document.title;
const url_facebook = 'http://www.facebook.com/sharer.php?u='+ my_website +'&t= Marvin%27s%20Portfolio';
const url_tweeter = 'https://twitter.com/intent/tweet?url=' + my_website + '&text = Marvin%27s%20Portfolio';
const url_linkedin = 'https://www.linkedin.com/shareArticle?mini=true&url=' + my_website;
const url_telegram = 'https://telegram.me/share/url?url=' + my_website + '&text = Marvin%27s%20Portfolio';

social_n.forEach(item => {
    item.addEventListener('click', function(){
        link = 'url_' + item.id;
        window.open(eval(link), '_blank', 'resizable=no, toolbar=0, status=0');
    });
})


// FORM FIELDS DATA TYPE

const fields = document.querySelectorAll('.frm_text');

fields.forEach(field => {
    switch(field.id) {
        case "email":
            field.type = 'email';
            break;
        default:
            field.type = 'text';
            break;    
    }
});


