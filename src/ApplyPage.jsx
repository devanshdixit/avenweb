import Header from "./Components/Navbar";
const ApplyPage = () => {
    return <>
        <Header />
        <section id="secion1" className="section1-bg pb-4 pt-4">
            <div className="container text-center mb-4">
                <div className="row" style={{ alignItems: "center" }}>
                    <div className="col-md-6">
                        <h1
                            style={{
                                fontWeight: "bolder",
                                fontSize: "58px",
                                color: "white",
                            }}
                        >
                            Avenrider : Get cutomers for Car, boat, Ambulance and Delivery
                        </h1>
                    </div>
                    <div className="col-md-6">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/tilted.png`}
                            alt=""
                            className="img-fluid imganimate"
                        />
                    </div>
                </div>
                <button className="btn btn-light btn-lg mb-4">Apply Now</button>
            </div>
        </section>
        <section className="section-layout">
            <div className="container text-center">
                <div className="row" style={{ alignItems: "center" }}>
                    <div className="col-md-6" style={{ textAlign: 'right' }}>
                        <div className="ml-auto" style={{ textAlign: 'left', float: "right" }}>
                            <h1
                                style={{
                                    fontWeight: "bolder",
                                    fontSize: "58px",
                                    color: "black",
                                }}
                            >
                                Ready to earn?
                            </h1>
                            <p style={{ maxWidth: "300px", fontSize: "22px", fontWeight: 600 }}>
                                Just tap the app Book where and when you want to ride and use your app to go online. When online, you can see if there any rides available or not.
                                If it is green then you can go forward.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6" style={{ float: "left" }}>
                        <div style={{ maxWidth: "400px", height: "850px" }}>
                            <img
                                src={`${process.env.PUBLIC_URL}/images/logo192.png`}
                                alt=""
                                className="img-fluid imganimate"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section-layout">
            <div className="container" >
                <div className="row mt-4 pt-4">
                    <div className="col-md-4 p-3">
                        <img src={`${process.env.PUBLIC_URL}/images/icons/1.svg`} alt="" className="img-fluid" />
                        <h1>Competitive fees</h1>
                        <p>We pay a competitive fee for each order you deliver. You can earn tips from customers too, to help towards your earnings goals.</p>
                    </div>
                    <div className="col-md-4 p-3">
                        <img src={`${process.env.PUBLIC_URL}/images/icons/2.svg`} alt="" className="img-fluid" />
                        <h1>Ways to boost your earnings</h1>
                        <p>Earn more at evenings and weekends.</p>
                    </div>
                    <div className="col-md-4 p-3">
                        <img src={`${process.env.PUBLIC_URL}/images/icons/3.svg`} alt="" className="img-fluid" />
                        <h1>Support, training and peace of mind</h1>
                        <p>Our support teams are always with you. We offer safety training and equipment, too, as well as free accident cover when you’re on the road.</p>
                    </div>
                </div>
                <div className="row mt-4 pt-4">
                    <div className="col-md-4 p-3">
                        <img src={`${process.env.PUBLIC_URL}/images/icons/4.svg`} alt="" className="img-fluid" />
                        <h1>Get paid regularly</h1>
                        <p>We’ll transfer your earnings monthly.</p>
                    </div>
                    <div className="col-md-4 p-3">
                        <img src={`${process.env.PUBLIC_URL}/images/icons/5.svg`} alt="" className="img-fluid" />
                        <h1>Free professional kit</h1>
                        <p>Highly visible, comfortable and breathable gear, suitable for the climate you’re riding in.</p>
                    </div>
                    <div className="col-md-4 p-3">
                        <img src={`${process.env.PUBLIC_URL}/images/icons/6.svg`} alt="" className="img-fluid" />
                        <h1>1000s of restaurant partners</h1>
                        <p>We’re one of the busiest food delivery platforms in the country, delivering orders in your local area every day.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="section-layout">
            <div className="container">
                <div className="section3-title">How it Works</div>
                <div className="section3-subtitle">Once you’ve joined Avenride, here’s what to expect.</div>
                <div className="row mt-4 pt-4">
                    <div className="col-md-4">
                        <div>
                            <div className="slide__image" style={{ maxWidth: "16.25rem", marginRight: "1rem" }}>
                                <img alt="" src={`${process.env.PUBLIC_URL}/images/how1.png`} style={{ maxWidth: "17.5rem", display: "block" }} />
                            </div>
                            <span className="slide__order">1</span>
                            <h3 className="section4-head">Riders List which will ride with you</h3>
                            <div>
                                <p>
                                    Here you will have a list of riders which you will take along with you.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div>
                            <div className="slide__image" style={{ maxWidth: "16.25rem", marginRight: "1rem" }}>
                                <img alt="" src={`${process.env.PUBLIC_URL}/images/how3.png`} style={{ maxWidth: "19.7rem", display: "block" }} />
                            </div>
                            <span className="slide__order">2</span>
                            <h3 className="section4-head">Select Riders to add them to your list</h3>
                            <div>
                                <p>
                                    You'll see a list of customer through which you can select which one you want to take along with you ride.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div>
                            <div className="slide__image" style={{ maxWidth: "16.25rem", marginRight: "1rem" }}>
                                <img alt="" src={`${process.env.PUBLIC_URL}/images/gow2.png`} style={{ maxWidth: "17.5rem", display: "block" }} />
                            </div>
                            <span className="slide__order">3</span>
                            <h3 className="section4-head">See Details of Riders</h3>
                            <div>
                                <p>
                                    Click on it see the customer location on map and go there tp pick them up.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer className="footercontainermain" style={{ backgroundColor: "#E88310" }}>
            <div className=" pt-4 text-white">
                <div className="container mt-4 ">
                    <div className="text-center">
                        <h1>Join our community</h1>
                    </div>
                    <div className="d-flex flex-wrap justify-content-center mt-3 mb-3">
                        <div className="p-2"><a className="sociallink" href="https://www.facebook.com/quescup.india"><img src={`${process.env.PUBLIC_URL}/images/social/instagram.svg`} style={{ width: "2em", marginRight: ".5rem" }} alt="" /></a></div>
                        <div className="p-2"><a className="sociallink" href="https://www.instagram.com/p/CO7I-3IBMio/?utm_medium=copy_link"><img src={`${process.env.PUBLIC_URL}/images/social/linkedin.svg`} style={{ width: "2em", marginRight: ".5rem" }} alt="" /></a></div>
                        <div className="p-2"><img className="sociallink" src={`${process.env.PUBLIC_URL}/images/social/telegram.svg`} style={{ width: "2em", marginRight: ".5rem" }} alt="" /></div>
                        <div className="p-2"><a className="sociallink" href="https://twitter.com/quescup?s=08"><img src={`${process.env.PUBLIC_URL}/images/social/twitter.svg`} style={{ width: "2em", marginRight: ".5rem" }} alt="" /></a></div>
                        <div className="p-2"><img className="sociallink" src={`${process.env.PUBLIC_URL}/images/social/youtube.svg`} style={{ width: "2em", marginRight: ".5rem" }} alt="" /></div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-center pb-4 pt-4 mt-3 mb-3">
                        <div className="p-2 ml-3">Terms & Condition</div>
                        <div className="p-2 " style={{ marginLeft: "40px", marginRight: "40px" }}>Privacy Policy</div>
                        <div className="p-2 mr-3">Community Guidelines</div>
                    </div>
                </div>
                <div className="container-fluid " style={{ backgroundColor: "#e9810b" }}>
                    <div className="text-center mt-4 pt-4 pb-4">@DapperDak. All rights Reserved</div>
                </div>
            </div>
        </footer>
    </>
}
export default ApplyPage