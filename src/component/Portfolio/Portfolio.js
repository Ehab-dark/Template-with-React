import React , {useState, useEffect} from 'react';
import axios from 'axios';
import './PortfolioStyle.css'


const Portfolio = () => {

    /*state in function component */
    const [imagess,setImagess] = useState ([]);

    useEffect( () => {
        axios.get('js/data.json').then( res => {setImagess(res.data.portfolio)});
    } , [] );

                    /* this is LOOP FOR IMages */
        const portfolioImages = imagess.map( (imageItem) => {
            return (
                <div key={imageItem.id}>

                    <img src={imageItem.image} alt="" />
                    <p className="overlay">
                        <span>
                            Show Image
                        </span>
                    </p>
                </div>
            )
        })


    return (
     
        <div>
         
         <div className="portfolio">
            <h2 className="portfolio-title"><span>My</span> Portfolio</h2>
            <ul className="portfolio-list">
                <li className="portfolio-item active">All</li>
                <li className="portfolio-item">HTML</li>
                <li className="portfolio-item">Photoshop</li>
                <li className="portfolio-item">Wordpress</li>
                <li className="portfolio-item">Mobile</li>
            </ul>
            
            <div className="box">
                {portfolioImages}
            </div>
            
        </div>
         
        
        </div>
   
    );
  }

export default Portfolio; 
