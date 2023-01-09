import React, { useState } from 'react';
import './style.css';
import Logo from '../assets/barbearia-logo.png';
import LogoEscuro from '../assets/barbearia-logo-escuro.png';
import Moon from '../assets/moon.png';
import Sun from '../assets/sun.png';

export default function LandingPage() {

    const [temaEscuro, setTemaEscuro] = useState(false);

    const alterarTema = () => {
        setTemaEscuro(!temaEscuro);
    };

    return (
        <div className={temaEscuro ? 'modo-escuro' : 'modo-claro'}>

            <header>
                <div className='limitar-secao'>
                    <img src={temaEscuro ? LogoEscuro : Logo} alt='Logo barbearia' className='logo'></img>

                    <button onClick={alterarTema} className={temaEscuro ? 'modo-escuro' : 'modo-claro'}>
                        <img src={temaEscuro ? Sun : Moon} alt='ícone' className="btn-icone" />
                        {temaEscuro ? `Mode Light` : `Mode Dark`}
                    </button>
                </div>
            </header>

            <section className='secao-banner'></section>

            <section className='secao-conteudo limitar-secao'>
                <div className='limitar-secao'>
                    <h1>Bem-vindo a Barber Shop</h1>

                    <p className='primeiro-paragrafo'>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</p>
                    <p className='segundo-paragrafo'>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>
                    <p className='assinatura'>S. Kelly</p>
                </div>
            </section>

        </div>
    );
}