import React, { useRef, useState, useContext, useEffect } from 'react';
import '../Css/Filter.css';
import { boolContext, filterContext } from '../App';

function FilterBox() {
    const { isFilterPage, setFilterPage } = useContext(boolContext);
    const { check,filterToDo, setFilterName,getFilterName,setCheck,clearFilterColor,setClearFilterColor,applyBtnClicked} = useContext(filterContext);
    const middleBlackBoxRef = useRef(null);
    const clrFltr = useRef(null);
    const sliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    // const [filterToDo, filterToDo] = useState({
    //     sortBy: "default",
    //     Delivery: [],
    //     FilterByCuisine: [],
    //     Explore: [],
    //     rating: [],
    //     VegNonVeg: ''
    // });

    // const getFilterName = (e) => {
    //     const { type, name, dataset, checked } = e.target;
    //     const DataSetFilterName = dataset.filter;
    //     filterToDo((prevState) => {
    //         let updatedState = { ...prevState };
    //         if (type === 'radio') {
    //             updatedState[name] = DataSetFilterName;
    //         } else if (type === 'checkbox') {
    //             if (checked) {
    //                 updatedState[name] = [...updatedState[name], DataSetFilterName];
    //             } else {
    //                 updatedState[name] = updatedState[name].filter((filter) => filter !== DataSetFilterName);
    //             }
    //         }
    //         setCheck(true);
            // if (check) {
            //     clrFltr.current.style.color = 'rgb(241, 87, 0)';
            // }

    //         return updatedState;
    //     });
    // };
    useEffect(()=>{
        if (check) {
            if(clearFilterColor){
                clrFltr.current.style.color = 'rgb(241, 87, 0)';
            }
        }
    })


    const clearFilter = (e) => {
        middleBlackBoxRef.current.style.setProperty('--flexVar', 'flex');
        setTimeout(() => { middleBlackBoxRef.current.style.setProperty('--flexVar', 'none') }, 2000)
        setFilterName({
            sortBy: "default",
            Delivery: [],
            FilterByCuisine: [],
            Explore: [],
            rating: [],
            VegNonVeg: ''
        });
        setClearFilterColor(false);
        e.target.style.color = 'rgb(126, 127, 128)';
    };

    const removeThePage = () => {
        setCheck(false);
        setFilterPage(!isFilterPage);
    };

    const handleClick = (index, e) => {
        sliderRef.current.style.setProperty('--newFilterVar', `translateY(${e.target.offsetTop - 10}px)`);
        setCurrentIndex(index);
    };

    const secondDivArray = [
        <div className='sortByItems' key="0">
            <h4>SORT BY</h4>
            <div>
                <section>
                    <input type='radio' name='sortBy' data-filter='default' checked={filterToDo.sortBy === 'default'} onChange={getFilterName}></input>
                    <label htmlFor='default'>Relevance(Default)</label>
                </section>
                <section>
                    <input type='radio' name='sortBy' data-filter='delivery' checked={filterToDo.sortBy === 'delivery'} onChange={getFilterName}></input>
                    <label htmlFor='delivery'>Delivery Time</label>
                </section>
                <section>
                    <input type='radio' name='sortBy' data-filter='rating' checked={filterToDo.sortBy === 'rating'} onChange={getFilterName}></input>
                    <label htmlFor='rating'>Rating</label>
                </section>
                <section>
                    <input type='radio' name='sortBy' data-filter='costLtoH' checked={filterToDo.sortBy === 'costLtoH'} onChange={getFilterName}></input>
                    <label htmlFor='costLtoH'>Cost:Low to High</label>
                </section>
                <section>
                    <input type='radio' name='sortBy' data-filter='costHtoL' checked={filterToDo.sortBy === 'costHtoL'} onChange={getFilterName}></input>
                    <label htmlFor='costHtoL'>Cost: High to Low</label>
                </section>
            </div>
        </div>,
        <div className='sortByItems' key="1">
            <h4>FILTER BY</h4>
            <div>
                <section>
                    <input type='checkbox' name='Delivery' data-filter='delivery' checked={filterToDo.Delivery.includes('delivery')} onChange={getFilterName}></input>
                    <label htmlFor='delivery'>Fast Delivery</label>
                </section>
            </div>
        </div>,
        <div className='sortByItems' key="2">
            <h4>FILTER BY CUISINE</h4>
            <div>
                <section>
                    <input type='checkbox' name='FilterByCuisine' data-filter='Asian' checked={filterToDo.FilterByCuisine.includes('Asian')} onChange={getFilterName}></input>
                    <label htmlFor='Asian'>Asian</label>
                </section>
                <section>
                    <input type='checkbox' name='FilterByCuisine' data-filter='Pizza' checked={filterToDo.FilterByCuisine.includes('Pizza')} onChange={getFilterName}></input>
                    <label htmlFor='Pizza'>Pizza</label>
                </section>
                <section>
                    <input type='checkbox' name='FilterByCuisine' data-filter='Snacks' checked={filterToDo.FilterByCuisine.includes('Snacks')} onChange={getFilterName}></input>
                    <label htmlFor='Snacks'>Snacks</label>
                </section>
                <section>
                    <input type='checkbox' name='FilterByCuisine' data-filter='Rolls' checked={filterToDo.FilterByCuisine.includes('Rolls')} onChange={getFilterName}></input>
                    <label htmlFor='Rolls'>Rolls</label>
                </section>
                <section>
                    <input type='checkbox' name='FilterByCuisine' data-filter='Sandwich' checked={filterToDo.FilterByCuisine.includes('Sandwich')} onChange={getFilterName}></input>
                    <label htmlFor='Sandwich'>Sandwich</label>
                </section>
                <section>
                    <input type='checkbox' name='FilterByCuisine' data-filter='Bakery' checked={filterToDo.FilterByCuisine.includes('Bakery')} onChange={getFilterName}></input>
                    <label htmlFor='Bakery'>Bakery</label>
                </section>
                <section>
                    <input type='checkbox' name='FilterByCuisine' data-filter='Barbecue' checked={filterToDo.FilterByCuisine.includes('Barbecue')} onChange={getFilterName}></input>
                    <label htmlFor='Barbecue'>Barbecue</label>
                </section>
                <section>
                    <input type='checkbox' name='FilterByCuisine' data-filter='Bengali' checked={filterToDo.FilterByCuisine.includes('Bengali')} onChange={getFilterName}></input>
                    <label htmlFor='Bengali'>Bengali</label>
                </section>
                <section>
                    <input type='checkbox' name='FilterByCuisine' data-filter='Cafe' checked={filterToDo.FilterByCuisine.includes('Cafe')} onChange={getFilterName}></input>
                    <label htmlFor='Cafe'>Cafe</label>
                </section>
                <section>
                    <input type='checkbox' name='FilterByCuisine' data-filter='Ice Cream' checked={filterToDo.FilterByCuisine.includes('Ice Cream')} onChange={getFilterName}></input>
                    <label htmlFor='Ice Cream'>Ice Cream</label>
                </section>
                <section>
                    <input type='checkbox' name='FilterByCuisine' data-filter='Indian' checked={filterToDo.FilterByCuisine.includes('Indian')} onChange={getFilterName}></input>
                    <label htmlFor='Indian'>Indian</label>
                </section>
            </div>
        </div>,
        <div className='sortByItems' key="3">
            <h4>FILTER BY</h4>
            <div>
                <section>
                    <input type='checkbox' name='Explore' data-filter='New On Swiggy' checked={filterToDo.Explore.includes('New On Swiggy')} onChange={getFilterName}></input>
                    <label htmlFor='New On Swiggy'>New On Swiggy</label>
                </section>
            </div>
        </div>,
        <div className='sortByItems' key="4">
            <h4>FILTER BY</h4>
            <div>
                <section>
                    <input type='checkbox' name='rating' data-filter='Ratings 4.5+' checked={filterToDo.rating.includes('Ratings 4.5+')} onChange={getFilterName}></input>
                    <label htmlFor='Ratings 4.5+'>Ratings 4.5+</label>
                </section>
                <section>
                    <input type='checkbox' name='rating' data-filter='Ratings 4.0+' checked={filterToDo.rating.includes('Ratings 4.0+')} onChange={getFilterName}></input>
                    <label htmlFor='Ratings 4.0+'>Ratings 4.0+</label>
                </section>
                <section>
                    <input type='checkbox' name='rating' data-filter='Ratings 3.5+' checked={filterToDo.rating.includes('Ratings 3.5+')} onChange={getFilterName}></input>
                    <label htmlFor='Ratings 3.5+'>Ratings 3.5+</label>
                </section>
            </div>
        </div>,
        <div className='sortByItems' key="5">
            <h4>FILTER BY</h4>
            <div>
                <section>
                    <input type='radio' name='VegNonVeg' data-filter='Pure Veg' checked={filterToDo.VegNonVeg === 'Pure Veg'} onChange={getFilterName}></input>
                    <label htmlFor='Pure Veg'>Pure Veg</label>
                </section>
                <section>
                    <input type='radio' name='VegNonVeg' data-filter='Non-Veg' checked={filterToDo.VegNonVeg === 'Non-Veg'} onChange={getFilterName}></input>
                    <label htmlFor='Non-Veg'>Non-Veg</label>
                </section>
            </div>
        </div>
    ];

    return (
        <div className="coverAllBack">
            <div className="middleBackBox" ref={middleBlackBoxRef}>
                <div className='h1Filter'>
                    <h1>Filter</h1>
                    <span>
                        <i className="fa-solid fa-xmark" onClick={removeThePage}></i>
                    </span>
                </div>
                <div className='twoDivContainerForFilter'>
                    <div className='firstDivContainingFilterName' ref={sliderRef}>
                        {['Sort', 'Delivery Time', 'Cuisines', 'Explore', 'Rating', 'Veg/Non-veg'].map((item, index) => (
                            <h2 className='child' key={index} onClick={(e) => handleClick(index, e)}>{item}</h2>
                        ))}
                    </div>
                    <div className='secondDivContainingFilterName'>
                        {secondDivArray[currentIndex]}
                    </div>
                </div>
                {check && (
                    <footer>
                        <div className='lastCont'>
                            <div>
                                <button className='clearFilter' onClick={clearFilter} ref={clrFltr}>Clear Filter</button>
                            </div>
                            <div>
                                <button className='apply' onClick={applyBtnClicked}>Apply</button>
                            </div>
                        </div>
                    </footer>
                )}
            </div>
        </div>
    );
}

export default FilterBox;
