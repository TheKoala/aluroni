import styles from './Cardapio.module.scss';
import Buscador from './Buscador';
import { useState } from 'react';
import Filtros from './Filtros';
import Ordenador from './Ordenador';
import Itens from './Itens';
import stylesTema from 'styles/Tema.module.scss';

export default function Cardapio() {

	const [busca, setBusca] = useState('');
	const [filtro, setFiltro] = useState<number | null>(null);
	const [ordem, setOrdem] = useState('');

	return (
		<section className={styles.cardapio}>
			<h3 className={stylesTema.titulo}>Cardápio</h3>
			<Buscador busca={busca} setBusca={setBusca} />
			<div className={styles.cardapio__filtros}>
				<Filtros filtro={filtro} setFiltro={setFiltro} />
				<Ordenador ordem={ordem} setOrdem={setOrdem} />
			</div>
			<Itens busca={busca} filtro={filtro} ordem={ordem} />
		</section>
	);
}