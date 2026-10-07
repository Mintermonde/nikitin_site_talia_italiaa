import { Photo } from "../../Photo";

export default function P1_sec1() {
  return (
    <section className="hero_showcase_zone">
      <div className="hero_content_stage">
        <div className="hero_copy_column">
          <div className="cuisine_badge_pill">
            <span className="badge_text_tag">Restauran</span>
          </div>
          <h1 className="hero_headline_title">Italian Cuisine</h1>
          <p className="hero_subheadline_desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales senectus dictum arcu sit tristique donec eget.
          </p>
          <div className="hero_cta_button_row">
            <button type="button" className="btn_solid_orange">
              Order now
            </button>
            <button type="button" className="btn_solid_green">
              Reservation
            </button>
          </div>
        </div>
        <div className="hero_visual_column">
          <img src={Photo.heroDish} alt="Italian Cuisine Hero Dish" />
        </div>
      </div>
    </section>
  );
}