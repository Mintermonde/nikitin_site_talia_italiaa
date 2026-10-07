import { Photo } from "../../Photo";

export default function P1_sec2() {
  return (
    <section className="intro_welcome_zone">
      <div className="intro_content_container">
        <div className="intro_image_wrapper">
          <img src={Photo.saladDish} alt="Welcome to Delizioso" />
        </div>
        <div className="intro_description_wrapper">
          <h1 className="intro_section_heading">
            Welcome to <span className="brand_accent_text">delizioso</span>
          </h1>
          <p className="intro_section_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam
          </p>
          <button type="button" className="btn_explore_menu">
            See our menu
          </button>
        </div>
      </div>
    </section>
  );
}