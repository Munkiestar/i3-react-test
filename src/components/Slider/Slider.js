import React from 'react';
import Slider from 'react-slick';

import './Slider.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const photos = [
  {
    name: '',
    url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThSwZLn-46RlLzKpoxTLjtSDt9c9mhDda9WA&usqp=CAU',
  },
  {
    name: '',
    url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3xdoL92qz3QMNBxpYUeN-obEdFwc6gRb0jA&usqp=CAU',
  },
  {
    name: '',
    url:
      'https://images-na.ssl-images-amazon.com/images/I/51bHF4fRVmL._AC_SX466_.jpg',
  },
  {
    name: '',
    url:
      'https://www.ochelper.com/wp-content/uploads/2020/02/Orange-County-Events-Bring-You-The-Best-Comedy-Show-With-Well-known-Comedian-T.J.-Miller.jpg',
  },
  {
    name: '',
    url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgy-n84UGpPC0ARnskAkMvJVlvcZxHvbhWLvdkM5zr1k6UCTNVmtE-RFqShiXILhEVJXU5sK-v13CsxngGEfum1k_DGOenxC84sg&usqp=CAU&ec=45750089',
  },
  {
    name: '',
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
    slidesToScroll: 4,
    initialSlide: 0,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          lazyLoad: true,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          infinite: true,
          slidesToScroll: 2,
          initialSlide: 2,
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
            <img src={photo.url} alt="" />
          </div>
        );
      })}
    </Slider>
  );
}

export default ImgSlider;
