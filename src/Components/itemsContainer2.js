import { useRef,useEffect } from 'react';
import '../Css/itemsContainer2.css';
// import img from '../images2/1.avif';

function ItemsContainer2() {
                                                            //Items Data
    let productObj = {
        item1:[require('../images2/1.avif'),"ITEMS AT ₹149","Chinese Wok","3.9","•35-40 mins","Chinese,Asian,Tibetan,Desserts Omaxe mall"],
        item2:[require('../images2/2.avif'),"ITEMS AT ₹199","UBQ by Barbeque Nation","4.1","•30-35 mins","North Indian,Barbecue,Biryani,Janpath"],
        item3:[require('../images2/3.avif'),"50% OFF UPTO ₹90","Wow! Momo","4.1","•30-35 mins","Tibetan,Healthy Food,Asian,Omaxe Chowk"],
        item4:[require('../images2/4.avif'),"50% OFF UPTO ₹90","Pizza Hut","3.9","•35-40 mins","Pizzas Omaxe Chandni Chowk"],
        item5:[require('../images2/5.avif'),"50% OFF UPTO ₹100","Barbeque Nation","4.1","•35-40 mins","North Indian,Barbecue,Biryani,Connaught Place"],
        item6:[require('../images2/6.avif'),"20% OFF UPTO ₹50","KFC","3.9","•35-40 mins","Burger,Rolls & Wraps,Fast Food Chandnni Chowk"],
        item7:[require('../images2/7.avif'),"ITEMS AT ₹149","McDonald's","4.3","•25-30 mins","American Chandni Chowk"],
        item8:[require('../images2/8.avif'),"50% OFF UPTO ₹299","Domino's Pizza","4.3","•20-25 mins","Pizzas,Italian,Pastas,Desserts,Daryaganj"],
        item9:[require('../images2/9.avif'),"50% OFF UPTO ₹100","NIC Ice Creams","4.6","•35-40 mins","Ice Cream,Desserts Block-Ua"],
        item10:[require('../images2/10.avif'),"60% OFF UPTO ₹120","Great Indian Khichdi by Eat Fit","4.5","•30-35 mins","Home Food,Indian,North Indian,Paharganj"],
        item11:[require('../images2/11.avif'),"₹100 OFF ABOVE ₹349 ","Grameen Kulfi","4.6","•35-40 mins","Ice Cream,Desserts Karol Bagh"],
        item12:[require('../images2/12.avif'),"50% OFF  UPTO ₹90 ","Baskin Robbins - Ice Cream","4.6","•35-40 mins","Desserts,Ice Cream,Connaught Place"],
        item13:[require('../images2/13.avif'),"15% OFF  ","Theobroma","4.6","•25-30 mins","Bakerty,Desserts,Connaught Place"],
        item14:[require('../images2/14.avif'),"25% OFF  ","Kwality Wall's","4.6","•20-25 mins","Desserts,Connaught Place"],
        item15:[require('../images2/15.avif'),"50% OFF UPTO ₹90  ","Natural Ice Cream","4.6","•25-30 mins","Ice Cream,Desserts,Connaught Place"],
        item16:[require('../images2/16.avif'),"50% OFF UPTO ₹90  ","Wow! China","3.6","•30-35 mins","Tibetan,Chinese,Asian,Omaxe Chowk"],
        item17:[require('../images2/17.avif'),"50% OFF UPTO ₹90  ","Pastas By Pizza Hut","3.6","•25-30 mins","Pastas,Connaught Place"],
        item18:[require('../images2/18.avif'),"50% OFF UPTO ₹90  ","Hong's Momos","4.0","•25-30 mins","Tibetan,Chinese,Asian,Chandni Chowk"],
        item19:[require('../images2/19.avif'),"50% OFF UPTO ₹90  ","Chole Bhature","3.5","•30-35 mins",",Asian,Chandni Chowk"],
        item20:[require('../images2/20.avif'),"ITEMS AT ₹199 ","L'Opera","4.3","•25-30 mins","Bakery,Cafe,French,Civil Lines"],
    }

                                                        //Sliding the Image logic
    let ref2 = useRef(null);

    function sliderRight2() {
        ref2.current.scrollBy({ left: 500, behavior: 'smooth' });
    };

    function sliderLeft2() {
        ref2.current.scrollBy({ left: -500, behavior: 'smooth' });
    }


    


    return (
        <div className='itemsContainer2'>
            <div className='whatsOnYourMind2'>
                <div className="mainHeading2">
                    <h1>Top restaurant chains in Delhi</h1>
                    <span className='firstSpan2'>
                        <span onClick={sliderLeft2} className='leftBtn2'><i className="fa-solid fa-arrow-left" ></i></span>
                        <span onClick={sliderRight2} className='rightBtn2'><i className="fa-solid fa-arrow-right"></i></span>
                    </span>
                </div>
                <div className='foodItemsHeading2'>
                    <div className='foodItemsHeadingImages2' ref={ref2}>

                                                                {/* using map to show products dynamically */}
  
                        {
                                Object.entries(productObj).map((e,index)=>{
                                  
                            return(

                        <div className='foodItemsDiv' key={index}>

                            <div className='imageTextContainer'>
                                <div className='hoverEffectDiv'>

                                    <div className='imageText'>
                                    <img src={e[1][0]} alt={`item ${index + 1}`} />
                                        <h2>{e[1][1]}</h2>
                                    </div>
                                    <div className='onlyText'>
                                        <h3>{e[1][2]}</h3>
                                        <div>
                                            <span>
                                                <i className="fa-solid fa-star"></i>
                                            </span>
                                            <span>
                                            {e[1][3]}
                                            </span>
                                            <span>{e[1][4]}</span>
                                        </div>
                                        <div>
                                            <p>
                                            {e[1][5]}
                                            </p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            </div>
                            )
                        })
                            
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemsContainer2;