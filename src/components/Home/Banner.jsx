import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function Banner() {

    return (
        <Carousel variant="dark">
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + "/hero/girl.jpg"}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h2 className="font-weight-bold text-warning">Bộ sưu tập Hè - Thu 2022</h2>
                    <h4>Được chế tác theo phương pháp đạo đức với cam kết bền bỉ về chất lượng vượt trội.</h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + "/hero/hero.jpg"}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h2 className="font-weight-bold text-success">Bộ sưu tập Thu - Đông 2022</h2>
                    <h4>Được chế tác theo phương pháp đạo đức với cam kết bền bỉ về chất lượng vượt trội.</h4>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Banner