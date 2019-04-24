import React from 'react';
import styles from './ImgBtn.module.css';


const ImgBtn = (props) => {
    return (
   
    <div 
    className={`${styles.imgB} m-3`}
    style={{backgroundImage: `url(${props.imgurl})`}} 
    {...props}> 
    </div>
    
    )
  }

  export default ImgBtn;