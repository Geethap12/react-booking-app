import React from "react";
import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
	faCircleXmark,
	faCircleArrowLeft,
	faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
const Hotel = () => {
	const [slideNumber, setSlideNumber] = useState(0);
	const [open, setOpen] = useState(false);
	const photos = [
		{
			src: "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&0=",
		},
		{
			src: "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&0=",
		},
		{
			src: "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&0=",
		},
		{
			src: "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&0=",
		},
		{
			src: "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&0=",
		},
		{
			src: "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&0=",
		},
		{
			src: "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&0=",
		},
	];
	const handleOpen = (i) => {
		setSlideNumber(i);
		setOpen(true);
	};
	const handleMove = (dir) => {
		let newSlideNumber;
		if (dir === "l") {
			newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
		} else {
			newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
		}
		setSlideNumber(newSlideNumber);
	};
	return (
		<div>
			<Navbar />
			<Header type="list" />
			<div className="hotelContainer">
				{open && (
					<div className="slider">
						<FontAwesomeIcon
							icon={faCircleXmark}
							className="close"
							onClick={() => setOpen(false)}
						/>
						<FontAwesomeIcon
							icon={faCircleArrowLeft}
							className="arrow"
							onClick={() => handleMove("l")}
						/>
						<div className="sliderWrapper">
							<img src={photos[slideNumber].src} alt="" className="sliderImg" />
						</div>
						<FontAwesomeIcon
							icon={faCircleArrowRight}
							className="arrow"
							onClick={() => handleMove("r")}
						/>
					</div>
				)}
				<div className="hotelWrapper">
					<button className="bookNow">Reserve or Book now!</button>
					<h1 className="hotelTitle">Beachway Hotel</h1>
					<div className="hotelAddress">
						<FontAwesomeIcon icon={faLocationDot} />
						<span>Elton St 125 New York</span>
					</div>
					<span className="hoteslDistance">
						Excellent location - 500m from center
					</span>
					<span className="hotelPriceHighlight">
						Book a stay over $114 at this property and get free airport taxi.
					</span>
					<div className="hotelImages">
						{photos.map((photo, i) => (
							<div className="hotelImageWrapper">
								<img
									onClick={() => handleOpen(i)}
									src={photo.src}
									className="hotelImg"
								/>
							</div>
						))}
					</div>
					<div className="hotelDetails">
						<div className="hotelDetailsText">
							<h1 className="hotelTitle">Beachway hotel</h1>
							<p className="hotelDesc">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est,
								iste ut quasi quis voluptatibus nesciunt magni, facere quaerat
								maxime recusandae ea cumque, error nihil eos beatae sint ex
								repellendus amet.
							</p>
						</div>
						<div className="hotelDetailsPrice">
							<h1>Perfect for a 9-night stay</h1>
							<span>
								Located in the real heart of the city, this property has an
								excellent location and an score of 8.9
							</span>
							<h2>
								<b>$598</b>(9-nights)
							</h2>
							<button>Reserve or book now!</button>
						</div>
					</div>
				</div>
				<MailList />
				<Footer />
			</div>
		</div>
	);
};

export default Hotel;
