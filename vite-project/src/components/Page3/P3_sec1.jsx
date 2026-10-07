import { Photo } from "../../Photo";

export default function P3_sec1() {
  return (
    <section className="our_story_zone">
      <div className="story_content_canvas">
        <div className="story_block_duo story_block_first">
          <img className="story_round_image" src={Photo.storyKitchen} alt="Chef at Delizioso" />
          <div className="story_text_pane">
            <h1 className="story_heading_text">
              <span className="brand_accent_text">Our</span> restautant
            </h1>
            <p className="story_description_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.
            </p>
          </div>
        </div>
        <div className="story_block_duo story_block_second">
          <div className="story_text_pane">
            <p className="story_description_text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
            </p>
          </div>
          <img className="story_round_image" src={Photo.storyDining} alt="Delizioso Dining Table" />
        </div>
      </div>
    </section>
  );
}