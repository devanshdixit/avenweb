import React from "react";

const Info = () => {
  return (
    <div className="my-10">
      <div className="col-12 flex justify-center">
        <div className="col-3 p-7">
          <div className="rounded-full border-2 border-black self-center w-20 h-20 bg-yellow-500 mx-4"></div>
          <h1 className="text-2xl font-semibold mb-3 text-yellow-400 mt-10">
            Competitive fees
          </h1>
          <p className="text-lg">
            We pay a competitive fee for each order you deliver. You can earn
            tips from customers too, to help towards your earnings goals.
          </p>
        </div>
        <div className="col-3 p-7">
          <div className="rounded-full border-2 border-black self-center w-20 h-20 bg-yellow-500 mx-4"></div>

          <h1 className="text-2xl font-semibold mt-10 mb-3 text-pink-800">
            Ways to boost your earnings
          </h1>
          <p className="text-lg">
            Take advantage of busy areas and earn more at evenings and weekends.
          </p>
        </div>
        <div className="col-3 p-7">
          <div className="rounded-full border-2 border-black self-center w-20 h-20 bg-yellow-500 mx-4"></div>

          <h1 className="text-2xl font-semibold mt-10 mb-3 text-purple-400">
            Support, training and peace of mind
          </h1>
          <p className="text-lg">
            Our support teams are always with you. We offer safety training and
            equipment, too, as well as free accident cover while you’re on the
            road.
          </p>
        </div>
      </div>

      {/* dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd */}
      <div className="col-12 flex justify-center mt-10">
        <div className="col-3 p-7">
          <div className="rounded-full border-2 border-black self-center w-20 h-20 bg-yellow-500 mx-4"></div>
          <h1 className="text-2xl font-semibold mt-10 mb-3 text-blue-400">
            Get paid when you want
          </h1>
          <p className="text-lg">
            We’ll transfer your earnings weekly. Want to get paid faster? Cash
            out in the app daily.
          </p>
        </div>
        <div className="col-3 p-7">
          <div className="rounded-full border-2 border-black self-center w-20 h-20 bg-yellow-500 mx-4"></div>

          <h1 className="text-2xl font-semibold mt-10 mb-3 text-red-400">
            Free professional kit
          </h1>
          <p className="text-lg">
            Highly visible, comfortable and breathable gear, suitable for the
            climate you’re riding in.
          </p>
        </div>
        <div className="col-3 p-7">
          <div className="rounded-full border-2 border-black self-center w-20 h-20 bg-yellow-500 mx-4"></div>

          <h1 className="text-2xl font-semibold mt-10 mb-3 text-green-300">
            1000s of UK restaurant partners
          </h1>
          <p className="text-lg">
            We’re one of the busiest food delivery platforms in the country,
            delivering orders in your local area every day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
