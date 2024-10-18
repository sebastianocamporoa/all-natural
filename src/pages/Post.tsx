// src/pages/PostsList.jsx
import { useParams } from "react-router-dom";

const posts = [
  { id: 1, title: "Primera publicación", content: "Este es el contenido completo de la primera publicación." },
  { id: 2, title: "Segunda publicación", content: "Este es el contenido completo de la segunda publicación." },
  { id: 3, title: "Tercera publicación", content: "Este es el contenido completo de la tercera publicación." },
];

function Post() {
  const { postID } = useParams();
  const post = posts.find((p) => p.id === parseInt(postID || "", 10));

  if (!post) {
    return <h2>Publicación no encontrada</h2>;
  }

  return (
    <div className="single-post">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default Post;
