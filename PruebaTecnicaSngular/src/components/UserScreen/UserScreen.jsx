import styles from './UserScreen.module.css';
import { useState } from 'react';
import ResultsScreen from '../ResultsScreen/ResultsScreen.jsx';

import { NSerie } from '../FunctionComponents/FunctionCoponents';

export default function UserScreen() {

    const [numSerie, setNumSerie] = useState(0)
    const [resultadoN, setResultadoN] = useState(0)

    function handleChange(e){
        setNumSerie(parseInt(e.target.value))
    }

    function handleSubmit(e) {
        e.preventDefault();
        const resSub = NSerie.serieResultados(numSerie);
        setResultadoN(resSub)
        console.log(resSub);
    }


    return (
        <div className={styles.divUser}>
            <p>Selecciona el valor de n</p>
            <form className={styles.formSection} onSubmit={handleSubmit} >
                <input type='number' className={styles.inputNumero} name="numero" onChange={handleChange} value={numSerie}></input>
                <hr />
                <div>
                <button>reset</button>
                <input type="submit" className={styles.bttnSubmit} value="Submit" />
                </div>
            </form>
            <ResultsScreen resultado={`${resultadoN}`} />
        </div>
    );
}