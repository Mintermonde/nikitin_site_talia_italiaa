import { Photo } from "../../Photo";

export default function P3_sec2() {
  return (
    <section className="executive_spotlight_zone">
      <div className="spotlight_profile_layout">
        <img className="spotlight_portrait_frame" src={Photo.chefIsmail} alt="Ismail Marzuki - Executive Chef" />
        <div className="spotlight_details_pane">
          <h1 className="spotlight_role_title">
            <span className="brand_accent_text">Owner</span> & Executive Chef
          </h1>
          <p className="spotlight_name_caption">Ismail Marzuki</p>
          <div className="spotlight_quote_box">
            <div className="quote_sign_leading">
              <p>&ldquo;</p>
            </div>
            <p className="quote_italic_body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="quote_sign_trailing">
              <p>&bdquo;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}