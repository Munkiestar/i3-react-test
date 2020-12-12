import React from 'react';
import Slider from 'react-slick';

import './Slider.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const photos = [
  {
    name: 'Ash',
    url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThSwZLn-46RlLzKpoxTLjtSDt9c9mhDda9WA&usqp=CAU',
  },
  {
    name: 'Bobby',
    url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3xdoL92qz3QMNBxpYUeN-obEdFwc6gRb0jA&usqp=CAU',
  },
  {
    name: 'KC',
    url:
      'https://images-na.ssl-images-amazon.com/images/I/51bHF4fRVmL._AC_SX466_.jpg',
  },
  {
    name: 'Dan',
    url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLEwageEH3PvGYTiqtCFHf1y8xIN0JD4sFYQ&usqp=CAU',
  },
  {
    name: 'Becky',
    url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgy-n84UGpPC0ARnskAkMvJVlvcZxHvbhWLvdkM5zr1k6UCTNVmtE-RFqShiXILhEVJXU5sK-v13CsxngGEfum1k_DGOenxC84sg&usqp=CAU&ec=45750089',
  },
  {
    name: 'Steve',
    url:
      'https://variety.com/wp-content/uploads/2018/03/silicon-valley.jpg?w=1000',
  },
];

function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          infinite: true,
          slidesToScroll: 1,
          lazyLoad: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
          lazyLoad: true,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {photos.map((photo, indx) => {
        return (
          <div key={indx} className="img-container">
            <img src={photo.url} alt={photo.name} />
          </div>
        );
      })}
    </Slider>
  );
}

export default ImgSlider;
