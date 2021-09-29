
export const verificarExpresion = input => {
    let errors = {}
  
    if(!input.email){
      errors.email = 'Debes ingresar un correo'
    } else if(
      !/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(input.email)
    ) errors.email = 'El formato del correo debe ser texto@texto.texto en minúsculas'
    
    if(!input.password){
          errors.password = 'Debes ingresar la contraseña';
    }else if (!/(?=.*[0-9])/.test(input.password)) {
        errors.password = 'La contraseña debe tener mínimo un número';
    }

    if(!input.nit){
        errors.nit = 'Debes ingresar el NIT de la empresa';
    }else if (!/^[0-9]*$/.test(input.nit)) {
        errors.nit = 'Sólo se admiten números';
    } else {
        if (input.nit.length < 9 && /^[0-9]*$/.test(input.nit)) {
            errors.nit = 'El Nit debe contener 9 dígitos'
        } 
    }

    return errors
}

