import { ArrowRightOutlined,ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import React,{useState, useEffect} from 'react'
import {useDocumentTitle,useScrollTop} from 'hooks';


const Ubicanos = () => {
    useDocumentTitle('Ubícanos');
    useScrollTop();
   

    return (
        <main className="content">
            <div className="blog">
                <div className="banner">
                    <div className="banner-desc">
                        <h1 className="text-thin">
                        Gran Mercado Mayorista de Lima
                        </h1>
                        <p>
                        El Gran Mercado Mayorista de Lima es un centro de abastecimiento zonal de tipo Mayorista que inició actividades en el año 2013, con sus 9 años de existencia lo convierte en un mercado tradicional en su comunidad. Este mercado alberga 1000 puestos fijos y tiene 1000 puestos activos permanentemente.
                        </p>
                        <br />
                        <a href="https://goo.gl/maps/DyYKikSNZhGo8qmG9" target="_blank">
                            <button className='button' type='button'> 
                                Visitar &nbsp;
                                <ArrowRightOutlined />
                            </button>
                        </a>
                        
                    </div>
                    <div className="banner-img">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.068568003437!2d-76.94914428518756!3d-12.038800491472609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7d300133839%3A0xffd65218eec98b5c!2sGran%20Mercado%20Mayorista%20de%20Lima!5e0!3m2!1ses!2spe!4v1666364908857!5m2!1ses!2spe" width="800" height="400" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

                <div className="banner">
                    <div className="banner-desc">
                        <h1 className="text-thin">
                        <strong>Mercado Unicachi</strong>
                        </h1>
                        <p>
                        El Mercado Unicachi es un centro de abastecimiento zonal de tipo Mixto (minorista/mayorista) que inició actividades en el año 2006, con sus 16 años de existencia lo convierte en un mercado tradicional en su comunidad. Este mercado alberga 500 puestos fijos y tiene 500 puestos activos permanentemente.
                        </p>
                        <br />
                        <a href="https://goo.gl/maps/sWuyL4ggotLmnMXN9" target="_blank">
                            <button className='button' type='button'> 
                                Visitar &nbsp;
                                <ArrowRightOutlined />
                            </button>
                        </a>
                        
                    </div>
                    <div className="banner-img">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.5096558054374!2d-77.06924828518845!3d-11.939174191539049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105d1c452901ec3%3A0x1ca18f5f7dc18586!2sMercado%20Unicachi!5e0!3m2!1ses!2spe!4v1666398978673!5m2!1ses!2spe" width="800" height="400" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

                <div className="banner">
                    <div className="banner-desc">
                        <h1 className="text-thin">
                        Gran Mercado Mayorista Conzac
                        </h1>
                        <p>
                        El Gran Mercado Conzac es un centro de abastecimiento zonal de tipo Mixto (minorista/mayorista) que inició actividades en el año 1997, con sus 25 años de existencia lo convierte en un mercado tradicional en su comunidad. Este mercado alberga 997 puestos fijos y tiene 997 puestos activos permanentemente.
                        </p>
                        <br />
                        <a href="https://g.page/CONZACOFICIAL?share" target="_blank">
                            <button className='button' type='button'> 
                                Visitar &nbsp;
                                <ArrowRightOutlined />
                            </button>
                        </a>
                        
                    </div>
                    <div className="banner-img">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.5520266618378!2d-77.07389848518787!3d-12.005468491494826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cef1753d1cc7%3A0xfa8190a00d5c4a2e!2sGran%20Mercado%20Mayorista%20Conzac!5e0!3m2!1ses!2spe!4v1666382559706!5m2!1ses!2spe" width="800" height="400" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

            </div>
        </main>
    )

}

export default Ubicanos