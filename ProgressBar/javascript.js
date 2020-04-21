(function readyJS(win, doc){

    'use strict';

    let form1=doc.querySelector('#form1');

    //submit form
    function sendForm(event)
    {
        event.preventDefault();
        let ajax=new XMLHttpRequest();
        let formData=new FormData(form1);
        let btn=doc.querySelector('#btn');
        let result=doc.querySelector('#result');

        ajax.open('POST','controller.php');
        ajax.onloadstart=function()
        {
            btn.value='Carregando ...';
        };
        ajax.upload.onprogress=function(event)
        {
            console.log(event);
        };
        ajax.onloadend=function()
        {
            btn.value='Salvar';
            result.innerHTML='Foto carregada com sucesso';
        };
        ajax.send(formData);
    }
    form1.addEventListener('submit', sendForm,false);
})(window, document);