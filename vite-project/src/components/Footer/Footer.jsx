import { Photo } from "../../Photo";

export default function Footer() {
  return (
    <footer className="site_master_footer">
      <div className="footer_columns_deck">
        <div className="footer_presentation_card">
          <img className="footer_symbol_mark" src={Photo.logoFooter} alt="Delizioso" />
          <p className="footer_motto_phrase">Viverra gravida morbi egestas facilisis tortor netus non duis tempor.</p>
          <div className="footer_social_channels">
            <a href="#twitter" aria-label="Twitter">
              <img src={Photo.iconTwitter} alt="Twitter" />
            </a>
            <a href="#instagram" aria-label="Instagram">
              <img src={Photo.iconInstagram} alt="Instagram" />
            </a>
            <a href="#facebook" aria-label="Facebook">
              <img src={Photo.iconFacebook} alt="Facebook" />
            </a>
          </div>
        </div>
        <div className="footer_directory_column">
          <h3 className="footer_section_caption">Page</h3>
          <p className="footer_nav_entry">Home</p>
          <p className="footer_nav_entry">Menu</p>
          <p className="footer_nav_entry">Order online</p>
          <p className="footer_nav_entry">Catering</p>
          <p className="footer_nav_entry">Reservation</p>
        </div>
        <div className="footer_directory_column">
          <h3 className="footer_section_caption">Information</h3>
          <p className="footer_nav_entry">About us</p>
          <p className="footer_nav_entry">Testimonial</p>
          <p className="footer_nav_entry">Event</p>
        </div>
        <div className="footer_directory_column footer_contact_pane">
          <h3 className="footer_section_caption">Get in touch</h3>
          <p className="footer_nav_entry">3247 Johnson Ave, Bronx, NY 10463, Amerika Serikat</p>
          <p className="footer_nav_entry">delizioso@gmail.com</p>
          <p className="footer_nav_entry">+123 4567 8901</p>
        </div>
      </div>
      <div className="footer_copyright_ribbon">
        <p className="copyright_label">Copyright @ 2022 Delizioso</p>
      </div>
    </footer>
  );
}