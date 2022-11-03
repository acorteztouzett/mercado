import { ArrowRightOutlined,ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import React,{useState, useEffect} from 'react'
import {useDocumentTitle,useScrollTop} from 'hooks';


const Blog = () => {
    useDocumentTitle('Blog');
    useScrollTop();
   

    return (
        <main className="content">
            <div className="blog">

                <div className="banner">
                    <div className="banner-desc">
                        <h1 className="text-thin">
                        <strong>Cómo digitalizar tu negocio en 8 pasos</strong>
                        </h1>
                        <p>
                        En este video, aprenderás los pasos necesarios para digitalizar tu negocio, dado por el creador de contenido Juan Merodio .
                        </p>
                        <br />
                        <button src="#asda" className='button'> 
                            Ver Ahora &nbsp;
                            <ArrowRightOutlined />
                        </button>
                    </div>
                    <iframe width="800" height="400" src="https://www.youtube.com/embed/0mJCgdJY9GI" title="Cómo digitalizar tu negocio en 8 pasos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className="banner">
                    <div className="banner-desc">
                        <h1 className="text-thin">
                        <strong>Cómo digitalizar una PYME</strong>
                        </h1>
                        <p>
                        En ese video, te enterarás de lo necesario para digitalizar una PYME, enseñado por el creador de contenido Juan Merodio.
                        </p>
                        <br />
                        <button src="#asda" className='button'> 
                            <ArrowRightOutlined />
                            &nbsp; Ver Ahora 
                        </button>       
                    </div>
                    <iframe width="800" height="400" src="https://www.youtube.com/embed/VlBhQSn8LNE" title="Cómo se DIGITALIZA una PYME (Transformación Digital)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className="banner">
                    <div className="banner-desc">
                        <h1 className="text-thin">
                        <strong>Por qué digitalizar tu negocio</strong>
                        </h1>
                        <p>
                        En ese video, aprenderás el por qué es necesario digitalizar tu empresa o negocio en estos tiempos, enseñado por el canal de Youtube Emprendedor Eficaz.
                        </p>
                        <br />
                        <button src="#asda" className='button'> 
                            <ArrowRightOutlined />
                            &nbsp; Ver Ahora 
                        </button>       
                    </div>
                    <iframe width="800" height="400" src="https://www.youtube.com/embed/_vN3MPrWG10" title="Por qué Digitalizar Tu Negocio" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className="banner">
                    <div className="banner-desc">
                        <h1 className="text-thin">
                        <strong>Digitaliza tu negocio: Las soluciones digitales que te harán crecer</strong>
                        </h1>
                        <p>
                        En ese video, obtendrás lo necesario para digitalizar un negocio, enseñado por el canal de Youtube de Telefónica España.
                        </p>
                        <br />
                        <button src="#asda" className='button'> 
                            <ArrowRightOutlined />
                            &nbsp; Ver Ahora 
                        </button>       
                    </div>
                    <iframe width="800" height="400" src="https://www.youtube.com/embed/Tm_Q2gNvbuM" title="Digitaliza tu negocio: Las soluciones digitales que te harán crecer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

            </div>
        </main>
    )

}

export default Blog