// @ts-nocheck
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { ReactComponent as CoinAlt } from "../assets/coins-alt.svg";
import { Icon } from "@iconify/react";

function Stats() {
	return (
		<>
			<div className="stats-content">
				<div className="fs-24 fw-600 text-blue-100 mb-3"> Statistics </div>
				<div className="row card_boxs custom_card_box">
					<div className="col-lg-3 mb-4 mb-lg-0">
						<div className="stat-card">
							<div className="d-flex align-items-center justify-content-between">
								<div className="fs-16 fw-400 text-blue-100 card-state-left">Credits Available</div>
								{/* <div className="stat-dropdown card-state-right">
									<Dropdown>
										<Dropdown.Toggle variant="success" id="dropdown-basic">
											<Icon icon="mdi:ellipsis-vertical"></Icon>
										</Dropdown.Toggle>

										<Dropdown.Menu>
											<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
											<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
											<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</div> */}
							</div>
							<div className="d-flex align-items-center justify-content-between">
								<div className="fs-20 fw-600 text-blue-100 card-state-left">100,000</div>
								<div>
									{/* <button className="btn-stat">
										<div>
											<Icon icon="ic:baseline-plus"></Icon>{" "}
										</div>
										<div>Get More</div>
									</button> */}
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3  mb-4 mb-lg-0">
						<div className="stat-card">
							<div className="d-flex align-items-center justify-content-between">
								<div className="fs-16 fw-400 text-blue-100 card-state-left">
									<CoinAlt /> Credits Used
								</div>
								{/* <div className="stat-dropdown card-state-right" >
									<Dropdown>
										<Dropdown.Toggle variant="success" id="dropdown-basic">
											<Icon icon="mdi:ellipsis-vertical"></Icon>
										</Dropdown.Toggle>

										<Dropdown.Menu>
											<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
											<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
											<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</div> */}
							</div>
							<div className="d-flex align-items-center justify-content-between">
								<div className="fs-20 fw-600 text-blue-100">900,000</div>
								<div>
									<button className="btn-stat">
										<div className="fs-16 mt-1">
											<Icon icon="ic:baseline-plus"></Icon>{" "}
										</div>
										<div>Get More</div>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3">
						<div className="stat-card">
							<div className="d-flex align-items-center justify-content-between">
								<div className="fs-16 fw-400 text-blue-100 card-state-left">
									<CoinAlt /> GPT-4 Credits
								</div>
								{/* <div className="stat-dropdown card-state-right">
									<Dropdown>
										<Dropdown.Toggle variant="success" id="dropdown-basic">
											<Icon icon="mdi:ellipsis-vertical"></Icon>
										</Dropdown.Toggle>

										<Dropdown.Menu>
											<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
											<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
											<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</div> */}
							</div>
							<div className="d-flex align-items-center justify-content-between">
								<div className="fs-20 fw-600 text-blue-100">900,000</div>
								<div>
									<button className="btn-stat">
										<div className="fs-16 mt-1">
											<Icon icon="ic:baseline-plus"></Icon>{" "}
										</div>
										<div>Get More</div>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Stats;
