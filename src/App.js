import './App.css';
import React, { useRef, useEffect, useState, createContext } from 'react';
import Header from './Components/Header.js';
import ItemsContainer1 from './Components/itemsContainer1.js';
import ItemsContainer2 from './Components/itemsContainer2.js';
import Header2 from './Components/Header2.js';
import ItemsContainer4 from './Components/itemsContainer4.js';
import ItemsContainer5 from './Components/itemsContainer5.js';
import ItemsContainer6 from './Components/itemsContainer6.js';
import FilterBox from './Components/Filter.js';

const boolContext = createContext();
const filterContext = createContext();
const headerContext = createContext();

function App() {
  const headerRef = useRef(null);
  const filterRef = useRef(null);
  const [check, setCheck] = useState(false);
  const [isFilterPage, setFilterPage] = useState(false);
  const [clearFilterColor,setClearFilterColor]=useState(false);
  const [isSortBy,setSortBy]= useState(true);
  const [newFilterObj,setNewFilterObj]=useState({
    sortBy: "default",
    Delivery: [],
    FilterByCuisine: [],
    Explore: [],
    rating: [],
    VegNonVeg: ''
  })
  const [filterToDo, setFilterName] = useState({
    sortBy: "default",
    Delivery: [],
    FilterByCuisine: [],
    Explore: [],
    rating: [],
    VegNonVeg: ''
  });
  const [currentTopValue, setIsReachedTop] = useState(false);
  //Passing getFilterName function
  const getFilterName = (e) => {
    const { type, name, dataset, checked } = e.target;
    const DataSetFilterName = dataset.filter;
    console.log(e.target)
    setFilterName((prevState) => {
        let updatedState = { ...prevState };
        if (type === 'radio') {
            updatedState[name] = DataSetFilterName;
        } else if (type === 'checkbox') {
            if (checked) {
                updatedState[name] = [...updatedState[name], DataSetFilterName];
            } else {
                updatedState[name] = updatedState[name].filter((filter) => filter !== DataSetFilterName);
            }
        }
        setCheck(true);
        setClearFilterColor(true);
        return updatedState;
    });
    };
    function applyBtnClicked(e){
        setNewFilterObj(filterToDo)
        if(isFilterPage){
          setFilterPage(!isFilterPage);
        }
        if(!isSortBy){
          setSortBy(true)
        }   
    }
  useEffect(() => {
    const handleScroll = () => {
      const headerRefBottom = headerRef.current?.getBoundingClientRect().bottom || 0;
      const filterDivTop = filterRef.current?.getBoundingClientRect().top || 0;

      if (filterDivTop<= headerRefBottom) {
        setIsReachedTop(true);
      } else {
        setIsReachedTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
  <>
    <boolContext.Provider value={{ isFilterPage, setFilterPage }}>
      <filterContext.Provider value={{ check,filterToDo, setFilterName , getFilterName,setCheck,clearFilterColor,setClearFilterColor,applyBtnClicked}}>
        {isFilterPage && <FilterBox />}
      </filterContext.Provider>

      <main className='headerMain' ref={headerRef}>
        {!currentTopValue && <Header />}
      </main>
      <div className='mainContainer'>
        <div className='itemsContainer'>
          <ItemsContainer1 />
          <ItemsContainer2 />
          <div className='filterBoxheading'>
            <h1>Restaurants in Delhi with online delivery</h1>
          </div>
          <headerContext.Provider value={{ currentTopValue, setIsReachedTop,getFilterName }}>
            <filterContext.Provider value={{getFilterName , applyBtnClicked,isSortBy,setSortBy,newFilterObj}}>
                  <Header2 />
            </filterContext.Provider>
            </headerContext.Provider>
          <main ref={filterRef} className='main4'>
            <filterContext.Provider value={{newFilterObj}}>
              <ItemsContainer4 />
            </filterContext.Provider>
          </main>
            <ItemsContainer5/>
            <ItemsContainer6/>
        </div>
      </div>
    </boolContext.Provider>
    </>
  );
}

export default App;
export { boolContext, filterContext, headerContext };
