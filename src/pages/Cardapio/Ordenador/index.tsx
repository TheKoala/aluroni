import styles from './Ordenador.module.scss';
import opcoes from './opcoes.json';
import { useState } from 'react';
import classNames from 'classnames';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

interface Props {
    ordem: string,
    setOrdem: React.Dispatch<React.SetStateAction<string>>
}

export default function Ordenador ({ordem, setOrdem}: Props) {

	const [aberto, setAberto] = useState(false);
	const nomeOrdem = 
        ordem && opcoes.find(opcao => opcao.value === ordem)?.nome;

	return(
		<button 
			className={classNames({
				[styles.ordenador]: true,
				[styles['ordenador--ativo']]: ordem !== ''
			})} 
			onClick={() => setAberto(!aberto)}
			onBlur={() => setAberto(false)}
		>
			<span>{nomeOrdem || 'Ordenar Por'}</span>

			{aberto ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}

			<div className={classNames({
				[styles.ordenador__options]: true,
				[styles['ordenador__options--ativo']]: aberto
			})}>
				{opcoes.map(opcao => (
					<div 
						className={styles.ordenador__option}
						key={opcao.value}
						onClick={() => setOrdem(opcao.value)}
					>
						{opcao.nome}
					</div>
				))}
			</div>
		</button>
	);
}