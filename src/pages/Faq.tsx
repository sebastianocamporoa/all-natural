import React, { useState } from 'react';

interface FaqItem {
    question: string;
    answer: string;
}

const faqData: FaqItem[] = [
    { question: '¿Cuánto tiempo se demoran en realizar mi pedido?', answer: 'La espera del pedido depende de la personalización del producto. Si se piden los modelos tal cual la foto es un aproximado de 3 días hábiles, si es personalizado entre 5-7 días hábiles.' },
    { question: '¿Cómo se limpian los accesorios de All Natural?', answer: 'Al ser joyas con piedras naturales All Natural no recomienda exponerlas a productos químicos agresivos, no alcohol, perfume, entre otros. La limpieza puede ser con agua tibia, jabón neutro y un paño de microfibra. Siempre que se expongan al agua hay que asegurarse de secarlas muy bien.' },
    { question: '¿Puedo devolver mi pulsera en cualquier momento y obtener una nueva?', answer: 'Si, All Natural cuenta con una propuesta eco amigable que fomenta la reutilización del producto; es decir, si ya adquiriste una joya de la marca, puedes volver a usar los mismos materiales usando los diseños de temporada. El costo varía dependiendo a la personalización o el aumento de dijes, mientras sean los mismos materiales no tiene costo adicional.' },
    { question: '¿Cuál es el método de pago?', answer: 'Nuestro canal principal de ventas es WhatsApp, se manda un link de pago o pueden ser transferencias interbancarias.' },
    { question: '¿Pueden realizar accesorios con mis propios materiales?', answer: 'No, All Natural solo trabaja con los materiales de la marca.' },
];

function Faq() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className='mt-8'>
            <h1>Preguntas Frecuentes</h1>
            <ul>
                {faqData.map((item, index: number) => (
                    <li key={index}>
                        <div
                            onClick={() => handleToggle(index)}
                            style={{ cursor: 'pointer', margin: '10px 0', padding: '10px', border: '1px solid #ccc' }}
                        >
                            <h2><strong>{item.question}</strong></h2>
                        </div>
                        {expandedIndex === index && (
                            <div style={{ marginLeft: '20px' }}>
                                <p>{item.answer}</p>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Faq;
