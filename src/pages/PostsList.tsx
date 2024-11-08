import { Helmet } from "react-helmet";

const posts = [
  {
    id: "piedras-de-murano-lujo-artesanal-joyeria-sostenible",
    title: "Piedras de Murano en tendencia: El Lujo Artesanal en Joyería Sostenible",
    excerpt: "Las piedras de Murano simbolizan elegancia y sostenibilidad. Aprende sobre su proceso artesanal y cómo All Natural integra este arte en su joyería de lujo eco-sostenible.",
    imgSrc: "/foto-1.jpg",
    keywords: "piedras de murano, joyería sostenible, lujo artesanal"
  },
  {
    id: "como-cuidar-pulseras-all-natural",
    title: "Cómo Cuidar las Pulseras de All Natural: Guía para Mantener su Belleza Natural",
    excerpt: "Aprende a cuidar tus pulseras de materiales naturales de All Natural. Sigue estos consejos para preservar su belleza y durabilidad, incluyendo limpieza, almacenamiento y protección.",
    imgSrc: "/foto-1.jpg",
    keywords: "pulseras, all natural, cuidado de joyas"
  },
  {
    id: "3",
    title: "Tercera publicación",
    excerpt: "Esta es una breve descripción de la tercera publicación.",
    imgSrc: "/foto-1.jpg",
    keywords: "publicación, joyería, tendencias"
  },
];

const combinedKeywords = posts.map(post => post.keywords).join(", ");

function PostsList() {
  return (
    <>
      <Helmet>
        <title>Blog de All Natural: Joyería Sostenible y Cuidado de Productos</title>
        <meta name="description" content="Descubre las últimas tendencias en joyería sostenible y cuidado de productos naturales en el blog de All Natural." />
        <meta name="keywords" content={combinedKeywords} />
        <meta name="author" content="All Natural" />
        <meta name="publisher" content="All Natural" />
        <link rel="canonical" href="https://allnaturaljoyas.com/blog" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="font-theseasons">
        <section className="my-24">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex justify-center">
              <img
                src={posts[0].imgSrc}
                alt="foto publicación principal"
                className="w-100 rounded-md"
              />
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold">{posts[0].title}</h1>
              <p className="mb-8 font-medium">
                {posts[0].excerpt}
              </p>
              <a
                href={`/blog/${posts[0].id}`}
                className="flex items-center justify-center space-x-2 hover:bg-darkBg2 text-darkBg2 hover:text-white font-bold py-2 px-4 rounded border border-darkBg2"
              >
                Leer más
              </a>
            </div>
          </div>
        </section>
        <section className="px-12 pb-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-center text-2xl font-semibold border-b pb-4 border-gray-300">Publicaciones recientes</h2>
            <div className="flex flex-wrap justify-between gap-y-8">
              {posts.map((post) => (
                <article key={post.id} className="w-full md:w-[30%] flex flex-col space-y-4">
                  <img src={post.imgSrc} alt={post.title} className="w-full rounded-md" />
                  <h3 className="text-xl font-semibold border-b pb-2">{post.title}</h3>
                  <p className="mb-8">{post.excerpt}</p>
                  <a href={`/blog/${posts[0].id}`} className="inline-block hover:bg-darkBg2 text-darkBg2 text-center hover:text-white font-bold py-2 px-4 rounded border border-darkBg2">
                    Leer más
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default PostsList;
