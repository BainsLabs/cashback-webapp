import React from 'react';
import Slider from 'react-slick';
import { Waypoint } from 'react-waypoint';
import Component from '@reactions/component';

const CommonSlider = ({
  children,
  lazyloading,
  infiniteSetting,
  speedSetting,
  slidesToScrollSetting,
  slidesToShowSetting,
  initialSlideSetting,
}) => {
  const settings = {
    lazyLoad: lazyloading,
    infinite: infiniteSetting,
    speed: speedSetting,
    slidesToShow: slidesToShowSetting,
    slidesToScroll: slidesToScrollSetting,
    initialSlide: initialSlideSetting,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Component initialState={{ isOpen: false }}>
        {({ setState }) => (
          <Waypoint
            bottomOffset={200}
            onEnter={() => setState({ isOpen: true })}
            onLeave={() => setState({ isOpen: true })}
          >
            <Slider {...settings}>{children}</Slider>
          </Waypoint>
        )}
      </Component>
    </>
  );
};

export default CommonSlider;
