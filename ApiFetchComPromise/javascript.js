(function readyJS(win, doc){

    'use strict';

    let btn=doc.querySelector('#btn');
    let result=doc.querySelector('#result');

    function fetchSend()
    {
        //esses parametros ja da condição para efetuar requisição
        let params={
            method:'POST',
            mode:'cors',
            cache:'default'
        };
        /* Estrutura
            fetch(url, param)
            .then()
            .then()
        */
       //enviando uma requisição, se a resposta for ok retorna o response.json
        fetch('controller.php', params)
            .then(function(response){
                if(response.ok){
                    return response.json();
                }                
            })
            //se a resposta for ok exibe através do parametro data os dados.
            .then(function(data){
                result.innerHTML= data.name + ' tem ' + data.age + ' anos.';
            })
    }
    btn.addEventListener('click', fetchSend, false);

})(window,document);