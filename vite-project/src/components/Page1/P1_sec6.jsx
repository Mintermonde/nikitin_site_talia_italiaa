import { Photo } from "../../Photo";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

export default function P1_sec6() {
  return (
    <section className="testimonials_display_zone">
      <div className="testimonials_inner_stage">
        <h1 className="testimonials_section_title">Our customers say</h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Pagination, Navigation]}
          className="customerSwiper"
        >
          <SwiperSlide className="swiper_slide">
            <div className="testimonial_client_card">
              <img src={Photo.avatarStarla} alt="Starla Virgoun" />
              <h2 className="client_display_name">Starla Virgoun</h2>
              <p className="client_profession_tag">Financial advisor</p>
              <div className="quote_mark_top">
                <p>&ldquo;</p>
              </div>
              <p className="client_quote_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam
              </p>
              <div className="quote_mark_bottom">
                <p>&bdquo;</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper_slide">
            <div className="testimonial_client_card">
              <img src={Photo.avatarUser5} alt="Adobe Filter" />
              <h2 className="client_display_name">Adobe Filter</h2>
              <p className="client_profession_tag">Producer</p>
              <div className="quote_mark_top">
                <p>&ldquo;</p>
              </div>
              <p className="client_quote_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam
              </p>
              <div className="quote_mark_bottom">
                <p>&bdquo;</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper_slide">
            <div className="testimonial_client_card">
              <img src={Photo.avatarUser2} alt="Niki Minage" />
              <h2 className="client_display_name">Niki Minage</h2>
              <p className="client_profession_tag">Food Developer</p>
              <div className="quote_mark_top">
                <p>&ldquo;</p>
              </div>
              <p className="client_quote_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam
              </p>
              <div className="quote_mark_bottom">
                <p>&bdquo;</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="client_avatars_row">
          <img src={Photo.avatarUser1} alt="Customer avatar 1" />
          <img src={Photo.avatarUser2} alt="Customer avatar 2" />
          <img src={Photo.avatarUser3} alt="Customer avatar 3" />
          <img src={Photo.avatarUser4} alt="Customer avatar 4" />
          <img src={Photo.avatarUser5} alt="Customer avatar 5" />
          <img src={Photo.avatarUser6} alt="Customer avatar 6" />
          <img src={Photo.avatarUser7} alt="Customer avatar 7" />
        </div>
      </div>
    </section>
  );
}
