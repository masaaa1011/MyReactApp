import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';
import Cat1 from '../../assert/cat1.jpg';
import Cat2 from '../../assert/cat2.jpg';


class CatCarousel extends React.Component {

    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Cat1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Cat2}
                        alt="Secound slide"
                    />
                    <Carousel.Caption>
                        <h3>Secound slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
};

export default CatCarousel