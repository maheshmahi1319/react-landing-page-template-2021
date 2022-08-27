import Carousel from 'react-bootstrap/Carousel';

import config from '../config/index.json';

function IndividualIntervalsExample() {
  const { slider } = config;

  return (
    <Carousel variant="dark" style={{ height: '80%' }}>
      {slider.items.map((item, index) => (
        <Carousel.Item interval={5000} key={index}>
          <img className="d-block w-100" src={item.img} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      ))}
      {/* <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="assets/images/kidney.jpeg"
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="assets/images/kidney.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="assets/images/kidney.jpeg"
          alt="Third slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}

export default IndividualIntervalsExample;
