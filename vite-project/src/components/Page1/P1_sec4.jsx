import { Photo } from "../../Photo";

export default function P1_sec4() {
  return (
    <section className="reservation_feature_zone">
      <div className="reservation_content_shell">
        <img src={Photo.bookingCollage} alt="Reserve a table" />
        <div className="reservation_message_panel">
          <h1 className="reservation_invite_title">
            Let's reserve <span className="brand_accent_text">a table</span>
          </h1>
          <p className="reservation_invite_desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam
          </p>
          <button type="button" className="btn_booking_action">
            Reservation
          </button>
        </div>
      </div>
    </section>
  );
}