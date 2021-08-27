import "./App.css";
import React from "react";
import Header from "./Components/Navbar";
function App() {
  return (
    <>
      <Header/>
      <section id="secion1" className="section1-bg pb-4 pt-4">
        <div className="container text-center mb-4 pb-4">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-md-6">
              <h1
                style={{
                  fontWeight: "bolder",
                  fontSize: "58px",
                  color: "white",
                }}
              >
                Avenride : Book Car, boat, Ambulance and Delivery
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
          <a target="_" href="https://play.google.com/store/apps/details?id=com.bitcc.revapp" className=" mb-4"><img src={`${process.env.PUBLIC_URL}/images/android.png`} alt="" /></a>
        </div>
      </section>
      <section id="section2" className="section2-bg pb-4 pt-4">
        <div className="container text-center">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-md-6 order-2">
              <h1
                style={{
                  fontWeight: "bolder",
                  fontSize: "58px",
                  color: "white",
                }}
              >
                Book Avenboats and Avencargo across Nigeria for transport
              </h1>
            </div>
            <div className="col-md-6 order-1">
              <img
                src={`${process.env.PUBLIC_URL}/images/Rectangle.png`}
                alt=""
                className="img-fluid imganimate"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="section3" className="section1-bg pb-4 pt-4">
        <div className="container text-center">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-md-6">
              <h1
                style={{
                  fontWeight: "bolder",
                  fontSize: "58px",
                  color: "white",
                }}
              >
                Grab your favorite food from your favourite restaurant
              </h1>
            </div>
            <div className="col-md-6">
              <img
                src={`${process.env.PUBLIC_URL}/images/Rectangle (1).png`}
                alt=""
                className="img-fluid imganimate"
              />
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
                    <div className="text-center">
                    <a target="_" href="https://play.google.com/store/apps/details?id=com.bitcc.revapp" className=" mb-4"><img src={`${process.env.PUBLIC_URL}/images/android.png`} alt="" /></a>
                    </div>
                    <div className="d-flex flex-wrap justify-content-center pb-2 pt-2 mt-3 mb-3">
                        <div className="p-2 ml-3">Terms & Condition</div>
                        <div className="p-2 " style={{ marginLeft: "40px", marginRight: "40px" }}>Privacy Policy</div>
                        <div className="p-2 mr-3">Community Guidelines</div>
                    </div>
                </div>
                <div className="container-fluid " style={{ backgroundColor: "#e9810b" }}>
                    <div className="text-center mt-4 pt-4 pb-4">@AvenRide Inc. All rights Reserved</div>
                </div>
            </div>
        </footer>
    </>
  );
}

export default App;
