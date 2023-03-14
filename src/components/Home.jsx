import React, { useContext } from "react";
import { AppContext } from "./Parent";
import { Outlet } from "react-router-dom";

function Home() {
  const { state } = useContext(AppContext);

  return (
    <div>
      <Outlet/>
      <main className="home p-4">
          <section className="products my-2">
            {state.products.map((ele) => {
              return (
                <div
                  key={ele.id}
                  className="product d-flex flex-column align-items-center border rounded-2 "
                >
                  <img
                    className="product__pic"
                    src={ele.thumbnail}
                    alt={ele.title}
                  />
                  <span className="product__rating shorttxt fw-bold bg-white px-1 rounded-1">
                    {ele.rating}
                    <i className="bi bi-star-fill ms-1"></i>
                  </span>
                  <div className="product__details card-body w-100 d-flex gap-2 flex-column justify-content-between p-2">
                    <h6 className="product__details__title my-1">
                      {ele.title}
                    </h6>
                    <span className="shorttxt">by {ele.brand}</span>
                    <div className="product__details__price d-flex gap-1 align-items-center">
                      <span className="fw-bold">₹{ele.price}</span>
                      <span className="text-seconday text-decoration-line-through shorttxt">
                        ₹
                        {(
                          (ele.price * 100) /
                          (100 - ele.discountPercentage)
                        ).toFixed()}
                      </span>
                      <span className="shorttxt text-danger">
                        ({ele.discountPercentage.toFixed()}% OFF)
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
      </main>
    </div>
  );
}

export default Home;
