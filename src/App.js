import React, { useState }from "react";
import { Formulario, Label, ContenedordeTerminos, ContenedorBotonCentrado, Boton, MensajedeExito, MensajedeError} from "./Elementos/Formulario";

import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import InputComponente from "./Componentes/Input";



const App = () => {

  const[usuario, cambiarUsuario] = useState({campo: "", valido: null});
  const[nombre, cambiarNombre] = useState({campo: "", valido: null});
  const[password, cambiarPassword] = useState({campo: "", valido: null});
  const[password2, cambiarPassword2] = useState({campo: "", valido: null});
  const[correo, cambiarCorreo] = useState({campo: "", valido: null});
  const[telefono, cambiarTelefono] = useState({campo: "", valido: null});
  const[terminos, cambiarTerminos] = useState(false);
  const[formularioValido, cambiarFormularioValido] = useState(null); 

  const expresiones = {
    usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
  }

const validarPassword2 = () => {
  if(password.campo.length > 0){
    if(password.campo !== password2.campo){
      cambiarPassword2((prevState) => {
          return {...prevState, valido: 'false'}
      });
    } else{
      cambiarPassword2((prevState) => {
        return {...prevState, valido: 'true'}
    });
    }
  }
}

    const onChangeTerminos = () => {
      cambiarTerminos(e.target.checked);
    
    }
    const onSubmit = (e) => {
      e.preventDefault();

      if(
        usuario.valido === 'true' && 
        nombre.valido === 'true' &&
        password.valido === 'true' &&
        password2.valido === 'true' &&
        correo.valido === 'true' &&
        telefono.valido === 'true' &&
        terminos
        ){
          cambiarFormularioValido(true);
          cambiarUsuario({campo: '', valido:''});
          cambiarNombre({campo: '', valido:null});
          cambiarPassword({campo: '', valido:null});
          cambiarPassword2({campo: '', valido:'null'});
          cambiarCorreo({campo: '', valido:null});
          cambiarTelefono({campo: '', valido:null});
    } else{
          cambiarFormularioValido(false);
    }
  }
  return (
      <main>
        <Formulario action="" onSubmit={onSubmit}>
           <InputComponente
           estado={usuario}
           cambiarEstado={cambiarUsuario} 
           tipo= "text"
           name= "usuario"
           label="Usuario"
           placeholder="Jhon128"
           leeyendaError="El usuario tiene que ser de 4 a 16 digitos y solo puede contener letras, numeros y guion bajo."
           expresionRegular={expresiones.usuario}
            />
           <InputComponente
           estado={nombre}
           cambiarEstado={cambiarNombre} 
           tipo= "text"
           name= "nombre"
           label="Nombre"
           placeholder="Jhon Armando"
           leeyendaError="El usuario tiene que ser de 4 a 16 digitos y solo puede contener letras, numeros y guion bajo."
           expresionRegular={expresiones.nombre}
            />
          <InputComponente
          estado={password}
          cambiarEstado={cambiarPassword} 
           tipo= "password"
           name= "password1"
           label="Contraseña"
           placeholder=""
           leeyendaError="La contraseña debe tener de 4 a 12 digitos."
           expresionRegular={expresiones.password}
            />

            <InputComponente
            estado={password2}
            cambiarEstado={cambiarPassword2} 
           tipo= "password"
           name= "password2"
           label="Contraseña"
           placeholder=""
           leeyendaError="La contraseña no coincide"
           funcion={validarPassword2}
             
            />
           <InputComponente
           estado={correo}
           cambiarEstado={cambiarCorreo}
           tipo= "text"
           name= "correo"
           label="Correo"
           placeholder="bastian@gmail.com"
           leeyendaError="Correo invalido"
           expresionRegular={expresiones.correo}
            />
          <InputComponente
          estado={telefono}
          cambiarEstado={cambiarTelefono}
           tipo= "text"
           name= "telefono"
           label="Telefono"
           placeholder="+56 9 5555 3333"
           leeyendaError="Numero no existe"
           expresionRegular={expresiones.telefono}
            />
        <ContenedordeTerminos>
          <Label>
            <input 
            name="terminos" 
            id="terminos"
           type="checkbox"
           checked={terminos}
           onChange={cambiarTerminos}
           />
            Acepto los terminos y condiciones.
          </Label>
        </ContenedordeTerminos>
         {formularioValido === false && <MensajedeError>
          <p>
            <FontAwesomeIcon icon={faTriangleExclamation}/>
            <b>Error:</b> Por favor rellene el formulario correctamente.
        </p>
      </MensajedeError>}
      <ContenedorBotonCentrado>
        <Boton type="submit">Enviar</Boton>
       {formularioValido === true && <MensajedeExito>Enviado exitosamente!</MensajedeExito>}
        </ContenedorBotonCentrado>
       </Formulario>
      </main>
  );
}

export default App;