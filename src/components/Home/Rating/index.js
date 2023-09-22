import React, { Fragment } from "react";
import ratingsData from "../../../utils/ratings.json";
import { AiFillStar } from "react-icons/ai";

const Rating = () => {
  return (
    <section id="rating-section" className="pb-10 lg:pb-20 ">
      <div className="flex justify-center container mx-auto max-w-7xl px-4">
        <div>
          <div className="flex justify-center text-center">
            <div className="mb-lg-4">
              <h1 className="text-dark  font-bold text-2xl  md:text-3xl lg:text-4xl xl:text-4xl">
                Tanggapan Pembaca
              </h1>
              <p className="pt-3  font-sans pb-10">
                Masih ragu untuk bergabung ? <br /> Berikut tanggapan
                orang-orang yang sudah bergabung di Booklogia :
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 pb-10">
            {ratingsData.map((rating) => (
              <Fragment key={rating.id}>
                <div className="bg-white border rounded-lg h-full py-6 px-4 mb-3 md:mb-0">
                  <div className="mb-3 flex justify-center">
                    <img
                      src={"/assets/images/ratings/" + rating.foto}
                      className=" mb-3"
                      width={75}
                      alt=""
                    />
                  </div>

                  <p className="font-bold mb-2 text-center">{rating.nama}</p>

                  <div className="mb-2 flex justify-center">
                    {Array.from(Array(rating.bintang), (e, i) => (
                      <Fragment key={i}>
                        <AiFillStar className="text-warning"/>
                      </Fragment>
                    ))}
                  </div>

                  <p className="text-center text-md">{rating.penilaian}</p>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rating;
