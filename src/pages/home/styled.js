import styled from 'styled-components'
const Home = styled.div`

  background-color: white;
  width: 100%;
  height: 100vh;

  main {
    height: 100vh;
    .carrossel {
      background-color: #010101;
      color: #ffffff;
      .swiper-button-next {
        margin-right: 25px
      }
      .swiper-button-prev {
        margin-left: 25px;
      }
    }

    .hero-banner {
      height: 560px;
      width: 70%;
      margin: auto;
    }
    .swiperSliide {
      div {
        display: flex;
        flex-direction: column;
        width: 100%;
        
      }
      .slide-container {
        display: flex;
      }
      .event-container {
        width: 60%;
        height: 240px;
        margin-left: 50px
      }
      .slidetitulo {
        margin: 20px auto 30px 50px;
        font-size: 2rem;
        font-family: 'Inter', sans-serif;
        float: inline-start;
        z-index: 1;
        align-items:center;
      }

      .descricao {
        margin: 50px 10px 10px 50px;
        font-family: 'Inter', sans-serif;
        font-size: 1.3rem;
        line-height: 30px;
        cursor: default;
        text-align: justify;
        z-index: 1;

      }
      img {
        width: 100%;
        height: 100%;
        position: fixed;
        opacity: 50%;
      }

      .ver-mais {
        z-index:1;
        background-color: #F5BC4A;
        border: 1px solid;
        border-radius: 5px;
        width: 250px;
        height: 40px;
        margin-left: 10%;
        text-align: center;
        padding: 10px;
        color: #000000;
        text-decoration: none;
        margin-top: 3%;
        font-weight: bold;
      }
    }

    .about {
      background-color: #ffffff;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;

      .content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
      }

      .content > div {
        width: 80%;
        margin: 0 auto;
        h2 {
          font-size: 26px;
          margin-bottom: 30px;
        }
        align-items: center;
      }

      button {
        background: #F5BC4A;
        box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.4);
        border-radius: 3px;
        color: #000000;
        border: none;
        font-size: 1rem;
        width: 163px;
        height: 56px;
        font-weight: 600;
        cursor: pointer;
        padding: 10px;
        margin-top: 1.6rem;
        margin-bottom: 1.6rem;
      }
    }

    .galeria {
      height: 1210px;
      background-color: #FAFAFA;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 30px;

      .titulo-galeria {
        align-self: flex-start;
        margin-left: 12.5%;
        font-size: 2.25rem;
        font-weight: 700;
        color: #516B84;
        line-height: 64px;
        text-align: center;
        font-size: 3.125rem;
        color: #516B84;
        cursor: default;
      }

      .painel {
        width: 75%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 25px;
        grid-row-gap: 25px;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          max-width: auto;
          margin-left: 3%;
          border-radius: 3px;
          margin-bottom: 3.5rem;
        }
      }
      .container-painel {
        display: flex;
        justify-content: center;
      }
      button {
        background: #516B84;
        border-radius: 3px;
        color: #FAFAFA;
        border: none;
        font-size: 0.75rem;
        width: 182px;
        height: 40px;
        cursor: pointer;
      }
    }


  @media (max-width: 1280px) {
    .galeria{
      height: 950px;
    }
    }

    .parceires {
      background-color: aliceblue;
      height: 697px;
      display: flex;
      flex-direction: column;
      align-items: center;

      h2 {
        font-size: 2.5rem;
        margin-top: 30px;
        margin-bottom: 10px;
        cursor: default;
      }

      p {
        margin-bottom: 40px;
        cursor: default;
      }

      .carrossel-perfis {
        height: 60%;
        display: flex;
        justify-content: center;
        gap: 20px;
        cursor: default;

        .perfil {
          background-color: cadetblue;
          width: 30%;

          h3 {
            text-align: center;
            cursor: default;
          }

          p {
            text-align: center;
            cursor: default;
          }
        }
      }
    }
    
    .about {
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    box-sizing: border-box;
    align-items: center;
    height: 627px;
  }

main .about {
  height: auto;
  padding: 10px;
}

  main .about .content {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    flex-direction: row;
    margin-top: 5rem;
    margin-bottom: 4rem;
  }

  .content .text {
    box-sizing: border-box;
    text-align: justify;
    width: 40%;
    margin-bottom: auto;
  }

  .foto img {
    width: 110%;
    max-width: auto;
    margin-left: 3%;
    border-radius: 3px;
    margin-bottom: 4.6rem;
  }

  @media screen and (min-width: 720px) and (max-width:2920px) {
    .content > div {
      width: auto;
      max-width: auto;
    }

    .content h2 {
      font-size: 2.25rem;
      margin-bottom: 30px;
    }

    .content .Textparagraph {
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 35px;
    }

    .content .text h2 {
      font-size: 2rem;
      color: #516B84;
      cursor: default;
    }

    .content .text .Textparagraph {
      font-size: 25px;
      color: #54636F;
      cursor: default;
    }
  }
}
`

export default Home
