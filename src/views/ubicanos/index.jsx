import { ArrowRightOutlined,ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import React,{useState, useEffect} from 'react'
import bannerImg from 'images/banner-mercado-home.jpg';
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
                        <strong>Mercado n1</strong>
                        </h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lorem magna, blandit eu dignissim sed, scelerisque id velit. Morbi eget leo scelerisque, 
                        lacinia nulla nec, sodales turpis. Donec quis sodales diam, at aliquet quam. Morbi mattis, mauris ut vulputate tincidunt, quam augue condimentum eros, id rutrum est ipsum et turpis.
                        </p>
                        <br />
                        <a href="https://goo.gl/maps/DCaQUNXdAJKHSAH28" target="_blank">
                            <button className='button' type='button'> 
                                Visitar &nbsp;
                                <ArrowRightOutlined />
                            </button>
                        </a>
                        
                    </div>
                    <div className="banner-img">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.1764408515696!2d-76.86920918466903!3d-12.236329691341226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105bdb5c2eb540f%3A0x667ba9939f185202!2sUniversidad%20San%20Ignacio%20de%20Loyola%20-%20Campus%20Pachacamac!5e0!3m2!1sen!2spe!4v1664979079022!5m2!1sen!2spe" width="800" height="400" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

                <div className="banner">
                    <div className="banner-desc">
                        <h1 className="text-thin">
                        <strong>Mercado n2</strong>
                        </h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lorem magna, blandit eu dignissim sed, scelerisque id velit. Morbi eget leo scelerisque, 
                        lacinia nulla nec, sodales turpis. Donec quis sodales diam, at aliquet quam. Morbi mattis, mauris ut vulputate tincidunt, quam augue condimentum eros, id rutrum est ipsum et turpis.
                        </p>
                        <br />
                        <a href="https://goo.gl/maps/DCaQUNXdAJKHSAH28" target="_blank">
                            <button className='button' type='button'> 
                                Visitar &nbsp;
                                <ArrowRightOutlined />
                            </button>
                        </a>
                        
                    </div>
                    <div className="banner-img">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.1764408515696!2d-76.86920918466903!3d-12.236329691341226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105bdb5c2eb540f%3A0x667ba9939f185202!2sUniversidad%20San%20Ignacio%20de%20Loyola%20-%20Campus%20Pachacamac!5e0!3m2!1sen!2spe!4v1664979079022!5m2!1sen!2spe" width="800" height="400" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

                <div className="banner">
                    <div className="banner-desc">
                        <h1 className="text-thin">
                        <strong>Mercado n3</strong>
                        </h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lorem magna, blandit eu dignissim sed, scelerisque id velit. Morbi eget leo scelerisque, 
                        lacinia nulla nec, sodales turpis. Donec quis sodales diam, at aliquet quam. Morbi mattis, mauris ut vulputate tincidunt, quam augue condimentum eros, id rutrum est ipsum et turpis.
                        </p>
                        <br />
                        <a href="https://goo.gl/maps/DCaQUNXdAJKHSAH28" target="_blank">
                            <button className='button' type='button'> 
                                Visitar &nbsp;
                                <ArrowRightOutlined />
                            </button>
                        </a>
                        
                    </div>
                    <div className="banner-img">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.1764408515696!2d-76.86920918466903!3d-12.236329691341226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105bdb5c2eb540f%3A0x667ba9939f185202!2sUniversidad%20San%20Ignacio%20de%20Loyola%20-%20Campus%20Pachacamac!5e0!3m2!1sen!2spe!4v1664979079022!5m2!1sen!2spe" width="800" height="400" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

            </div>
        </main>
    )

}

export default Ubicanos