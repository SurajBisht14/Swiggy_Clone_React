
import { useContext, useRef } from 'react';
import { filterContext } from '../App';
import '../Css/itemsContainer4.css';

function ItemsContainer4() {
    const { newFilterObj } = useContext(filterContext);


    let productObj = {
        item1: [require('../images2/1.avif'), "ITEMS AT ₹149", "Chinese Wok", "3.9", "•35-40 mins", "Chinese,Asian,Tibetan,Desserts Omaxe mall", "NONVEG", 149],
        item2: [require('../images2/2.avif'), "ITEMS AT ₹199", "UBQ by Barbeque Nation", "4.1", "•30-35 mins", "North Indian,Barbecue,Biryani,Janpath", "NONVEG", 199],
        item3: [require('../images2/3.avif'), "50% OFF UPTO ₹90", "Wow! Momo", "4.1", "•30-35 mins", "Tibetan,Healthy Food,Asian,Omaxe Chowk", "NONVEG", 149],
        item4: [require('../images2/4.avif'), "50% OFF UPTO ₹90", "Pizza Hut", "3.9", "•35-40 mins", "Pizzas Omaxe Chandni Chowk", "NONVEG", 200],
        item5: [require('../images2/5.avif'), "50% OFF UPTO ₹100", "Barbeque Nation", "4.1", "•35-40 mins", "North Indian,Barbecue,Biryani,Connaught Place", "NONVEG", 100],
        item6: [require('../images2/6.avif'), "20% OFF UPTO ₹50", "KFC", "3.9", "•35-40 mins", "Burger,Rolls & Wraps,Fast Food Chandnni Chowk", "NONVEG", 199],
        item7: [require('../images2/7.avif'), "ITEMS AT ₹149", "McDonald's", "4.3", "•25-30 mins", "American Chandni Chowk", "VEG", 149],
        item8: [require('../images2/8.avif'), "50% OFF UPTO ₹299", "Domino's Pizza", "4.3", "•20-25 mins", "Pizzas,Italian,Pastas,Desserts,Daryaganj", "NONVEG", 499],
        item9: [require('../images2/9.avif'), "50% OFF UPTO ₹100", "NIC Ice Creams", "4.6", "•35-40 mins", "Ice Cream,Desserts Block-Ua", "VEG", 199],
        item10: [require('../images2/10.avif'), "60% OFF UPTO ₹120", "Great Indian Khichdi by Eat Fit", "4.5", "•30-35 mins", "Home Food,Indian,North Indian,Paharganj", "NONVEG", 299],
        item11: [require('../images2/11.avif'), "₹100 OFF ABOVE ₹349 ", "Grameen Kulfi", "4.6", "•35-40 mins", "Ice Cream,Desserts Karol Bagh", "VEG", 399],
        item12: [require('../images2/12.avif'), "50% OFF  UPTO ₹90 ", "Baskin Robbins - Ice Cream", "4.6", "•35-40 mins", "Desserts,Ice Cream,Connaught Place", "VEG", 180],
        item13: [require('../images2/13.avif'), "15% OFF  ", "Theobroma", "4.6", "•25-30 mins", "Bakery,Desserts,Connaught Place", "VEG", 199],
        item14: [require('../images2/14.avif'), "25% OFF  ", "Kwality Wall's", "4.6", "•20-25 mins", "Desserts,Connaught Place", "VEG", 199],
        item15: [require('../images2/15.avif'), "50% OFF UPTO ₹90  ", "Natural Ice Cream", "4.6", "•25-30 mins", "Ice Cream,Desserts,Connaught Place", "VEG", 180],
        item16: [require('../images2/16.avif'), "50% OFF UPTO ₹90  ", "Wow! China", "3.6", "•30-35 mins", "Tibetan,Chinese,Asian,Omaxe Chowk", "NONVEG", 180],
        item17: [require('../images2/17.avif'), "50% OFF UPTO ₹90  ", "Pastas By Pizza Hut", "3.6", "•25-30 mins", "Pastas,Connaught Place", "NONVEG", 180],
        item18: [require('../images2/18.avif'), "50% OFF UPTO ₹90  ", "Hong's Momos", "4.0", "•25-30 mins", "Tibetan,Chinese,Asian,Chandni Chowk", "NONVEG", 180],
        item19: [require('../images2/19.avif'), "50% OFF UPTO ₹90  ", "Chole Bhature", "3.5", "•30-35 mins", "Asian,Chandni Chowk", "VEG", 180],
        item20: [require('../images2/20.avif'), "ITEMS AT ₹199 ", "L'Opera", "4.3", "•25-30 mins", "Bakery,Cafe,French,Civil Lines", "VEG", 199],
    };
    

    let filteredProductObj;
    let sortByFilter = newFilterObj.sortBy;

    if (sortByFilter === 'default') {
        filteredProductObj = { ...productObj };
    }
     else if (sortByFilter === 'delivery') {
        filteredProductObj = Object.fromEntries(
            Object.entries(productObj)
                .map(([key, value]) => {
                    let num = value[4].match(/\d+/g);
                    let avg = num.reduce((a, b) => a + parseInt(b), 0) / num.length;
                    return { key, value, avg };
                })
                .sort((a, b) => a.avg - b.avg)
                .map(({ key, value }) => [key, value])
        );
    } else if (sortByFilter === 'rating') {
        filteredProductObj = Object.fromEntries(
            Object.entries(productObj).sort((a, b) => b[1][3] - a[1][3])
        );
    } else if (sortByFilter === 'costLtoH') {
        filteredProductObj = Object.fromEntries(
            Object.entries(productObj).sort((a, b) => a[1][7] - b[1][7])
        );
    } else if (sortByFilter === 'costHtoL') {
        filteredProductObj = Object.fromEntries(
            Object.entries(productObj).sort((a, b) => b[1][7] - a[1][7])
        );
    }

    let ref2 = useRef(null);

    return (
        <div className='itemsContainer4'>
            <div className='foodItemsHeading4'>
                <div className='foodItemsHeadingImages4' ref={ref2}>
                    {Object.entries(filteredProductObj).map((e, index) => (
                        <div className='foodItemsDiv4' key={index}>
                            <div className='imageTextContainer4'>
                                <div className='hoverEffectDiv4'>
                                    <div className='imageText4'>
                                        <img src={e[1][0]} alt={`item ${index + 1}`} />
                                        <h2>{e[1][1]}</h2>
                                    </div>
                                    <div className='onlyText4'>
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
                                            <p>{e[1][5]}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ItemsContainer4;
