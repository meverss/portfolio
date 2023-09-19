    
    const f_form = document.getElementById('contact_form');
    const f_name = document.getElementById('name');
    const f_email = document.getElementById('email');
    const f_message = document.getElementById('message');
    const f_btn = document.getElementById('btn_send');
    const valid_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

    f_name.addEventListener('focusout', e =>{
        if(f_name.value.length < 2){
            f_btn.disabled = true;
            f_name.classList.add('wrong', 'animate__animated', 'animate__shakeX');
            f_name.value = '';
            f_name.placeholder = 'More than one character, please';
            setTimeout(e => {f_name.classList.remove('wrong', 'animate__animated', 'animate__shakeX');},1000);
            setTimeout(e => { f_name.placeholder = 'Who is writing me?';}, 3000);
        }
    })

    f_email.addEventListener('focusout', e => {
        if(!valid_email.test(f_email.value)){
            f_btn.disabled = true;
            f_email.classList.add('wrong', 'animate__animated', 'animate__shakeX');
            f_email.value = '';
            f_email.placeholder = 'Enter a valid e-mail address';
            setTimeout(e => {f_email.classList.remove('wrong', 'animate__animated', 'animate__shakeX');},1000);
            setTimeout(e => { f_email.placeholder = 'your@email.here';}, 3000);
        } 
    })

    f_message.addEventListener('focus', e => {
        if((f_name.value != '') && (f_email.value != '')){
            f_btn.disabled = false;
        } 
    })

    f_form.addEventListener('submit', e => {
        e.preventDefault();
        if(f_message.value.length > 4){
            f_form.submit();
            var fields = document.querySelectorAll('.frm_text');
            fields.forEach(field => {
                field.value = '';
            })
        } else {
            f_message.classList.add('wrong', 'animate__animated', 'animate__shakeX');
            f_message.value = '';
            f_message.placeholder = 'Please, write something!';
            setTimeout(e => {f_message.classList.remove('wrong', 'animate__animated', 'animate__shakeX');},1000);
            setTimeout(e => { f_message.placeholder = 'Leave me your message';}, 3000);
        }
    })

