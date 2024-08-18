import React,{useContext, useEffect} from 'react'
import './Verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';


const Verify = () => {
  
    const [searchParams,setSearchParams]=useSearchParams();
    const success=searchParams.get("success");
    const orderId=searchParams.get("orderId");
    const {url}=useContext(StoreContext);
    const navigate=useNavigate();

   const verifyPayment=async()=>{
       const response=await axios.post(url+"/api/order/verify",{success,orderId});
      //http://localhost:5174/verify?success=true&orderId=66c19e067d08ee48c4f8c74f
       if(response.data.success)
       {
          navigate("/myorders");
       }
       else{
        navigate("/")
       }
   }

   useEffect(()=>{
    verifyPayment();
   },[])
    

  return (
    <div className='verify'>
      <div className='spinner'></div>
     

    </div>
  )
}

export default Verify