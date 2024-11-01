import { useState } from 'react';

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
        <div className='m-8 font-theseasons'>
            <h1 className='text-4xl'>Preguntas Frecuentes</h1>
            <ul>
                {faqData.map((item, index: number) => (
                    <li key={index} className="my-2">
                        <div
                            onClick={() => handleToggle(index)}
                            className={`cursor-pointer p-2 border border-darkBg2 rounded-md transition-colors duration-300 
                                ${expandedIndex === index ? 'bg-[#866c5a] text-white' : 'hover:bg-[#866c5a] hover:text-white'}`}
                        >
                            <h2 className='text-xl font-semibold'>{item.question}</h2>
                        </div>
                        {expandedIndex === index && (
                            <div className="ml-5 mt-2 transition-all duration-300 ease-in-out">
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
