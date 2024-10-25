import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';

const plan =[
    {
        type:"Basic Plan",
        price: 39.99,
        description:"Perfect for a busy workweek with 5 delicious meals.",
        features:[
            {title:"5 healthy meals per week"},
            {title:"One meals a day"},
            {title:"Free Delivery"},
            {title:"Pause or Cancel Anytime"}
        ],
        popular:false
    },
    {
        type:"Standard Plan",
        price: 74.99,
        description:"A flexible option for those who want more meals.",
        features:[
            {title:"10 healthy meals per week"},
            {title:"Two meals a day"},
            {title:"Free Delivery"},
            {title:"Pause or Cancel Anytime"}
        ],
        popular:true
    },
    {
        type:"Premium Plan",
        price: 149.99,
        description:"A flexible option for those who want more meals.",
        features:[
            {title:"15 healthy meals per week"},
            {title:"Three meals a day"},
            {title:"Free Delivery"},
            {title:"Pause or Cancel Anytime"}
        ],
        popular:false
    }
]

const SubscriptionPlan = () => {
  return (
    <div className='subscription-plans px-2 py-5'>
      <Container>
        <h1 className="text-center mb-5">Choose Your Plan</h1>

        <div className='d-flex justify-content-center'>
        <Row className=' card-box justify-content-center g-3'>
          {/* Weekly Plan */}
          {
            plan.map((item=>{
                return  <Col key={item.type} xs={12} md={6} lg={4} className='d-flex justify-content-center'>
                <div className={`plan-card p-4 border rounded text-center ${item.popular && 'highlighted-plan'}`}>
                  <h4 className='plan-title'>{item.type}</h4>
                  <p className='plan-price'>${item.price} <span>/ week</span></p>
                  <p className='plan-description'>{item.description}</p>
                  <ul className='plan-features list-unstyled'>
                    {
                        item.features.map((feature=>{
                            return <li><FaCheckCircle className='text-success' style={{marginRight:"8px"}} /> {feature.title}</li>
                        }))
                    }
                 
                  </ul>
                  <button className={`btn  mt-4 ${item.popular ? 'btn-primary':'btn-outline-primary'}`}>Subscribe Now</button>
                  {
                    item.popular && <div className='most-popular'>Most Popular</div>
                  }
                </div>
              </Col>
            }))
          }
         
        </Row>
        </div>
      </Container>
    </div>
  );
}

export default SubscriptionPlan;
