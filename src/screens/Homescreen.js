import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../actions/productAction';
import $ from 'jquery';
import Product from '../components/product';
import Loading from '../components/Loading';
import Error from '../components/Error';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import feather from 'feather-icons';
import Footer from '../components/Footer';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Counter from '../components/counter';
import Testimonials from '../components/testemonials';
import Projects from './projects';
import Services from './services';

export default function Homescreen() {
  const dispatch = useDispatch();
  const { products, error, loading } = useSelector(state => state.products);
  React.useEffect(() => {
    feather.replace();
  }, []);
  // Filtre
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategorie, setSelectedCategorie] = useState('Capsules Lavazza Amodo Mio');

  // Get products
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  // Filtre
  const filteredProducts = products.filter(product => {
    const matchesName = product.Nom.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategorie = selectedCategorie ? product['Categorie'] === selectedCategorie : true;
    return matchesName && matchesCategorie;
  });

  const handleCategoryChange = (categorie) => {
    setSelectedCategorie(categorie);
  };

  // Add "All" to the list of categories
  const categories = ['All', ...new Set(products.map(product => product.Categorie))];

  const renderCustomButtons = (categories) => {
    const chunkSize = 4; // Number of buttons per slide
    const chunks = [];
    for (let i = 0; i < categories.length; i += chunkSize) {
      chunks.push(categories.slice(i, i + chunkSize));
    }
    return chunks.map((chunk, index) => (
      <div key={index} className="category-slide col-12 col-md-12">
        {chunk.map((categorie) => (
          <button
            key={categorie}
            className={`category-btn text-truncate ${selectedCategorie === categorie || (categorie === 'All' && selectedCategorie === '') ? 'active' : ''} col-xs-3 col-3 col-md-3`}
            onClick={() => handleCategoryChange(categorie === 'All' ? '' : categorie)}
          >
            {categorie}
          </button>
        ))}
      </div>
    ));
  };

  console.log("Products:", products);
  console.log("Filtered Products:", filteredProducts);

  return (
    <div>
<div className="col-12 col-md-12">
  <Carousel
    showThumbs={false}
    infiniteLoop
    useKeyboardArrows
    interval={5000} // 5 secondes entre chaque transition
    transitionTime={1000} // 1 seconde pour la durée de la transition
    showIndicators={true}
    showStatus={false}
    autoPlay
  >
       <div style={{ position: 'relative' }}>
      <img src="/cars2.jpg" alt="Lavazza" style={{ width: '100%', height: '500px' }} />
      <div className='col-10 col-md-10' style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        padding: '10px',
        borderRadius: '5px',
        textAlign: 'center'
      }}>
       <h2 style={{  fontSize: '60px'}}>  Build Your Dream
      </h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p> 
      <button style={{
          backgroundColor: '#f23a2e',
          border: 'none',
          color: 'white',
          padding: '10px 20px',
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: '16px',
          margin: '10px 5px',
        
          cursor: 'pointer',
          transition: 'background-color 0.3s'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = 'red'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#f23a2e'}
        >Pour en savoir plus</button>
        

      </div>
    </div>
    <div style={{ position: 'relative' }}>
      <img src="/cars1.jpg" alt="Lavazza" style={{ width: '100%', height: '500px' }} />
      <div className='col-10 col-md-10' style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '10px',
        borderRadius: '5px',
        textAlign: 'center'
      }}>
 <h2 style={{  fontSize: '60px'}}>  Build Your Dream
      </h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p> 
      <button style={{
          backgroundColor: '#f23a2e',
          border: 'none',
          color: 'white',
          padding: '10px 20px',
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: '16px',
          margin: '10px 5px',
        
          cursor: 'pointer',
          transition: 'background-color 0.3s'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = 'red'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#f23a2e'}
        >Pour en savoir plus</button>
      
      </div>
    </div>
 
    <div style={{ position: 'relative' }}>
      <img src="/cars3.jpg" alt="Lavazza" style={{ width: '100%', height: '500px' }} />
      <div className='col-10 col-md-10' style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        
        padding: '10px',
        borderRadius: '5px',
        textAlign: 'center'
      }}><h2 style={{  fontSize: '60px'}}>  Build Your Dream
      </h2>
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p> 
      <button style={{
          backgroundColor: '#f23a2e',
          border: 'none',
          color: 'white',
          padding: '10px 20px',
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: '16px',
          margin: '10px 5px',
        
          cursor: 'pointer',
          transition: 'background-color 0.3s'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = 'red'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#f23a2e'}
        >Pour en savoir plus</button>
        
      
      </div>
    </div>
  </Carousel>
</div>
{/*services*/}


<Services />
 {/*<div className="category-buttons col-xs-12 col-12 col-md-12 col-xl-10 mt-2">
        <Carousel 
          showThumbs={false} 
          infiniteLoop 
          useKeyboardArrows 
          interval={1000} // Time between transitions in milliseconds (5 seconds)
          transitionTime={200} // Duration of the transition animation in milliseconds (1 second)
          showIndicators={false} 
          showStatus={false}
          className="col-xs-12 col-12 col-md-12 col-xl-10"
        >
          {renderCustomButtons(categories)}
        </Carousel>
      </div> */}
      <div className='row menuicon justify-content-center col-xl-12 col-md-12 col-12 mx-auto mt-5 pt-5 pb-5' style={{background:' #f9f9ff'}}>
      <h2>Nos chiffres</h2>
      
      <div className='col-12 col-md-2 navicon p-4'>
        <a href="/orders" className="nav-link">
          <i className="bi bi-box-seam row justify-content-center m-3"></i>
          <p>Réalisation 1 </p>
          <Counter className="justify-content-end" target={105} duration={0.00001} />
        </a>
      </div>

      <div className='col-12 col-md-2 navicon p-4'>
        <a href="/orders" className="nav-link">
          <i className="bi bi-buildings row justify-content-center m-3"></i>
          <p>Réalisation 2 </p>
          <Counter target={315} duration={0.00001} />
        </a>
      </div>

      <div className='col-12 col-md-2 navicon p-4'>
        <a href="/orders" className="nav-link">
          <i className="bi bi-grid row justify-content-center m-3"></i>
          <p>Réalisation 3 </p>
          <Counter target={95} duration={0.00001} />
        </a>
      </div>

      <div className='col-12 col-md-2 navicon p-4'>
        <a href="/orders" className="nav-link">
          <i className="bi bi-map row justify-content-center m-3"></i>
          <p>Réalisation 4 </p>
          <Counter target={125} duration={0.00001} />
        </a>
      </div>
      <div className='col-12 col-md-2 navicon p-4'>
        <a href="/orders" className="nav-link">
          <i className="bi bi-window row justify-content-center m-3"></i>
          <p>Réalisation 5 </p>
          <Counter target={84} duration={0.00001} />
        </a>
      </div>
      <div className='col-12 col-md-2 navicon p-4'>
        <a href="/orders" className="nav-link">
          <i className="bi bi-houses row justify-content-center m-3"></i>
          <p>Réalisation 6 </p>
          <Counter target={79} duration={0.00001} />
        </a>
      </div>
    </div>
      {/*Nos projects */}
 <Projects/>

{/*nos projects */}

{/*nos chiffres */}

      {/*nos chiffres */}
{/*<CardGroup>
      <Card>
        <Card.Img variant="top" src="lavazza2.png" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/lavazza1.png" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/lavazza3.png" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>

*/ }

<Testimonials/>
{/*  avis :*/ }
<div className='row menuicon justify-content-center col-xl-11 col-md-11 col-12 mx-auto mt-5 pt-5 pb-5'>

          <h2 className='mb-5 mt-4'> Ils nous font confiance</h2>
            <div  className='col-6 col-md-3 navicon p-4 m'>
            <a href="/orders" className="nav-link">
              <img src="/clt1.webp" />
       
    
        </a>
            </div>

            <div  className='col-6 col-md-3 navicon p-4'>
            <a href="/orders" className="nav-link">
            <img src="/clt2.webp" />
          
        </a>
            </div>


            <div  className='col-6 col-md-3 navicon p-4 '>
            <a href="/orders" className="nav-link" >
            <img src="/clt6.webp" />
   
        </a>
            </div>
            <div  className='col-6 col-md-3 navicon p-4'>
            <a href="/orders" className="nav-link">
            <img src="/clt4.webp" />
     
        </a>
            </div>
         
            <div  className='col-6 col-md-3 navicon p-4 m'>
            <a href="/orders" className="nav-link">
              <img src="/clt1.webp" />
       
    
        </a>
            </div>

            <div  className='col-6 col-md-3 navicon p-4'>
            <a href="/orders" className="nav-link">
            <img src="/clt2.webp" />
          
        </a>
            </div>


            <div  className='col-6 col-md-3 navicon p-4 '>
            <a href="/orders" className="nav-link" >
            <img src="/clt6.webp" />
   
        </a>
            </div>
            <div  className='col-6 col-md-3 navicon p-4'>
            <a href="/orders" className="nav-link">
            <img src="/clt4.webp" />
     
        </a>
            </div>
          

      
       
          
      </div>

{/*  avis :*/ }

{/*  Carousel :*/ }

{/*  Carousel :*/ }

{/*  Adresse :*/ }

      {/*  Adresse :*/ }
    </div>
  );
}
