import { useEffect } from "react";
import { useParams } from "react-router-dom";

const posts = [
  {
    id: "piedras-de-murano-lujo-artesanal-joyeria-sostenible",
    title: "Piedras de Murano en tendencia: El Lujo Artesanal en Joyería Sostenible",
    metaTitle: "Piedras de Murano: Joyería Sostenible de Lujo Artesanal | All Natural",
    metaDescription: "Descubre las piedras de Murano en la joyería eco-sostenible de All Natural.",
    keywords: "Murano, joyería sostenible, lujo artesanal, eco-sostenibilidad, piedras de Murano",
    author: "Nicolle Morales Sandhaus",
    publisher: "All Natural",
    image: "/foto-1.jpg",
    content: [
      { type: "p", text: "Las piedras de Murano son sinónimo de lujo y tradición. Originarias de la isla de Murano en Italia, estas piezas artesanales son creadas a partir de técnicas ancestrales de soplado y tallado de vidrio, convirtiéndose en elementos esenciales de la joyería de alta gama. En All Natural, hemos integrado estas piedras en nuestras colecciones, fusionando la elegancia de Murano con nuestro compromiso con la eco-sostenibilidad." },
      { type: "h2", text: "¿Qué son las piedras de Murano?" },
      { type: "p", text: "Las piedras de Murano son piezas de vidrio soplado y trabajado artesanalmente, caracterizadas por sus vibrantes colores y detalles intrincados. Cada piedra es única, y la técnica artesanal utilizada en su creación ha sido transmitida de generación en generación, manteniendo vivo el arte de la vidriería veneciana." },
      { type: "h2", text: "Beneficios de usar piedras de murano en joyería" },
      {
        type: "ol",
        items: [
          [
            { bold: true, content: "Artesanía Sostenible: " },
            { bold: false, content: "Las piedras de Murano se fabrican con técnicas tradicionales, minimizando el uso de maquinaria industrial, lo que contribuye a prácticas más sostenibles y respetuosas con el medio ambiente." }
          ],
          [
            { bold: true, content: "Durabilidad: " },
            { bold: false, content: "A pesar de ser piezas de vidrio, las piedras de Murano son sorprendentemente duraderas, lo que garantiza que las joyas mantendrán su belleza durante años." },
          ],
          [
            { bold: true, content: "Elegancia: " },
            { bold: false, content: "Las piedras de Murano aportan un toque de lujo a cada pieza. Los colores profundos y los patrones únicos hacen que cada joya sea especial." }
          ]
        ]
      },
      { type: "h2", text: "El proceso artesanal detrás de las piedras de murano" },
      { type: "p", text: "Cada piedra de Murano es creada a mano por artesanos expertos que utilizan técnicas centenarias para dar forma al vidrio fundido. Este proceso incluye el uso de cañas de vidrio y pigmentos especiales, que crean las características vetas y burbujas que hacen que estas piedras sean tan valoradas en el mundo de la joyería." },
      { type: "h2", text: "Combinación de piedras de murano en joyería eco-sostenible" },
      { type: "p", text: "En All Natural, combinamos las piedras de Murano con otros materiales eco-sostenibles, como metales reciclados y pepas de madera, creando una fusión única de lujo y responsabilidad ambiental. Cada pieza es diseñada para resaltar el brillo y la complejidad de las piedras de Murano, manteniendo al mismo tiempo el compromiso con la sostenibilidad." },
      { type: "h2", text: "Cómo cuidar tus joyas con piedras de murano" },
      { type: "p", text: "Para mantener la belleza de las piedras de Murano en tu joyería:" },
      {
        type: "ul", items: ["Evita golpes o caídas que puedan dañar el vidrio.",
          "Limpia las piedras suavemente con un paño húmedo y sácalas bien antes de guardarlas.",
          "Guárdalas en un estuche separado para evitar rayaduras."]
      },
      {
        type: "p", text: "Las piedras de Murano son mucho más que un material de joyería: son el reflejo de la artesanía sostenible y el lujo . En All Natural, integramos estas magníficas piezas en nuestras colecciones, ofreciéndote joyas que combinan la tradición con el respeto por el medio ambiente."
      },
    ]
  },
  {
    id: "como-cuidar-pulseras-all-natural",
    title: "Cómo Cuidar las Pulseras de All Natural: Guía para Mantener su Belleza Natural",
    metaTitle: "Piedras de Murano: Joyería Sostenible de Lujo Artesanal | All Natural",
    metaDescription: "Descubre las piedras de Murano en la joyería eco-sostenible de All Natural.",
    keywords: "cuidado de pulseras, All Natural, belleza natural, joyería sostenible",
    author: "Nicolle Morales Sandhaus",
    publisher: "All Natural",
    image: "/foto-blog-2.jpg",
    content: [
      {
        type: "p",
        text: [
          { bold: false, content: "Las pulseras de " },
          { bold: true, content: "All Natural " },
          { bold: false, content: "son una joya única, elaboradas con materiales naturales como piedras de pepas de madera, vidrio Murano, perlas de río y otros elementos orgánicos. Estos accesorios no solo reflejan la belleza de la naturaleza, sino que también requieren cuidados especiales para mantener su esplendor y durabilidad. Si eres fan de nuestras pulseras de materiales naturales y deseas prolongar su vida útil, aquí te dejamos algunos consejos para mantenerlas en perfectas condiciones." },
        ],
      },
      { type: "h2", text: "1. Evita el Contacto con Productos Químicos" },
      {
        type: "p",
        text: [
          { bold: false, content: "Las pulseras " },
          { bold: true, content: "All Natural, " },
          { bold: false, content: "hechas con perlas de río, madera y vidrio Murano, son sensibles a productos químicos como perfumes, lacas para el cabello y productos de limpieza. Estos productos pueden dañar la superficie de las piedras o los acabados de los materiales naturales, alterando su color y textura. Siempre pon tu pulsera después de aplicar estos productos en tu piel, y evita que entre en contacto con sustancias químicas." },
        ],
      },
      { type: "h2", text: "2. Almacenamiento Adecuado" },
      {
        type: "p",
        text: [
          { bold: false, content: "El lugar donde guardas tus pulseras también es clave para su conservación. Para evitar rayaduras o decoloración, guarda tus pulseras en un lugar seco y fresco. Una bolsa de tela o una caja con compartimentos es ideal para que las pulseras no entren en contacto con otras piezas. Si tienes varias pulseras de " },
          { bold: true, content: "All Natural, " },
          { bold: false, content: "te recomendamos que las guardes por separado para evitar que se dañen entre sí." },
        ],
      },
      { type: "h2", text: "3. Limpieza Regular y Suave" },
      { type: "p", text: "La limpieza de tus pulseras de materiales naturales debe hacerse de manera suave para no dañar las piedras o perlas. Puedes limpiarlas con un paño suave y seco, eliminando el polvo o la suciedad. Si las pulseras han estado en contacto con agua o se han manchado, utiliza un paño ligeramente humedecido con agua tibia y sécalas inmediatamente. Evita sumergirlas en agua o usar productos abrasivos, ya que podrían dañar las piedras de madera o el vidrio Murano." },
      { type: "h2", text: "4. Protégerlas del Sol y la Humedad" },
      {
        type: "p",
        text: [
          { bold: false, content: "Aunque las piedras y las perlas de río son resistentes, la exposición prolongada al sol puede hacer que los colores se desvanezcan o que los materiales naturales se resequen. Igualmente, la humedad excesiva puede dañar las piedras de madera y hacer que pierdan su forma. Te recomendamos que no uses tus pulseras de " },
          { bold: true, content: "All Natural " },
          { bold: false, content: "mientras tomas una ducha o cuando estés expuesto a climas extremadamente húmedos." },
        ],
      },
      { type: "h2", text: "5. Revisiones Periódicas" },
      { type: "p", text: "Aunque nuestras pulseras están diseñadas para resistir el uso diario, es importante hacer una revisión periódica para asegurarte de que no haya piezas sueltas o desgastadas. Si notas que una piedra o perla se ha soltado, acude a un experto o a la tienda para que realicen el mantenimiento adecuado." },
      { type: "h2", text: "6. Evita el Impacto Físico" },
      { type: "p", text: "Las pulseras que contienen materiales como pepas de madera o piedras preciosas pueden romperse o astillarse si sufren golpes fuertes. Si practicas deportes o actividades físicas que puedan poner en riesgo la integridad de tu pulsera, es mejor quitártela antes de realizar cualquier esfuerzo intenso." },
      { type: "h2", text: "¡Haz que tu pulsera All Natural dure por siempre!" },
      {
        type: "p",
        text: [
          { bold: false, content: "Visita nuestra " },
          { bold: true, content: "tienda online " },
          { bold: false, content: "para descubrir las últimas colecciones de pulseras elaboradas con materiales 100% naturales. Si necesitas más información sobre el cuidado de tus piezas o deseas personalizar tu pulsera, ¡contacta con nosotros! Nuestro equipo estará encantado de ayudarte a mantener tus joyas tan radiantes como el primer día." },
        ],
      },
    ]
  },
  {
    id: "recoleccion-materiales-naturales-pulseras-all-natural",
    title: "La Recolección de Materiales Naturales para la Elaboración de Pulseras All Natural",
    metaTitle: "Piedras de Murano: Joyería Sostenible de Lujo Artesanal | All Natural",
    metaDescription: "Descubre cómo se realiza la recolección de materiales naturales para crear pulseras sostenibles y únicas en All Natural. Explora los procesos y el respeto por el medio ambiente detrás de cada pieza.",
    keywords: "recolección de materiales naturales, pulseras All Natural, pulseras sostenibles, materiales naturales para pulseras, elaboración de pulseras, pulseras ecológicas, joyería artesanal, pulseras hechas a mano, pulseras amigables con el medio ambiente, pulseras de materiales naturales",
    author: "Nicolle Morales Sandhaus",
    publisher: "All Natural",
    image: "/foto-blog-2.jpg",
    content: [
      {
        type: "p",
        text: [
          { bold: false, content: "En " },
          { bold: true, content: "All Natural" },
          { bold: false, content: ", cada pulsera que creamos cuenta una historia única. Esta historia comienza con la recolección de materiales naturales, un proceso que no solo destaca por su belleza, sino también por su compromiso con la sostenibilidad y el respeto al medio ambiente. Las piedras de pepas de madera, las perlas de río, el vidrio Murano y otros elementos orgánicos no solo son hermosos, sino que también representan una conexión profunda con la naturaleza. A continuación, te contamos todo sobre cómo recolectamos estos materiales y por qué cada pulsera de " },
          { bold: true, content: "All Natural" },
          { bold: false, content: " es un símbolo de responsabilidad ecológica." },
        ],
      },
      { type: "h2", text: "1. La Selección de Materiales Sostenibles" },
      {
        type: "p",
        text: [
          { bold: false, content: "Uno de los pilares fundamentales de " },
          { bold: true, content: "All Natural, " },
          { bold: false, content: "es el respeto por el medio ambiente. La recolección de materiales para nuestras pulseras se realiza de manera ética y sostenible. Trabajamos exclusivamente con proveedores que adoptan prácticas responsables para asegurarse de que los recursos naturales sean cosechados de forma que no agoten las fuentes de donde provienen." },
        ],
      },
      {
        type: "ul",
        items: [
          [
            { bold: true, content: "Piedras de pepas de madera: " },
            { bold: false, content: "Este material proviene de semillas y frutos caídos naturalmente de árboles, lo que significa que no es necesario talar ni dañar a los árboles. Recogemos solo los frutos que ya han caído al suelo, garantizando así que el ecosistema no se vea afectado." }
          ],
          [
            { bold: true, content: "Perlas de río: " },
            { bold: false, content: "Las perlas que usamos en nuestras pulseras son obtenidas de forma artesanal, sin afectar la biodiversidad de los ríos. Los métodos de recolección son respetuosos con los ecosistemas acuáticos, asegurando la conservación de los hábitats naturales." },
          ],
          [
            { bold: true, content: "Vidrio Murano: " },
            { bold: false, content: "Para el vidrio Murano, trabajamos con artesanos tradicionales que reciclan vidrio de forma sostenible, reduciendo al mínimo el impacto ambiental. Además, el uso de vidrio reciclado ayuda a reducir la cantidad de residuos y fomenta la reutilización de materiales." }
          ]
        ]
      },
      { type: "h2", text: "2. La Recolección Responsable de Maderas y Semillas" },
      {
        type: "p",
        text: [
          { bold: false, content: "La madera y las semillas utilizadas en nuestras pulseras provienen de fuentes responsables y de comercio justo. En " },
          { bold: true, content: "All Natural" },
          { bold: false, content: ", estamos comprometidos con el desarrollo de prácticas que no solo protejan los recursos naturales, sino que también apoyen a las comunidades locales. Al recolectar estos materiales, trabajamos de la mano con los habitantes de las regiones productoras para promover la economía local y garantizar que los procesos de recolección se realicen de manera controlada y en armonía con la naturaleza." },
        ],
      },
      {
        type: "p",
        text: [
          { bold: false, content: "La recolección de pepas de madera es especialmente cuidadosa, ya que no implica la deforestación ni la alteración de los ecosistemas. En lugar de cortar árboles, nos enfocamos en obtener semillas de los frutos que ya han caído al suelo, lo que permite que los árboles continúen su ciclo de vida sin ser dañados." }
        ],
      },
      { type: "h2", text: "3. El Arte de la Recolección de Perlas de Río" },
      {
        type: "p",
        text: [
          { bold: false, content: "Las " },
          { bold: true, content: "perlas de río " },
          { bold: false, content: "que usamos en nuestras pulseras son cultivadas de forma artesanal en pequeñas granjas que siguen estrictos protocolos medioambientales. A diferencia de las perlas marinas, que pueden tener un impacto ambiental negativo, las perlas de río se cultivan en aguas dulces y se extraen sin alterar el equilibrio de los ecosistemas acuáticos. La recolección es un proceso delicado que requiere paciencia y un profundo conocimiento de la naturaleza, garantizando que las perlas se obtengan de manera ética y sostenible." },
        ],
      },
      { type: "h2", text: "4. El Proceso de Fabricación: Un Encuentro entre la Naturaleza y el Diseño" },
      {
        type: "p",
        text: [
          { bold: false, content: "Una vez recolectados los materiales naturales, nuestro equipo de diseñadores y artesanos transforma estos elementos en las pulseras " },
          { bold: true, content: "All Natural" },
          { bold: false, content: ". La fabricación de cada pieza es un proceso completamente manual, donde el arte y la naturaleza se combinan para crear joyas únicas y llenas de significado." },
        ],
      },
      {
        type: "p",
        text: [
          { bold: false, content: "Además, la elaboración de nuestras pulseras sigue principios de comercio justo y bienestar social, lo que significa que cada persona que participa en el proceso de creación es tratada con respeto y recibe una compensación justa por su trabajo." }
        ],
      },
      { type: "h2", text: "5. El Compromiso de All Natural con la Sostenibilidad" },
      {
        type: "p",
        text: [
          { bold: false, content: "Más allá de la recolección, en " },
          { bold: true, content: "All Natural" },
          { bold: false, content: " estamos comprometidos con una filosofía de sostenibilidad integral. Esto no solo se refleja en los materiales que usamos, sino también en los procesos de producción y en la distribución de nuestras pulseras. Reducir el impacto ambiental, promover el comercio ético y ofrecer productos que perduren en el tiempo son solo algunos de los valores que definen nuestra marca." },
        ],
      },
      {
        type: "p",
        text: [
          { bold: true, content: "All Natural " },
          { bold: false, content: "no es solo una marca de joyería, es una celebración de la naturaleza. Al elegir nuestras pulseras, estás eligiendo apoyar un modelo de negocio que trabaja por un futuro más verde y responsable." },
        ],
      },
      { type: "h2", text: "¡Descubre nuestras pulseras y forma parte de un movimiento que celebra la naturaleza!" },
      {
        type: "p",
        text: [
          { bold: false, content: "Visita nuestra" },
          { bold: true, content: " tienda online " },
          { bold: false, content: "para explorar la colección completa de pulseras hechas con materiales naturales. Si tienes preguntas sobre el proceso de recolección o deseas más información sobre la sostenibilidad de nuestros productos, no dudes en " },
          { bold: true, content: "contactarnos." },
        ],
      },
    ]
  },
];

