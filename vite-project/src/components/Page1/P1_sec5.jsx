import { Photo } from "../../Photo";

export default function P1_sec5() {
  return (
    <section className="culinary_experts_zone">
      <div className="culinary_content_stage">
        <h1 className="culinary_experts_heading">Our greatest chef</h1>
        <div className="chef_cards_carousel">
          <div className="chef_profile_tile">
            <img src={Photo.chefBetran} alt="Betran Komar" />
            <h2 className="chef_full_name">Betran Komar</h2>
            <p className="chef_rank_title">Head chef</p>
          </div>
          <div className="chef_profile_tile">
            <img src={Photo.chefFerry} alt="Ferry Sauwi" />
            <h2 className="chef_full_name">Ferry Sauwi</h2>
            <p className="chef_rank_title">Chef</p>
          </div>
          <div className="chef_profile_tile">
            <img src={Photo.chefIswan} alt="Iswan Dracho" />
            <h2 className="chef_full_name">Iswan Dracho</h2>
            <p className="chef_rank_title">Chef</p>
          </div>
        </div>
        <button type="button" className="btn_view_team">
          View All
        </button>
      </div>
    </section>
  );
}