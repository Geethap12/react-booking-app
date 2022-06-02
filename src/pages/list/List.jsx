import React from "react";
import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
	const location = useLocation();
	const [destination, setDestination] = useState(location.state.destination);
	const [date, setDate] = useState(location.state.date);
	const [openDate, setOpenDate] = useState(false);
	const [options, setOptions] = useState(location.state.options);
	return (
		<div>
			<Navbar />
			<Header type="list" />
			<div className="listContainer">
				<div className="listWrapper">
					<div className="listSearch">
						<h1 className="listTitle">Search</h1>
						<div className="listItem">
							<label>Destination</label>
							<input type="text" placeholder={destination} />
						</div>
						<div className="listItem">
							<label>Check-in date</label>
							<span onClick={() => setOpenDate(!openDate)}>
								{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
									date[0].endDate,
									"MM/dd/yyyy"
								)}`}
							</span>
							{openDate && (
								<DateRange
									onChange={(item) => setDate([item.selection])}
									minDate={new Date()}
									ranges={date}
								/>
							)}
						</div>
						<div className="listItem">
							<label>Options</label>
							<div className="listOptionItem">
								<span className="lsOptionText">
									Min price <small>per night</small>
								</span>
								<input type="number" className="lsOptionInput" />
							</div>
							<div className="listOptionItem">
								<span className="lsOptionText">
									Max price <small>per night</small>
								</span>
								<input type="number" className="lsOptionInput" />
							</div>
							<div className="listOptionItem">
								<span className="lsOptionText">Adults</span>
								<input
									type="number"
									className="lsOptionInput"
									placeholder={options.adult}
									min={1}
								/>
							</div>
							<div className="listOptionItem">
								<span className="lsOptionText">Children</span>
								<input
									type="number"
									className="lsOptionInput"
									placeholder={options.children}
									min={0}
								/>
							</div>
							<div className="listOptionItem">
								<span className="lsOptionText">Room</span>
								<input
									type="number"
									className="lsOptionInput"
									placeholder={options.room}
									min={1}
								/>
							</div>
						</div>
						<button>Search</button>
					</div>
					<div className="listResult">
						<SearchItem />
					</div>
				</div>
			</div>
		</div>
	);
};

export default List;
