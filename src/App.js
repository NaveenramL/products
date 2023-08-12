import logo from './logo.svg';
import './App.css';
import {ProductsCreateForm} from './ui-components'
import React,{useState} from 'react';

function App() {
  const [formData, setFormData] = useState();
  const[price,setprice]=useState('');

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(setFormData.price === ""){
      alert('please enter a amount');
    }
    else{
      // alert(amount);
      var options={
        key : "rzp_test_3DZUcwQJ0ka5fz",
        key_secret : "mrWlsvaruHnuiS5iwPDIpj26",
        amount : price*100,
        currency : "INR",
        name : "NAVEENRAM",
        description : "for testing purpose",
        handler : function(response){
          alert(response.razorpay_payment_id);
        },
        prefill : {
          name : "ram",
          email : "lrnnaveen19@gmail.com",
          contact : "8072752363"
        },
        notes : {
          address : "Razorpay corporate office"
        },
        theme : {
          color : "#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
    <ProductsCreateForm width="25%" onChange={fields => setFormData(fields)} />
    </>
  );
}

export default App;
