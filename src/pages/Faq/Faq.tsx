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
        <div className="container my-24 mx-auto px-4 dark:bg-darkBg">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Columna 1: Foto */}
                <div className="h-full w-full">
                    <img
                        src="/20.jpg"
                        alt="Foto de All Natural"
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                </div>

                {/* Columna 2: Título y párrafo */}
                <div className="flex flex-col justify-center text-center lg:text-left">
                    <h1 className="text-4xl font-theseasons mb-4">Preguntas Frecuentes</h1>
                    <p className="text-lg">
                        En <span className="font-bold">All Natural</span> estamos comprometidos con la calidad y personalización
                        de nuestros productos. A continuación, te respondemos las dudas más comunes para brindarte la mejor
                        experiencia.
                    </p>
                </div>

                {/* Columna 3: Preguntas y respuestas */}
                <div>
                    <ul>
                        {faqData.map((item, index: number) => (
                            <li key={index} className="my-2">
                                <div
                                    onClick={() => handleToggle(index)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleToggle(index)}
                                    role="button"
                                    tabIndex={0}
                                    aria-expanded={expandedIndex === index}
                                    className={`flex justify-between items-center cursor-pointer p-3 border border-darkBg2 rounded-md transition-colors duration-300 ${
                                        expandedIndex === index
                                            ? 'bg-[#866c5a] text-white'
                                            : 'hover:bg-[#866c5a] hover:text-white'
                                    }`}
                                >
                                    <h2 className="text-xl font-semibold">{item.question}</h2>
                                    <span
                                        className={`transition-transform duration-300 ${
                                            expandedIndex === index ? 'rotate-180' : 'rotate-0'
                                        }`}
                                    >
                                        ▼
                                    </span>
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
            </div>
        </div>
    );
}

export default Faq;
