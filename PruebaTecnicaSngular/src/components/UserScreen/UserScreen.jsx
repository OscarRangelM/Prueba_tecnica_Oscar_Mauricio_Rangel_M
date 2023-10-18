import styles from './UserScreen.module.css';
import { useState } from 'react';
import ResultsScreen from '../ResultsScreen/ResultsScreen.jsx';

import { NSerie } from '../FunctionComponents/FunctionCoponents';

export default function UserScreen() {

    const [numSerie, setNumSerie] = useState(1)
    const [resultadoN, setResultadoN] = useState(3)

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
            <h2>Selecciona el valor de n</h2>
            <form className={styles.formSection} onSubmit={handleSubmit} >
                <input type='number' className={styles.inputNumero} name="numero" min={1} max={100} onChange={handleChange} value={numSerie}></input>
                <hr />
                <div>
                <input type="submit" className={styles.bttnSubmit} value="Calcular" />
                </div>
            </form>
            <ResultsScreen resultado={`${resultadoN}`} />
        </div>
    );
}