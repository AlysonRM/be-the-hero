import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import api from '../../services/api';

import './style.css';

import logoIMG from '../../assets/logo.svg';

export default function NewIncidents() {
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState(0);
    const history = useHistory();

    const ongId = localStorage.getItem('ongID');

    async function handleIncidentNew(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };

        try {
            await api.post('/incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            });
            history.push('/profile');
        } catch(err) {
            alert('Erro ao cadastro caso, tente novamente.');
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoIMG} alt="Be The Hero"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o novo caso detalhamente para encontrar um novo heroi para resolver isso.</p>
                    <Link className="black-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para home.
                    </Link>
                </section>
                <form onSubmit={handleIncidentNew}>
                    <input 
                        placeholder="Título do caso" 
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea 
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input 
                        placeholder="Valor em reais" 
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}