import { ModalContainer } from './styled'
import { useState, useEffect } from 'react'
import closeIcon from './close-icon.svg'
import { buttonTextByTypes } from '../../constants/constants'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import env from 'react-dotenv'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { cms } from '../../service/client'

const ModalGallery = ({ type }) => {
  const [toggleGallery, setToggleGallery] = useState(false)
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [galeria, setGaleria] = useState([])

  const toggleGalleryHandler = () => {
    setToggleGallery(!toggleGallery)
  }
  const closeAndRefresh = () => {
    toggleGalleryHandler()
    window.location.reload()
  }

  useEffect(() => {
    cms
      .get('api/gallery/?populate=fotos')
      .then((response) => {
        const images = response.data.data.attributes.fotos.data.map(
          (image, id) => {
            return {
              id,
              url: env.URL_CMS + image.attributes.url
            }
          }
        )

        setGaleria(images)
      })
      .catch((error) => {
        throw new Error(error)
      })
  }, [])

  return (
    <>
      <button onClick={toggleGalleryHandler}>{buttonTextByTypes[type]}</button>

      {toggleGallery && (
        <ModalContainer theme={type}>
          <img className="exit" src={closeIcon} onClick={closeAndRefresh} />
          {type === 'about' && (
            <>
              <h2 className="about-title">Sobre Nossa Casa</h2>
              <div className="content-container">
                <div className="topic">
                  <h3>Nossa Historia Ate Aqui</h3>
                  <p>
                    Em 2018 a Nossa Casa nasce com o intuito de oferecer à
                    população acesso à serviços, produtos e atividades nas áreas
                    de saúde mental, terapias integrativas, cultura e arte,
                    entendendo tais ações como promoção e garantia de direitos à
                    todes, com foco na acessibilidade à pessoas em situação de
                    vulnerabilidade.
                  </p>
                </div>
                <div className="topic">
                  <h3>Como somos conhecidos</h3>
                  <p>
                    A Nossa Casa passa então à ser reconhecida como um centro
                    cultural, de formação, fomentação e garantia de direitos à
                    todes, sobretudo à população negra, mulheres e LGBTQIAP+
                    articulando e promovendo eventos, lançamentos musicais,
                    saraus, exposições áudio visuais, palestras, oficinas, etc.
                  </p>
                </div>
                <div className="topic">
                  <h3>Nosso inicio</h3>
                  <p>
                    No primeiro ano de funcionamento a Nossa Casa atendeu
                    centenas de pessoas nos serviços de psicoterapia,
                    massoterapia, yoga, nutrição, psicopedagogia, arte terapia,
                    rodas de conversa, formações, entre outros, á valores
                    acessíveis ou ainda em parceria com entidades do terceiro
                    setor do Município atendendo seus usuários.
                  </p>
                </div>
                <div className="topic">
                  <h3>Curiosidades</h3>
                  <p>
                    No ano de 2022 a Nossa Casa foi contratada pela Secretaria
                    de Igualdade Racial para organização da Festa Preta oficial
                    da cidade, em comemoração ao dia da Consciência Negra.
                  </p>
                </div>
                <div className="topic">
                  <h3>Profissionais</h3>
                  <p>
                    Os profissionais que compunham a Nossa Casa, atuavam também
                    de maneira autônoma gerando renda para si e contribuindo
                    para a manutenção do coletivo.
                  </p>
                </div>
                <div className="topic">
                  <h3>Como funciona</h3>
                  <p>
                    Funcionando de maneira independente e colaborativa o
                    coletivo embora tenha estabelecido parcerias com algumas
                    entidades e outros atores de coletivos semelhantes na
                    cidade, não estabeleceu nenhuma forma de conveniamento ou
                    parceria contínua com qualquer órgão publico nesse período.
                  </p>
                </div>
              </div>
            </>
          )}
          {type === 'gallery' && (
            <>
              <div className="topo">
                <h2 className="h2-modal-galery">Fotos da Nossa Casa</h2>
              </div>
              <Swiper
                style={{
                  '--swiper-navigation-color': '#516B84',
                  '--swiper-pagination-color': '#FFF',
                  position: 'unset'
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="swiper-slide-view"
              >
                {galeria.map((fotos) => (
                  <SwiperSlide key={fotos.id}>
                    <img src={fotos.url} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={6}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="swiper-thumbnails"
              >
                {galeria.map((image) => (
                  <SwiperSlide key={image.id}>
                    <img src={image.url} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          )}
        </ModalContainer>
      )}
    </>
  )
}

export default ModalGallery
