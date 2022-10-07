import { ArrowRightOutlined,ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import React,{useState, useEffect} from 'react'
import bannerImg from 'images/banner-mercado-home.jpg';
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
                        <strong>Como digitalizar tu negocio</strong>
                        </h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lorem magna, blandit eu dignissim sed, scelerisque id velit. Morbi eget leo scelerisque, 
                        lacinia nulla nec, sodales turpis. Donec quis sodales diam, at aliquet quam. Morbi mattis, mauris ut vulputate tincidunt, quam augue condimentum eros, id rutrum est ipsum et turpis.
                        </p>
                        <br />
                        <button src="#asda" className='button'> 
                            Ver Ahora &nbsp;
                            <ArrowRightOutlined />
                        </button>
                    </div>
                    <div className="banner-img"><img src={bannerImg} alt="" /></div>
                </div>

                <div className="banner">
                    <div className="banner-img"><img src={bannerImg} alt="" /></div>
                    <div className="banner-desc">
                        <h1 className="text-thin">
                        <strong>Beneficios de la digitalización</strong>
                        </h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lorem magna, blandit eu dignissim sed, scelerisque id velit. Morbi eget leo scelerisque, 
                        lacinia nulla nec, sodales turpis. Donec quis sodales diam, at aliquet quam. Morbi mattis, mauris ut vulputate tincidunt, quam augue condimentum eros, id rutrum est ipsum et turpis.
                        </p>
                        <br />
                        <button src="#asda" className='button'> 
                            <ArrowLeftOutlined />
                            &nbsp; Ver Ahora 
                        </button>       
                    </div>
                </div>

            </div>
        </main>
    )

}

export default Blog