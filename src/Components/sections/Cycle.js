import React from "react";

function Cycle() {
  return (
    <div className="col-12  bg-green-600">
      <div className="relative ">
        <img
          src={`${process.env.PUBLIC_URL}/images/sendy.jpg`}
          alt=""
          className="w-full"
        />

        <div className="col-6 absolute top-1/3 left-44 z-10 ">
          <h1 className="text-4xl font-bold text-white">
            We're always here
            <br /> for you
          </h1>
          <p className="col-6 text-xl text-white ">
            When you’re on the road, we’re with you – for help, advice and
            support, message or call us in the app. Your safety is our priority,
            so we’ll insure you in case of accidents, too. It’s totally free and
            applies from the moment you go online.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cycle;
