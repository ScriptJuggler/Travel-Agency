import React from 'react'
import Masonry,{ResponsiveMasonry} from 'react-responsive-masonry'
import galleryImg from './galleryImg'
import '../style/home.css'
const Masonygallery = () => {
  return<>
    <ResponsiveMasonry columnsCountBreakPoints={{350:1,768:3,992:4}}>
        <Masonry gutter='1rem'>
            {
              galleryImg.map((item, index) => (
            <div className='container1' key={index}>
              <div className='cards'>
                <img src={item.src} alt='' width={400} height={400} />
                <div className='content'>
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))
            }

        </Masonry>

    </ResponsiveMasonry>
  </>
}

export default Masonygallery
