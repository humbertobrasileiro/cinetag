import { Fragment, useEffect, useState } from "react";
import styles from "./Player.module.css";
import Banner from "components/Banner";
import Titulo from "components/Titulo";
import { useParams } from "react-router-dom";
import NaoEncontrada from "pages/NaoEncontrada";

function Player() {
  const [video, setVideo] = useState();
  const parametros = useParams();

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/humbertobrasileiro/cinetag-api/videos?id=${parametros.id}`
    )
      .then((resposta) => resposta.json())
      .then((dados) => {
        setVideo(...dados);
      });
  });

  if (!video) {
    return <NaoEncontrada />;
  }

  return (
    <Fragment>
      <Banner imagem="player" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.titulo}
          frameborder="0"
          allow="acceleromenter; autoplay; clipboard-write;"
        ></iframe>
      </section>
    </Fragment>
  );
}

export default Player;
