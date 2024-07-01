import React, { useContext, useEffect, useRef, useState } from 'react';
import '../Css/Header2.css';
import png from '../settings-sliders.png';
import { boolContext, filterContext, headerContext } from '../App';
import png2 from '../pngwing.com.png';

function Header2() {
  const { isFilterPage, setFilterPage } = useContext(boolContext);
  const {currentTopValue} = useContext(headerContext);
  const yoHeader2 = useRef(null);
  const {getFilterName,applyBtnClicked,isSortBy,setSortBy,newFilterObj}=useContext(filterContext);
  const sortBoxRef=useRef(null);
  const [spanState,setSpanState]=useState(0);


  const cssHeader1 = {
    height: "90px",
    minWidth: "1490px",
    display: "flex",
    boxShadow: "0 10px 25px -15px rgba(118, 117, 117, 0.3)",
    fontFamily: "ProximaNova, arial, Helvetica Neue, sans-serif",
    alignItems: "center",
    zIndex: "100000",
    backgroundColor: "white",
    top: "0",
    paddingLeft: "150px",
    position: "fixed",
  };

  const cssHeader2 = {
          width: "80%",
        height: "80px",
        display: "flex",
        position:"static",
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sortBoxRef.current && !sortBoxRef.current.contains(event.target)) {
        setSortBy(true);
      }
    };

    if (!isSortBy) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isSortBy]);
  useEffect(()=>{
    Object.entries(newFilterObj).map((e,index)=>{
      console.log(e[1])
      if(e[1].includes([])){
        console.log("Empty")
      }
    })
  })

if (yoHeader2.current) {
    if (currentTopValue) {
      Object.assign(yoHeader2.current.style, cssHeader1);
    } else {
      // Resetting all properties from cssHeader1 to ensure complete override
      for (const property in cssHeader1) {
        yoHeader2.current.style[property] = "";
      }
      Object.assign(yoHeader2.current.style, cssHeader2);
    }
  }

  const showFilterPage = () => {
    setFilterPage(!isFilterPage);
  };

  return (
    <header className='header2' ref={yoHeader2}>
      <div className='header2Main'>
        <div className='filter' onClick={showFilterPage}>
          <span>1</span>
          Filter
          <img src={png} alt="Filter icon" />
        </div>
        {
            isSortBy ?  <div className='SortBy' onClick={()=>setSortBy(false)}>Sort By <img src={png2} alt="Sort icon" /></div> : 
            <div className='sortBy' ref={sortBoxRef}>
            <section>
                <input type='radio' name='sortBy' data-filter='default' defaultChecked onChange={getFilterName}></input>
                <label htmlFor='default'>Relevance(Default)</label>
            </section>

            <section>
                <input type='radio' name='sortBy' data-filter='delivery' onChange={getFilterName}></input>
                <label htmlFor='delivery'>Delivery Time</label>
            </section>

            <section>
                <input type='radio' name='sortBy' onChange={getFilterName} data-filter='rating'></input>
                <label htmlFor='rating'>Rating</label>
            </section>

            <section>

                <input type='radio' name='sortBy' onChange={getFilterName} data-filter='costLtoH'></input>
                <label htmlFor='costLtoH'>Cost:LowtoHigh</label>
            </section>

            <section>

                <input type='radio' name='sortBy' onChange={getFilterName} data-filter='costHtoL'></input>
                <label htmlFor='costHtoL'>Cost:HightoLow</label>
            </section>
            <footer>
              <button onClick={applyBtnClicked}>Apply</button>
            </footer>
        </div>
        }
      
        <div className='FastDelivery'>Fast Delivery</div>
        <div className='NewOnSwiggy'>New on Swiggy</div>
        <div className='Rating'>Rating 4.0+</div>
        <div className='veg'>Pure Veg</div>
        <div className='offers'>Offers</div>
        <div className='lessThan'>Rs 300 - Rs 600</div>
        <div className='lessThan'>Less than Rs 300</div>
        {currentTopValue && (
          // <input type='button' value='Search for restaurant and Food &#128269;' />
          <button>
            Search for restaurant and Food
            <i className="fas fa-search"></i>  
          </button>
        )}
      </div>
    </header>
  );
}

export default Header2;
