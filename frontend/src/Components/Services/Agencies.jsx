import React from 'react';
import Footerpg from '../../Components/Footer/Footer';
import agency from "../Assets/agencytwo.png" ;


import "./Agencies.css";


const Agencies = () => {
return (
<div>
    <section>
    <div className="topimage">
  <div className="overlay"></div>
  <div className="heading">
    <h2>Shradha Agencies</h2>
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
  <div className="information">
  <h1>THINK BIG, THINK ENVIRONMENT</h1>

  <div className="hr">
  <hr className='yellow'/><hr className='blue' />
  </div>
  <div className="main">
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores placeat perspiciatis laudantium nemo, illum est iste et expedita minima, exercitationem tenetur, reiciendis tempora impedit repudiandae! Ducimus ab similique voluptas saepe esse libero earum quos tempore perferendis laudantium assumenda, vero repudiandae veritatis error sapiente iste corporis voluptatum soluta! Eligendi ea dignissimos distinctio aspernatur ex voluptatum magnam sunt?</p>
  

  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non dignissimos repudiandae nisi, consectetur reprehenderit cupiditate incidunt necessitatibus, qui nulla, adipisci maxime. Modi molestias iure tempore ad non quos necessitatibus aut minima dicta ipsam accusamus, iste aspernatur atque assumenda id nostrum sunt natus vitae aliquam ea enim perspiciatis exercitationem. Soluta dolorem optio voluptatibus totam debitis dignissimos laboriosam, veniam laudantium vitae aliquam aperiam consequuntur culpa laborum error in officiis?</p>
  
  
  </div>
  
  </div>


  <div className="bagas">
  <div className='name'>
    <h1>Biogas Trading</h1>
  </div>
  <div className='trading'>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, itaque culpa. Aut dolores, autem quasi saepe, ut illo obcaecati totam recusandae aliquid itaque est tenetur quam beatae excepturi reiciendis porro, deleniti repudiandae error! Pariatur eligendi quis odio voluptas labore eum ex dignissimos. Qui, ullam quaerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium excepturi delectus et deleniti earum autem quis reprehenderit enim ex ut! Rem obcaecati sequi aliquid eos veniam sapiente fuga aperiam repellat, quam aut enim libero?
    </p>
    <div className="picture">
    <img src={agency} alt="" className='picturetwo' />
    </div>
    
  </div>
</div>

<button class="button">
<div class="container">
<div class="header">Why Choose Green Energy Solutions by Shraddha Agency</div>

<div className="questions">
<ul>
 <li><p> <span > Reliability :</span> With years of experience in the renewable energy sector, we guarantee a steady and consistent supply of high-quality biogas to our clients.
 </p>

 </li>
 <li><p> <span>Efficiency :</span> Our streamlined processes and cutting-edge technology ensure efficient extraction, purification, and distribution of biogas, minimizing wastage and maximizing productivity
 </p>
 
 </li><li><p> <span> Sustainability:</span>  We're committed to promoting sustainable practices that benefit both industries and the environment. By choosing Green Energy Solutions by Shraddha Agency, you're actively contributing to a greener, more sustainable future.
 </p>

 
 </li>
</ul>

</div>

</div>
</button>

<div className="joinus">



<h1>Join Us in Shaping a Greener Future</h1>
<div className="hr1">
  <hr className='yellow'/>
  </div>
<p>Experience the power of renewable energy with Green Energy Solutions by Shraddha Agency. Together, let's build a sustainable tomorrow powered by biogas innovation. Contact us today to learn more about our services and how we can help optimize your energy efficiency while reducing your carbon footprint.</p>

</div>

    
    </section>
<Footerpg/>
</div>
);
};

export default Agencies;
