import styles from './ResultsScreen.module.css';

export default function ResultsScreen(props) {
    const resultado = props;
    console.log(resultado.resultado)
    return (
        <div className={styles.divResults}>
            <div >
                <p className={styles.pResultado}>Serie(n) = 2triangular(n+1) - 2primo(n) +fibonacci(n+1) = {`${resultado.resultado}`}</p>
            </div>
        </div>
    );
}