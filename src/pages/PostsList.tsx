import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "Primera publicación",
    excerpt: "Esta es una breve descripción de la primera publicación.",
    imgSrc: "assets/img/uriel-soberanes-MxVkWPiJALs-unsplash-2.png",
  },
  {
    id: 2,
    title: "Segunda publicación",
    excerpt: "Esta es una breve descripción de la segunda publicación.",
    imgSrc: "assets/img/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg",
  },
  {
    id: 3,
    title: "Tercera publicación",
    excerpt: "Esta es una breve descripción de la tercera publicación.",
    imgSrc: "assets/img/alexandru-acea-XEB8y0nRRP4-unsplash.jpg",
  },
];

function PostsList() {
  return (
    <>
      <div className="font-theseasons">
        <section className="blogs-news-container">
          <div className="grid-container blogs-main-new">
            <div className="blogs-news-img-container">
              <img
                src="/foto-1.jpg"
                alt="foto publicación principal"
              />
            </div>
            <div className="blogs-news-info-container">
              <h1>Titulo del Blogpost</h1>
              <p>
                Texto de intro. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Vitae ut natus voluptatum sint voluptatem, libero porro
                ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Vitae ut natus voluptatum sint voluptatem, libero porro ratione
              </p>
              <a href={`/blog/${posts[0].id}`} className="blogs-button">Leer más</a>
            </div>
          </div>
        </section>
        <section className="blogs-post-container">
          <div className="grid-container">
            <h2 className="blogs-post-titulo-post">Publicaciones recientes</h2>
            {posts.map((post) => (
              <article key={post.id} className="post-container">
                <img src={'/foto-1.jpg'} alt={post.title} />
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="blogs-button">
                  Leer más
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default PostsList;
