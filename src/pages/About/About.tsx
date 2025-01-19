function About() {
    return (
        <main className='mt-8 lg:mx-44 md:mx-20 sm:mx-12 font-theseasons'>
            {/* Encabezado principal */}
            <section
                className='bg-cover bg-center p-8 rounded-lg text-center text-white h-[190px] md:h-96 lg:h-[400px]'
                style={{
                    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/foto-1.jpg')"
                }}
            >
                <h1 className='text-5xl flex items-center justify-center h-full'>Sobre Nosotros</h1>
            </section>

            {/* Descripción general */}
            <section aria-labelledby="descripcion-general">
                <p id="descripcion-general" className='text-lg mt-8'>
                    df. Marca de joyería peruana artesanal con enfoque
                    integrado a la sostenibilidad y exclusividad
                    personalizada de sus diseños. All natural combina el
                    lujo consciente con la sostenibilidad.
                </p>
                <h2 id="title-quienes-somos" className='text-3xl font-semibold mt-4 lg:text-left text-darkBg2'>¿Quienes somos?</h2>
                <p id="descripcion-general" className='text-lg mt-2'>
                    La marca de joyas All Natural se destaca por ofrecer
                    productos únicos que combinan el arte y el fuerte compromiso
                    hacia la sostenibilidad. Elaborados completamente a mano
                    por artesanos que cuidan hasta el más mínimo detalle y
                    garantizan una atención personalizada y única en cada diseño.
                    Se utilizan materiales sostenibles y responsables con el medio
                    ambiente, garantizando que nuestras joyas no solo son productos
                    en tendencia, sino también son éticas.
                </p>
                <h2 id="title-propuesta-valor" className='text-3xl font-semibold mt-4 lg:text-left text-darkBg2'>Propuesta de valor</h2>
                <p id="descripcion-general" className='text-lg mt-2'>
                    La propuesta de valor es el uso exclusivo de materiales sostenibles
                    y empaques 100% eco-amigables y reutilizables. Lo que realmente
                    distingue la marca es la parte innovadora sobre el modelo de circularidad.
                    Los clientes tienen la opción de devolver los materiales de sus joyas
                    para rediseño y reducción del impacto ambiental.
                </p>
            </section>

            {/* Sección de Misión y Visión */}
            <section className='flex flex-col lg:flex-row lg:items-center mt-8' aria-labelledby="mision-vision">
                <div className='lg:w-1/2 p-4'>
                    <img
                        src='/foto-1.jpg'
                        alt='Imagen que representa nuestra misión y visión'
                        className='rounded-lg object-cover w-full h-full'
                        style={{
                            clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0 100%)'
                        }}
                    />
                </div>
                <div className='lg:w-1/2 p-4'>
                    <h2 id="mision-vision" className='text-3xl font-semibold mb-4 text-center lg:text-left text-darkBg2'>Misión</h2>
                    <p className='text-lg mb-8 lg:mb-4 text-center lg:text-left'>
                        All natural es una empresa peruana eco - sostenible dedicada a
                        la realización de joyas hechas a mano con piedras naturales,
                        poniendo a disposición accesorios de mayor calidad y cuidado del
                        medio ambiente otorgando diferenciación en cada joya para cada cliente.
                    </p>
                    <h2 className='text-3xl font-semibold mb-4 text-center lg:text-left text-darkBg2'>Visión</h2>
                    <p className='text-lg text-center lg:text-left'>
                        Ser reconocida como una de las empresas de joyería naturales más grandes en el Perú.
                        Reconocida por la responsabilidad y cuidado al medio ambiente otorgando la calidad
                        del producto a nuestros consumidores y toda persona que forme parte de nuestra comunidad.
                    </p>
                </div>
            </section>

            {/* Sección de Valores */}
            <section className='my-12 text-center' aria-labelledby="valores">
                <h2 id="valores" className='text-3xl font-semibold mb-4 text-darkBg2'>Valores</h2>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
                    <div className='flex flex-col items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-[115px] w-[115px] text-colorGreen" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-2.67 0-8 1.34-8 4v1h16v-1c0-2.66-5.33-4-8-4z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12a4 4 0 100-8 4 4 0 000 8z" />
                        </svg>
                        <p className='text-lg font-medium'>Responsabilidad ambiental</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-[115px] w-[115px] text-colorGreen" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422A2 2 0 0019 9.245V6.755a2 2 0 00-1.84-1.974L12 8l-5.16-2.726A2 2 0 005 6.755v2.49a2 2 0 001.84 1.975L12 14z" />
                        </svg>
                        <p className='text-lg font-medium'>Calidad</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-[115px] w-[115px] text-colorGreen" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <p className='text-lg font-medium'>Transparencia</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-[115px] w-[115px] text-colorGreen" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h1m0 0h-1m1 0h1m-1 0h1m-1 0v1m0-1v1m0 4v1m-1-1h-1m1 2h1m-4-1V9h1m1 0h1m-1 0h1m-1 0v1m0-1v1m0 4v1m-1-1h-1" />
                        </svg>
                        <p className='text-lg font-medium'>Honestidad</p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default About;
