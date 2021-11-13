import React from "react";
import "./AddReview.css";

const AddReview = () => {
  return (
    <div style={{ textalign: "left" }}>
      <script src="https://use.fontawesome.com/a6f0361695.js"></script>

      <h2 id="fh2">WE APPRECIATE YOUR REVIEW!</h2>
      <h6 id="fh6">
        Your review will help us to improve our web hosting quality products,
        and customer services.
      </h6>

      <form id="feedback" action="">
        <div class="pinfo">Your personal info</div>

        <div class="form-group">
          <div class="col-md-4 inputGroupContainer">
            <label>Name</label>
            <div class="input-group">
              <span class="input-group-addon">
                <i class="fa fa-user"></i>
              </span>

              <input
                name="name"
                placeholder="John Doe"
                class="form-control"
                type="text"
              />
            </div>
          </div>
        </div>

        <div class="pinfo">Rate our overall services.</div>

        <div class="form-group">
          <div class="col-md-4 inputGroupContainer">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="fa fa-heart"></i>
              </span>
              <select class="form-control" id="rate">
                <option value="1star">1</option>
                <option value="2stars">2</option>
                <option value="3stars">3</option>
                <option value="4stars">4</option>
                <option value="5stars">5</option>
              </select>
            </div>
          </div>
        </div>

        <div class="pinfo">Write your feedback.</div>

        <div class="form-group">
          <div class="col-md-4 inputGroupContainer">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="fa fa-pencil"></i>
              </span>
              <textarea class="form-control" id="review" rows="3"></textarea>
            </div>
          </div>
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddReview;
