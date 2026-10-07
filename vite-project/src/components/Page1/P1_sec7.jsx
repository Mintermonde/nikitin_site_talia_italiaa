export default function P1_sec7() {
  return (
    <section className="operating_hours_zone">
      <div className="hours_banner_backdrop">
        <div className="hours_centered_card">
          <h1 className="hours_headline_title">we are open from</h1>
          <div className="hours_schedule_info">
            <h2 className="hours_subheading">Monday-Sunday</h2>
            <p className="hours_timing_item">Launch : Mon-Sun : 11:00am-02:00pm</p>
            <p className="hours_timing_item">Dinner : sunday : 04:00pm-08:00pm</p>
            <p className="hours_timing_item">Breakfast : saturday : 04:00pm-09:00pm</p>
          </div>
          <div className="hours_action_bar">
            <button type="button" className="btn_schedule_order">
              Order now
            </button>
            <button type="button" className="btn_schedule_reserve">
              Reservation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}