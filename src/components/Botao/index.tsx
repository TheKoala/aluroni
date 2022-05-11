import styles from './Botao.module.scss';

interface Props {
    nome: string
}

export default function Botao(props: Props){
	return(
		<button className={styles.botao}>{props.nome}</button>
	);
}