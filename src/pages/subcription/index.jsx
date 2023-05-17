import React ,{useState} from 'react'
import icon1 from'../../assets/icon1.png'
import icon2 from'../../assets/icon2.png'
import icon3 from'../../assets/icon3.png'
import icon4 from'../../assets/icon4.png'
import icon5 from'../../assets/icon5.png'
import razorpay from '../../assets/razorpay.png'

export default function Subcription() {
  const [value , setValue] = useState('99')

  const handleChange = (event) => {
    setValue(event.target.value);
    document.getElementById('value').innerHTML ="₹ " +event.target.value;
  };
  return (
    <div className='subcription-container'>
      <div className='left-subc'>
       <p className='left-Sheader'>Access curated courses worth
        ₹ <span className='strike'>18,500</span> <span id='value' className='discount-price'>₹ 99</span> per year!</p>
            <div className='li'>
                <img className='icon'src={icon1}/>
                <p> 
                    <span className='blue'>100+ </span> 
                    job relevant courses</p>
            </div>
            <div className='li'>
                <img className='icon'src={icon2}/>
                <p> 
                    <span className='blue'> 20,000+ </span> 
                    hours of content</p>
            </div>
            <div className='li'>
                <img className='icon'src={icon3}/>
                <p> 
                    <span className='blue'>Exclusive </span> 
                    webinar access</p>
            </div>
            <div className='li'>
                <img className='icon'src={icon4}/>
                <p>  Scholarship worth
                    <span className='blue'> ₹94,500 </span> 
                   </p>
            </div>
            <div className='li'>
                <img className='icon'src={icon5}/>
                <p> 
                    <span className='blue'>Ad Free </span> 
                    learning experience</p>
            </div>
            
            
      </div>
      <div className='right-subc'>
        <div style={{justifyContent:'space-evenly'}} className='subc-li'>
          <div >
           <div className='bg-circle'><p className='txt'>1</p></div>
           <p>Sign Up</p>
          </div>
          <div>
          <div className='bg-circle'><p className='txt'>2</p></div>
          <p>Subscribe</p>
          </div>
        </div>
        <p className='subc-li li-text'>Select your subcription plan</p>
        <div className='subc-li border' style={{backgroundColor:value === '99'? '#90EE90':'transparent' , 
         border:value === '99'?  '3px solid #47BA68' : '2px solid #BeBeBe'}}>
          <div className='flex'> 
            <input  type='radio'  value="99" checked={value==='99'} onChange={handleChange}/>
             <p>
              12 Months Subscription
            </p>
         </div>
        <div >
            <p>Total ₹99 </p>
            <p style={{fontSize:'10px'}}>₹8/mon</p>
        </div>
        </div>
        <div className='subc-li border' style={{backgroundColor:value === '179'? '#90EE90':'transparent', 
         border:value === '179'?  '3px solid #47BA68' : '2px solid #BeBeBe' }}>
          <div className='flex'>        
            <input type='radio' value="179" checked={value==='179'} onChange={handleChange}/>
             <p>
              12 Months Subscription
            </p>
        </div>
        <div>
             <p>Total ₹179 </p>
             <p style={{fontSize:'10px'}}>₹15/mon</p>
        </div>
        </div>
        <div className='subc-li border' style={{backgroundColor:value === '149'? '#90EE90':'transparent', 
         border:value === '149'?  '3px solid #47BA68' : '2px solid  #BeBeBe'}}>
          <div className='flex'>        
            <input type='radio' value="149" checked={value==="149"} onChange={handleChange}/>
             <p>
              6 Months Subscription
            </p>
        </div>
        <div>
             <p>Total ₹149 </p>
             <p style={{fontSize:'10px'}}>₹25/mon</p>
        </div>
        </div>
        <div className='subc-li border'  style={{backgroundColor:value === '96'? '#90EE90':'transparent', 
         border:value === '96'?  '3px solid #47BA68' : '2px solid  #BeBeBe'}}>
          <div className='flex'>        
            <input type='radio' value="96" checked={value==='96'} onChange={handleChange}/>
             <p>
              3 Months Subscription
            </p>
        </div>
        <div >
            <p>Total ₹96</p>
            <p style={{fontSize:'10px'}}>₹32/mon</p>
        </div>
        </div>
        <hr style={{color:'gray'}}/>
        <div className='subc-li'>
            <p>Subscription Fee</p>
            <p>₹ 18,500</p>
        </div>
        <div style={{
           background: 'rgb(68,68,70)',
           background: 'linear-gradient(90deg, rgba(68,68,70,1) 0%, rgba(255,199,130,1) 0%, rgba(255,140,72,1) 100%)',
           border:'2px solid rgba(222, 67, 19, 1)',
           color:'rgba(222, 67, 19, 1)'
           }} className='subc-li'>
              <div>
                  <p>Limited time offer</p>
                  <p style={{fontSize:'12px'}}>vatil till march 2023</p>
              </div>
                  <p style={{color:'rgba(60, 72, 82, 1)'}}>
                    -₹ {18500-value}
                  </p>
           </div>
        <div className='subc-li'>
                  <p>Total(Incl. of 18% GST)</p>
                  <p style={{fontSize:'25px'}}>₹ {value}</p>
           </div>
        <div className='subc-li'>
            <button style={{ width:'242.5px' ,height:'56px',border:'2px solid #F77171',borderRadius:'4px',color:'#F77171',background:'#FFFFFF'}}><span style={{fontSize:'18px',fontWeight:'bold'}}>CANCEL</span></button>
            <button style={{width:'242.5px',height:'56px',background:'#47BA68',borderStyle:'none'}}><span style={{fontSize:'18px',color:'#ffffff',fontWeight:'bold'}}>PROCEED TO PAY</span></button>
        </div>
        <img style={{marginLeft:'10px'}}src={razorpay}/>   
      </div>
      </div>
  )
}
