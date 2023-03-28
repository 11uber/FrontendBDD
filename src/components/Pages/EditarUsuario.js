import { useState, React } from "react";

const EditarUsuario = () => {

    

    // Esta variable determina si se ve o no se ve la contraseña
    const [isShown, setIsSHown] = useState(false);

    // Se llama a esta funcion cuando se activa o desactiva la checkbox
    const togglePassword = () => {
        setIsSHown((isShown) => !isShown);
    };

    return (
        <form>
            <br></br>
            <h1>Edición de cuenta</h1>
            <br></br>
            <div className='mb-3'>
                <label className='form-label' htmlFor='nombre'> Nombre </label>
                <input  type='text' className='form-control' id='nombre' placeholder="Nombre"></input>
            </div>
            <div className='mb-3'>
                <label className='form-label' htmlFor='contraseña'> Contraseña </label>
                <input
                    type={isShown ? "text" : "password"}
                    placeholder="Contraseña"
                    className="form-control"
                    id='contraseña'
                />
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
                <button className='btn btn-primary'>Submit</button>
        </form>
    );
}

export default EditarUsuario;