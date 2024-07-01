import {useRef} from 'react';

import '../Css/itemsContainer1.css';
function ItemsContainer1(){

                                                            // Food items heading images
let imageNames=[
    require('../images/Biryani_2.avif'),
    require('../images/Burger.avif'),
    require('../images/Cakes.avif'),
    require('../images/Chole_Bature.avif'),
    require('../images/Coffee.avif'),
    require('../images/Dosa.avif'),
    require('../images/Gulab_Jamun.avif'),
    require('../images/Idli.avif'),
    require('../images/Lassi.avif'),
    require('../images/Pakodas.avif'),
    require('../images/Pasta.avif'),
    require('../images/Paratha.avif'),
    require('../images/Pizza.avif'),
    require('../images/Poori.avif'),
    require('../images/Rasmalai.avif'),
    require('../images/Rolls.avif'),
    require('../images/Salad.avif'),
    require('../images/Shakes.avif'),
    require('../images/Tea.avif'),
    require('../images/Upma.avif')
];
                                                           //sliding images using useRef


let ref=useRef(null);
function sliderRight(e){
    ref.current.scrollBy({ left: 500, behavior: 'smooth' });
 
};
function sliderLeft(e){
    ref.current.scrollBy({ left: -500, behavior: 'smooth' });
}


return(

        <div className='itemsContainer1'>
                                                                      {/* Whats on your mind block with some items */}

                      <div className='whatsOnYourMind'>
                          <div className="mainHeading">
                              <h1>Whats on your mind?</h1>
                              <span className='firstSpan'>
                                  <span onClick={sliderLeft} className='leftBtn'><i className="fa-solid fa-arrow-left" ></i></span>
                                  <span onClick={sliderRight} className='rightBtn'><i className="fa-solid fa-arrow-right"></i></span>
                              </span>
                          </div>
                          <div className='foodItemsHeading'>
                          <div className='foodItemsHeadingImages' ref={ref}>

                          {
                            imageNames.map((imageSrc, index) => (
                            <img key={index} src={imageSrc} alt={`Food item ${index + 1}`} />
                             ))
                          }
                          </div>
                          <div className='upp'></div>
                          </div>
                      </div>

            </div>  

    )
}
export default ItemsContainer1;
