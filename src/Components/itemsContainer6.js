// 
import React from 'react';
import '../Css/itemsContainer6.css';
import swiggyLogo from '../swiggy.png';

function ItemsContainer6() {
    const CompanyList = ['About', 'Careers', 'Team', 'Swiggy One', 'Swiggy Instamart', 'Swiggy Genie'];
    const contactList=['Help & Support','Partner with us','Ride with us'];
    const LegalList=['Term & Conditions','Cookie Policy','Privacy Policy','Investor Policy'];
    const citiesList=['Bangalore','Gurgaon','Hyderabad','Delhi','Mumbai','Pune'];

    return (
        <div className="itemsContainer6Div">
            <div className="itemsContainer6Div_Main">
                <div>
                    <h2>
                        <img src={swiggyLogo} alt="Swiggy Logo" /> Swiggy
                    </h2>
                    <p>© 2024 Bundl Technologies Pvt. Ltd</p>
                </div>
                <div>
                    <h2>Company</h2>
                    <ul>
                        {CompanyList.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div>
                  <h2>Contact</h2>
                  <ul>
                        {contactList.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <h2 style={{marginTop:"35px"}}>Legal</h2>
                    <ul>
                        {LegalList.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div>
                  <h2>We Deliver to:</h2>
                  {
                     <ul>
                     {citiesList.map((item, index) => (
                         <li key={index}>{item}</li>
                     ))}
                 </ul>
                  }
                </div>
            </div>
        </div>
    );
}

export default ItemsContainer6;