function Post() {
  const { postID } = useParams();
  const post = posts.find((p) => p.id === postID);

  useEffect(() => {
    if (post) {
      document.title = post.metaTitle;

      // Actualizar la meta descripción
      const metaDescription = document.querySelector("meta[name='description']");
      if (metaDescription) {
        metaDescription.setAttribute("content", post.metaDescription || "");
      } else {
        const meta = document.createElement("meta");
        meta.name = "description";
        meta.content = post.metaDescription || "";
        document.head.appendChild(meta);
      }

      // Actualizar las palabras clave
      const metaKeywords = document.querySelector("meta[name='keywords']");
      if (metaKeywords) {
        metaKeywords.setAttribute("content", post.keywords || "");
      } else {
        const keywordsMeta = document.createElement("meta");
        keywordsMeta.name = "keywords";
        keywordsMeta.content = post.keywords || "";
        document.head.appendChild(keywordsMeta);
      }

      // Agregar URL canónica
      const canonicalUrl = `https://allnaturaljoyas.com/blog/${postID}`;
      let linkCanonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
      if (linkCanonical) {
        linkCanonical.setAttribute("href", canonicalUrl);
      } else {
        linkCanonical = document.createElement("link") as HTMLLinkElement;
        linkCanonical.rel = "canonical";
        linkCanonical.href = canonicalUrl;
        document.head.appendChild(linkCanonical);
      }

      // Agregar meta robots
      const metaRobots = document.querySelector("meta[name='robots']");
      if (metaRobots) {
        metaRobots.setAttribute("content", "index, follow");
      } else {
        const robotsMeta = document.createElement("meta");
        robotsMeta.name = "robots";
        robotsMeta.content = "index, follow";
        document.head.appendChild(robotsMeta);
      }

      // Agregar meta author
      const metaAuthor = document.querySelector("meta[name='author']");
      if (metaAuthor) {
        metaAuthor.setAttribute("content", post.author || "");
      } else {
        const authorMeta = document.createElement("meta");
        authorMeta.name = "author";
        authorMeta.content = post.author || "";
        document.head.appendChild(authorMeta);
      }

      // Agregar meta publisher
      const metaPublisher = document.querySelector("meta[name='publisher']");
      if (metaPublisher) {
        metaPublisher.setAttribute("content", post.publisher || "");
      } else {
        const publisherMeta = document.createElement("meta");
        publisherMeta.name = "publisher";
        publisherMeta.content = post.publisher || "";
        document.head.appendChild(publisherMeta);
      }
    }
  }, [post, postID]);

  if (!post) {
    return <h2>Publicación no encontrada</h2>;
  }

  return (
    <div className="font-theseasons overflow-x-hidden">
      <section className="max-w-[980px] mx-auto px-10 pb-10">
        <img src={post.image} alt={`Imagen de ${post.title}`} className="w-full" />
      </section>
      <section className="max-w-[980px] mx-auto px-10 pb-10">
        <article>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          {post.content.map((block, index) => {
            switch (block.type) {
              case "p":
                return (
                  <p key={index} className="text-lg font-medium mb-4">
                    {Array.isArray(block.text)
                      ? block.text.map((fragment, fragIdx) =>
                        fragment.bold ? (
                          <span key={fragIdx} className="font-bold">
                            {fragment.content}
                          </span>
                        ) : (
                          <span key={fragIdx}>{fragment.content}</span>
                        )
                      )
                      : block.text}
                  </p>
                );
              case "h2":
                return (
                  <h2 key={index} className="text-2xl font-semibold mb-4">
                    {Array.isArray(block.text)
                      ? block.text.map((fragment, fragIdx) =>
                        fragment.bold ? (
                          <span key={fragIdx} className="font-bold">
                            {fragment.content}
                          </span>
                        ) : (
                          <span key={fragIdx}>{fragment.content}</span>
                        )
                      )
                      : block.text}
                  </h2>
                );
              case "ul":
                if ("items" in block && Array.isArray(block.items) && block.items.length > 0) {
                  return (
                    <ul key={index} className="list-disc list-inside mb-4">
                      {block.items.map((item, idx) => (
                        <li key={idx}>
                          {Array.isArray(item)
                            ? item.map((fragment, fragIdx) =>
                              fragment.bold ? (
                                <span key={fragIdx} className="font-bold">
                                  {fragment.content}
                                </span>
                              ) : (
                                <span key={fragIdx}>{fragment.content}</span>
                              )
                            )
                            : item}
                        </li>
                      ))}
                    </ul>
                  );
                }
                break;
              case "ol":
                if ("items" in block && Array.isArray(block.items) && block.items.length > 0) {
                  return (
                    <ol key={index} className="list-decimal list-inside mb-4">
                      {block.items.map((item, idx) => (
                        <li key={idx}>
                          {Array.isArray(item)
                            ? item.map((fragment, fragIdx) =>
                              fragment.bold ? (
                                <span key={fragIdx} className="font-bold">
                                  {fragment.content}
                                </span>
                              ) : (
                                <span key={fragIdx}>{fragment.content}</span>
                              )
                            )
                            : item}
                        </li>
                      ))}
                    </ol>
                  );
                }
                break;
              default:
                return null;
            }
          })}
        </article>
      </section>
    </div>
  );
}

export default Post;
