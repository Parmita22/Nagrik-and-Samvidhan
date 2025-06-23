import React from 'react';
import Footerpg from '../../Components/Footer/Footer';
import ApartmentIcon from '@mui/icons-material/Apartment';
import RestoreIcon from '@mui/icons-material/Restore'; 
import brick from "../Assets/viit.png" ;
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import EngineeringIcon from '@mui/icons-material/Engineering'; 
import DesignServicesIcon from '@mui/icons-material/DesignServices'; 



import "./Bricks.css";

const Bricks = () => {
return (
<div>
  <section>

  <div className="topimage">
  <div className="overlay"></div>
  <div className="heading">
    <h2>Yamai Bricks</h2>
  </div>
  <div className="para">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
      autem laboriosam totam quia voluptatibus inventore sed quos unde
      facilis quis fugit magnam maiores omnis culpa, ducimus dolorum
      velit laudantium. Nobis distinctio maiores nemo corporis?
    </p>
  </div>
  </div>

  <div className="info-container">
    <div className="heading"><h1>"Building a Greener Future, Brick By Brick"</h1></div>
   

    <hr className='hr-nine' />
    <div className="extra-info">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur repellendus accusamus labore. Itaque molestias totam sint aut fugiat, mollitia commodi eveniet voluptas ipsa, harum, iure laboriosam at. Eligendi facere distinctio quidem nulla, porro obcaecati ratione quod earum ducimus assumenda molestias recusandae error dolor beatae perferendis reprehenderit praesentium laboriosam aliquid voluptates modi totam optio incidunt ad. A amet itaque repellat obcaecati sapiente veritatis eum quisquam iusto, assumenda voluptatibus non nobis asperiores, quia voluptates eveniet molestiae doloremque quam pariatur dolor? Quibusdam, suscipit provident? Nesciunt minima voluptates animi quaerat delectus provident ut quae unde quibusdam ex eligendi nemo, error officiis a laboriosam maxime iure repellendus dicta pariatur rerum veritatis corporis dolore. Velit iure deleniti cupiditate ipsum, ducimus odit cum sint quos molestias eum cumque voluptatum vero magnam necessitatibus non impedit labore exercitationem, praesentium minima nulla, porro fugiat aspernatur minus! Tenetur voluptatem eos ea eum architecto inventore, voluptatibus sed est quibusdam id dolor sunt.</div>

  </div>
  <hr className='divider' />


  <div className="heading-title">
  <h2>Our Product</h2>
</div>
    <div className="product-info">
    <img src={brick} alt="" className='brick' />
    <div className="theory">
    <h1>Lorem ipsum dolor</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit impedit, aspernatur quibusdam vitae corporis obcaecati possimus, commodi sequi molestias, provident unde sunt itaque a animi? Eaque inventore illo nam aperiam natus! Minus, blanditiis assumenda?</p></div>
    
    </div>
    <hr className='divider' />
  
  <div class="packages">
  <h3 class="title">Why Us</h3>
  <p>We offer a variety of group (minimum 5 people) packages. Whether you've spent some summers together or this might be your first adventure, we've got the perfect vacation for you.</p>
  <hr />
  
  <ul class="grid">
    <li>
    <h1><ApartmentIcon sx={{ fontSize:80}}/></h1>
      <h4>Top builder</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sequi ea, natus quaerat, iure, neque voluptatum beatae assumenda totam doloribus id officia aliquid!</p>
    </li>
    <li>
       

    <h1><FindInPageIcon sx={{ fontSize:80}}/></h1>

      <h4>Complete Transperency</h4>
      <p>Want to experience nature's beauty without all of that annoying exercise? Take a photo tour on one of our <em>Life is a party!</em> buses.</p>
    </li>
    <li>
        
    <h1><RestoreIcon sx={{ fontSize:80}}/></h1>

      <h4>Time Delivery</h4>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo in quibusdam exercitationem tenetur inventore officiis molestiae nulla, nihil magni aliquam iusto soluta blanditiis consequuntur.</p>
    </li>
    <li>
      
    <h1><EngineeringIcon sx={{ fontSize:80}}/></h1>
     
      <h4>Budget Friendly</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis animi aut laudantium, tempora illum neque numquam corrupti laboriosam alias odit natus fugit, odio nulla..</p>
    </li>


    <li>
      
    <h1><DesignServicesIcon sx={{ fontSize:80}}/></h1>
     
      <h4>Designs</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis animi aut laudantium, tempora illum neque numquam corrupti laboriosam alias odit natus fugit, odio nulla..</p>
    </li>

    
    
  </ul>
  </div>
  </section>
 
  
  




<Footerpg/>
</div>
);
};

export default Bricks;
