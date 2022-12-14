import { useState } from "react";

export default function Usuario(props) {
  const [nomeUsuario, setNomeUsuario] = useState(props.username);
  const [imageUsuario, setImageUsuario] = useState(props.imagem)

     function mudarNome(){
      const novoNome = prompt("Insira o novo nome")
      if(!novoNome)
      alert("Digite um nome valido")
      else{
      setNomeUsuario(novoNome)
      }
    }  
    function mudarFoto(){
      const novaFoto = prompt("coloque o link de uma nova foto")
      if(!novaFoto){
        alert ("digite uma URL valida")
      }else {
        setImageUsuario(novaFoto)
      }
     
      
    }
  
  return (
    <div data-test="user" class="usuario">
      <img data-test="profile-image" onClick={mudarFoto} src={imageUsuario}/>
      <div class="texto">
        <strong>{props.nome}</strong>
        <span data-test="name"> 
          {nomeUsuario}
          <ion-icon data-test="edit-name" onClick={mudarNome} name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  );
}
