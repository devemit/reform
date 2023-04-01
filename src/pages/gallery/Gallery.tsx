import './Gallery.css';
import { useState, useEffect } from 'react';
const Gallery = () => {
  const [data, setData] = useState<any>();

  const fetchImages = () =>
    fetch('./galleryImages.json').then((res) => {
      return res.json().then((data) => {
        setData(data);
      });
    });

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <>
      <div className='gallery_title'>
        <h1 className='gal_title'>The Beach Bar Photo Gallery</h1>
      </div>
      <div className='gallery_grid'>
        {data?.map((image: any) => (
          <img className='zoom' key={image.id} src={image.imgurl} alt='image' />
        ))}
      </div>
    </>
  );
};

export default Gallery;
