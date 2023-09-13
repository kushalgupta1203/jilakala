import React from 'react'
import { categorySlide } from '../../constant/categorySlides'
import Catergorycarousel from '../../components/Categorycarousel/Catergorycarousel'
import "../../assets/styles/Category.css"
import { MdOutlineKeyboardDoubleArrowRight,MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";


function Category() {
  return (
    <>
        <div className='category-wrapper'>
            <div className='category-header'>
                <strong>Categories</strong>
            </div>
            <div className='arrow-cont-left'>
            <MdOutlineKeyboardDoubleArrowLeft className='left-arrow'/>
            </div>
            <div className='category-card-shown'>
            
            {categorySlide.map((item) => (
            <Catergorycarousel
              key={item.serial}
              src={item.src}
              alt={item.alt}
              name={item.title}
            />
            
          ))}
          
            </div>
            <div className='arrow-cont'>
            <MdOutlineKeyboardDoubleArrowRight className='right-arrow'/>
            </div>
            
            
      
        </div>
    </>
  )
}

export default Category