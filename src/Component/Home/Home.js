import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import img1 from './images/Toyota-Electric-1.jpg';
import img2 from './images/toyota-ultra-compact-bev-2.webp';
import img3 from './images/message-editor_3.webp';
import img4 from './images/20160927_01_01_0-4.jpg';
import img5 from './images/Toyota-Electric-5.webp';
import img6 from './images/587ca5cc4abf-6.jpg';
import img7 from './images/Toyota-Electric-7.webp';
import img8 from './images/toyota-iq-sema-8.jpg';
import img9 from './images/Toyota-Electric-9.webp';
import img10 from './images/2023-farnova-10.jpg';
import img11 from './images/BZ4_MY23_0052_V002-11.webp';
import img12 from './images/BZ4_MY23_0020_V001-12.webp';
import logo from './images/Toyota_EU.svg.png'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Home = () => {
    return (
        <div className='main'>
            <div className="pages-1">
                <div className="H1">
                    <h1>Toyota</h1>
                </div>
                <div >
                    <h1>Toyota Concept-l Saries</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates hic corporis, incidunt facilis fugiat, inventore ipsum voluptas velit, debitis odit itaque distinctio aspernatur quia perferendis. Alias consequuntur atque perspiciatis unde.</p>
                </div>
            </div>
            <div className="pages-2">
                <div className="images-2">
                    <h1> </h1>
                    <div className='img'></div>
                </div>
                <div className='pagesText-2'>
                    <h1>The future has arrived.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates hic corporis, incidunt facilis fugiat, inventore ipsum voluptas velit, debitis odit itaque distinctio aspernatur quia perferendis. Alias consequuntur atque perspiciatis unde.</p>
                    <Link className='btn-2' to="/LearnMore">Learn More</Link>
                </div>
            </div>
            <div className="pages-3">
                <div className="pagesText-3">
                <h1>Less of a Machine. <br /> More of a Pal.</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique consequatur enim necessitatibus, magnam odit explicabo exercitationem dolore molestias voluptas dolores rerum aperiam? Fuga, suscipit. Soluta similique at harum architecto quo!</p>
                    <Link className='btn-3' to="/LearnMore">Learn More</Link>
                </div>
                <div className="images-3"></div>
            </div>
            <div className="pages-3">
                <div className="pagesText-3">
                <h1>Neue Toyota Concept Cars in Tokio</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam nihil id omnis totam praesentium similique sapiente repudiandae neque cupiditate porro aperiam debitis iure, quos eum reprehenderit nisi molestias, vero modi consequuntur commodi. Qui ipsam nemo vel dicta dolores quaerat, itaque, reprehenderit repellendus quasi magni maxime accusantium odio eius dolorem? Et!</p>
                    <Link className='btn-4' to="/LearnMore">Learn More</Link>
                </div>
                <div className="images-4"></div>
            </div>
            <div className="pages-3">
                <div className="images-5"></div>

                <div className="pagesText-3">
                <h1>Concept-i Loofs as Brilliant</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam nihil id omnis totam praesentium similique sapiente repudiandae neque cupiditate porro aperiam debitis iure, quos eum reprehenderit nisi molestias, vero modi consequuntur commodi. Qui ipsam nemo vel dicta dolores quaerat, itaque, reprehenderit repellendus quasi magni maxime accusantium odio eius dolorem? Et!</p>
                    <Link className='btn-3' to="/LearnMore">Learn More</Link>
                </div>
            </div>
            <div className="pages-6">
                <div className="pagesText6-1">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa nobis maiores magnam quo eaque doloribus esse, sequi amet nisi molestiae nam libero exercitationem alias sint aliquid fugit velit quam iure.
                    Aperiam, nemo adipisci labore quod, nostrum laborum cumque quo dolores voluptates laudantium est laboriosam, velit commodi dolorem temporibus. Doloremque reiciendis voluptatibus, quam in ex laudantium nesciunt explicabo assumenda velit sapiente!
                    Error sequi deleniti cumque exercitationem, consequatur eius inventore quam, nemo blanditiis, eligendi quo. Pariatur maxime amet quaerat veniam ullam, impedit fugit, perspiciatis accusamus maiores quidem natus ducimus quas necessitatibus explicabo?</p>
                </div>
                <div className="pagesText6-2">
                    <h1> Concept-i Puts the <br /> "i" in Team</h1> 
                    <Link className='btn-3' to="/LearnMore">Learn More</Link>
                </div>
            </div>
            <div className="pages-2">
                <div className="images-2">
                    <h2> </h2>
                    <div className="img-1"></div>
                </div>
                <div className='pagesText-2'>
                    <h1>The future has arrived.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates hic corporis, incidunt facilis fugiat, inventore ipsum voluptas velit, debitis odit itaque distinctio aspernatur quia perferendis. Alias consequuntur atque perspiciatis unde.</p>
                    <Link className='btn-5' to="/LearnMore">Learn More</Link>
                </div>
            </div>
            <div className="gallery">
                <div className="text">
                    <h1>JOIN US THE FUTURE</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Ullam atque obcaecati velit quod voluptates, amet ratione maxime molestiae similique maiores,<br /> consequuntur, eius odio. Placeat, laboriosam.</p>
                </div>
                <div className="photo">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                    <img src={img6} alt="" />
                    <img src={img7} alt="" />
                    <img src={img8} alt="" />
                    <img src={img9} alt="" />
                    <img src={img10} alt="" />
                    <img src={img11} alt="" />
                    <img src={img12} alt="" />
                </div>
            </div>
            <div className="footer">
                <img src={logo} alt="" />
                <h1>Toyota</h1>
                <div className="headline">
                    <div>
                        <h2>Lead Line</h2>
                        <p>Sample footer text.</p>
                    </div>
                    <div>
                        <h2>Lead Line</h2>
                        <p>Sample footer text.</p>
                    </div>
                    <div>
                        <h2>Lead Line</h2>
                        <p>Sample footer text.</p>
                    </div>
                </div>
                <div className="icones">
                    <FacebookOutlinedIcon sx={{marginRight:'40px'}}></FacebookOutlinedIcon>
                    <TwitterIcon sx={{marginRight:'40px'}}></TwitterIcon>
                    <InstagramIcon sx={{marginRight:'40px'}}></InstagramIcon>
                    <LinkedInIcon ></LinkedInIcon>
                </div>
            </div>
        </div>
    );
};

export default Home;