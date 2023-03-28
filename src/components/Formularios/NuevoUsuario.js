
import { useState, React } from "react";
import { json } from "react-router-dom";

const NuevoUsuario = ({usuario, setUsuario}) => {

    const handleChange = e =>{
        setUsuario({
            ...usuario, 
            [e.target.name]: e.target.value
        })
    }

    let {user_name, user_pass /*,user_pass2*/} = usuario

    const handleSubmit = () => { // Submit de información a la base de datos "POST"

        // Validación de los datos
        if (user_name === "" || user_pass === "" /*|| user_pass2 === ""*/) { //Podemos sacar esos datos desde antes si llegaramos a necesitar editarlos metiendolos a una variable
            alert("Todos los campos son obligatorios")
            return
        }
        //else if (user_pass !== user_pass2 ) { //Podemos sacar esos datos desde antes si llegaramos a necesitar editarlos metiendolos a una variable
        //    alert("La contraseña no coincide")
        //    return
        //}

        //Consulta
        const requestInit = {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(usuario)
        }

        //Hacemos el POST
        fetch('http://localhost:9000/api/usuarios', requestInit)
            .then(res => res.json())
            .then(res => console.assert.log(res))

        //Reiniciamos el state para que vuelva a aparecer en blanco
        setUsuario({
            user_name: '',
            user_pass: ''
        })

    }

    // Esta variable determina si se ve o no se ve la contraseña
    const [isShown, setIsSHown] = useState(false);

    // Se llama a esta funcion cuando se activa o desactiva la checkbox
    const togglePassword = () => {
        setIsSHown((isShown) => !isShown);
    };

    return (
        <form onSubmit={handleSubmit}>
            <br></br>
            <div className='mb-3'>
                <label className='form-label' htmlFor='nombre'> Nombre </label>
                <input name="user_name" onChange={handleChange} type='text' className='form-control' id='nombre' placeholder="Nombre"></input>
            </div>
            <div className='mb-3'>
                <label className='form-label' htmlFor='contraseña'> Contraseña </label>
                <input
                    type={isShown ? "text" : "password"}
                    placeholder="Contraseña"
                    className="form-control"
                    id='contraseña'
                    onChange={handleChange}
                    name="user_pass"
                />
                </div>
                <div className='mb-3'>
                <div className="checkbox-container">
                    <label htmlFor="checkbox">Mostrar </label>
                    <input
                        id="checkbox"
                        type="checkbox"
                        checked={isShown}
                        onChange={togglePassword}
                    />
                </div>
                </div>
                <button type="submit" className='btn btn-primary'>Crear</button>
        </form>
    );
}

export default NuevoUsuario;