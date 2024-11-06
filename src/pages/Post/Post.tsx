import { useEffect } from "react";
import { useParams } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "Piedras de Murano en tendencia: El Lujo Artesanal en Joyería Sostenible",
    metaTitle: "Piedras de Murano: Joyería Sostenible de Lujo Artesanal | All Natural",
    metaDescription: "Descubre las piedras de Murano en la joyería eco-sostenible de All Natural.",
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
  
];

function Post() {
  const { postID } = useParams();
  const post = posts.find((p) => p.id === parseInt(postID || "", 10));

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
    }
  }, [post]);

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
                return <p key={index} className="text-lg font-medium mb-4">{block.text}</p>;
              case "h2":
                return <h2 key={index} className="text-2xl font-semibold mb-4">{block.text}</h2>;
              case "ul":
                if (Array.isArray(block.items)) {
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
                if (Array.isArray(block.items)) {
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
