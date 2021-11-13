import React from "react";
import "./Review.css";

const Reviews = () => {
  return (
    <div className="col-12" style={{ marginTop: "25px" }}>
      <h1>
        Customer <span className="text-info"> Review</span> and{" "}
        <span style={{ color: "orange" }}> Feebacks </span>
      </h1>

      <div>
        <div class="comment-section">
          <div class="container">
            <div class="review">
              <h2 class="R-title">Comments</h2>
              <div class="comment-section">
                <div class="media media-review">
                  <div class="media-user">
                    <img src="https://i.imgur.com/nUNhspp.jpg" alt="" />
                  </div>
                  <div class="media-body">
                    <div class="M-flex">
                      <h2 class="title">
                        <span> Robert Bye </span>DD-MM-YYYY
                      </h2>
                      <div class="rating-row">
                        <ul>
                          <li class="">
                            <i class="fa fa-star"></i>
                          </li>
                          <li class="">
                            <i class="fa fa-star"></i>
                          </li>
                          <li class="">
                            <i class="fa fa-star"></i>
                          </li>
                          <li class="">
                            <i class="fa fa-star-o"></i>
                          </li>
                          <li class="">
                            <i class="fa fa-star-o"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="description">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum. Lorem Ipsum is simply dummy text of the printing
                      and typesetting industry. Lorem Ipsum has been the
                      industry's standard dummy text ever since the 1500s.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
