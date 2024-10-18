// src/pages/PostsList.jsx
import { Link } from "react-router-dom";

const posts = [
  { id: 1, title: "Primera publicación", excerpt: "Esta es una breve descripción de la primera publicación." },
  { id: 2, title: "Segunda publicación", excerpt: "Esta es una breve descripción de la segunda publicación." },
  { id: 3, title: "Tercera publicación", excerpt: "Esta es una breve descripción de la tercera publicación." },
];

function PostsList() {
  return (
    <div className="posts-list">
      <h1>Lista de Publicaciones</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <Link to={`/blog/${post.id}`}>Leer más</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsList;
