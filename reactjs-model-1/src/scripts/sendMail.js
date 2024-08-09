import emailjs from '@emailjs/browser';

export function sendMail(value){
    let response = emailjs.sendForm( 
        'service_tvstodm', 
        'template_4hg7hub', 
        value,
        'XJOkEf_PxSQzg_CcP'
    )
    .then((result) => result.text, (error) => error.text);
    return response;
}