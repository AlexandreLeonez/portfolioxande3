import React from 'react';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h2>Meus Projetos</h2>
      <div className="projects-list">
        {projetos.map((projeto, index) => (
          <div key={index} className="project-item">
            <img src={projeto.image} alt={projeto.name} />
            <h3>{projeto.name}</h3>
            <p>{projeto.description}</p>
            <a href={projeto.link} target="_blank" rel="noopener noreferrer">
              Ver no GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

  const projetos = [
    {
      name: "Pokedex",
    description: "É uma enciclopédia virtual que contém todas as espécies de Pokémon",
    image: "https://media.discordapp.net/attachments/748745210799849502/1314252010031157419/pokedex2.png?ex=67531810&is=6751c690&hm=c773dace36f68b9bdff5c0b0d258265d9b34354b5e73594e01a262657b9bd7e1&=&format=webp&quality=lossless",
    link: "https://github.com/AlexandreLeonez/pokedex.alexandre",
    },
    {
      name: "ToDo list",
    description: "É uma ferramenta simples e eficaz para organizar tarefas",
    image: "https://media.discordapp.net/attachments/748745210799849502/1314252010358571018/to_do_list2.png?ex=67531810&is=6751c690&hm=cce3a701900c9e910dd2f3be667c858e061b40ab65a4fd04b0b56aefe0299ea5&=&format=webp&quality=lossless",
    link: "https://github.com/AlexandreLeonez/lista-de-tarefas-react",
    },
    {
      name: 'Atletas do Brasil',
      description: 'Um site para pesquisa de nomes de atletas brasileiros',
      image: 'https://media.discordapp.net/attachments/748745210799849502/1314252009146417182/Captura_de_tela_2024-12-05_122758.png?ex=67531810&is=6751c690&hm=dfdc798c7b1da9ef9d2121becb7f42471495d66696c684ba960b160594af28a5&=&format=webp&quality=lossless',
      link: 'https://github.com/AlexandreLeonez/Atividade-Front',
    },
  ];

  
export default Portfolio;