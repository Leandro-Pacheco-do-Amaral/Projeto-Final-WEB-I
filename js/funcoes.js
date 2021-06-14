function abrirModal(){
    document.getElementById('cortina').style.backgroundColor = "rgba(0,0,0,0.7)";
    document.getElementById('cortina').style.height = "100%";
    document.getElementById('cortina').style.width = "100%";
    document.getElementById('modal').style.visibility = "visible";
    document.getElementById('modal').style.opacity = "1"; 
    document.getElementById('modal').style.transitionDuration = "1s"; 
}

function fecharModal(){
    document.getElementById('cortina').style.backgroundColor = "rgba(0,0,0,0)";
    document.getElementById('cortina').style.height = "0";
    document.getElementById('cortina').style.width = "0";
    document.getElementById('modal').style.visibility = "hidden";
    document.getElementById('modal').style.opacity = "0";
    document.getElementById('modal').style.transitionDuration = "0s"; 

}

function abrirLink(){
    window.open('https://resultadosdigitais.com.br/blog/site-responsivo/', '_blank');
}

function validarForm(){
     var nome = document.getElementById('nome').value;
     var sobrenome = document.getElementById('sobrenome').value;
     var email = document.getElementById('email').value;
     var telefone = document.getElementById('telefone').value;
     var mensagem = document.getElementById('mensagem').value;

     if (!nome || !sobrenome || !email || !telefone || !mensagem){
         alert('Preencha todos os dados!');
         if(!nome){
            document.getElementById('nome').style.border="solid 1px red";
         }else{
            document.getElementById('nome').style.border="solid 1px black";
         }

         if(!sobrenome){
            document.getElementById('sobrenome').style.border="solid 1px red";
         }else{
            document.getElementById('sobrenome').style.border="solid 1px black";
         }

         if(!email){
            document.getElementById('email').style.border="solid 1px red";
         }else{
            document.getElementById('email').style.border="solid 1px black";
         }

         if(!telefone){
            document.getElementById('telefone').style.border="solid 1px red";
         }else{
            document.getElementById('telefone').style.border="solid 1px black";
         }

         if(!mensagem){
            document.getElementById('mensagem').style.border="solid 1px red";
         }else{
            document.getElementById('mensagem').style.border="solid 1px black";
         }

     }else{
         alert('Sucesso!');
         document.getElementById('nome').style.border="solid 1px black";
         document.getElementById('sobrenome').style.border="solid 1px black";
         document.getElementById('email').style.border="solid 1px black";
         document.getElementById('telefone').style.border="solid 1px black";
         document.getElementById('mensagem').style.border="solid 1px black";
         document.getElementById('nome').value='';
         document.getElementById('sobrenome').value='';
         document.getElementById('email').value='';
         document.getElementById('telefone').value='';
         document.getElementById('mensagem').value='';
     }
 }