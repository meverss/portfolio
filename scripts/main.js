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

function show_cookies_policy(){
    window.open('/pages/cookies.html', '', 'resizable=no, top=200, left=500, width=800, height=600');
}

