import React from "react";
import { Label, Grupoinput, Input, LeeyendaError, IconoValidacion, expresionRegular} from "./../Elementos/Formulario";
import { faCircleCheck, faTimesCircle} from '@fortawesome/free-solid-svg-icons'

const InputComponente = ({estado, cambiarEstado, label, placeholder,name, tipo, leeyendaError, expresionRegular, funcion}) => {
   
    const onChange= (e) => {
        cambiarEstado({...estado, campo: e.target.value});
    }

    const validacion = () => {
     if(expresionRegular){
         if(expresionRegular.test(estado.campo)) {
            cambiarEstado({...estado, valido: 'true'});
      } else{
          cambiarEstado({...estado, valido: 'false'});
      }
    }
    if(funcion){
        funcion();
    }
 }
    return ( 
        <div>
            <Label htmlFor={name} valido={estado.valido}>{label}</Label>
        <Grupoinput>
        <Input type={tipo}
               placeholder={placeholder} 
               id={name}
               value={estado.campo}
               onChange={onChange}
               onKeyUp={validacion}
               onBlur={validacion}
               expresionRegular={validacion}
               valido={estado.valido}
               />
        <IconoValidacion 
            icon={estado.valido === 'true' ? faCircleCheck : faTimesCircle}
            valido={estado.valido
        }/>
        </Grupoinput>
              <LeeyendaError valido={estado.valido}>{leeyendaError}</LeeyendaError>
          </div>
    );
 }
 export default InputComponente ;