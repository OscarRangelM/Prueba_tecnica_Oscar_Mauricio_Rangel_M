import styles from './ResultsScreen.module.css';

export default function ResultsScreen(props) {
    const resultado = props;
    console.log(resultado.resultado)
    return (
        <div className={styles.divResults}>
            <div >
                <p>aqui va el resultado. {`${resultado.resultado}`}</p>
            </div>
        </div>
    );
}