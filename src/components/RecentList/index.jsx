import { Row, Col } from "antd";
import styles from "./recentlist.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

export default function RecentList({recents}) {
  return (
    <Row gutter={[32, 0]} className={styles.section}>
    <Col
      xs={{ span: 24 }}
      lg={{ span: 24 }}
      xl={{ span: 24 }}
      xxl={{ span: 24 }}
      className={styles.col}
    >
      <div className={styles.head}>
        <h1 className={styles.logo}>最近查看</h1>
        {/* <h4 className={styles.name}>@ntuedtd_ig</h4> */}
        
      </div>
      <div className={styles.rectangle}/>
      
    </Col>
    
    <>
      <Swiper
        spaceBetween={30}
        
        // scrollbar={{
        //   hide: false,
        // }}
        // modules={[Scrollbar]}
        // modules={[Pagination]}
        className={styles.mySwiper}
        breakpoints={{
          // when window width is >= 640px
          320: {
            slidesPerView: 3,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
       
        {recents.map((recent) => (
          <SwiperSlide className={styles.swiper_slide} key={recent.id}>
            <Link to={`/recents/id/${recent.id}`}>
            <img
              className={styles.photo}
              src={recent.image}
              alt={recent.name}
            />
            </Link>
        
            <p className={styles.name}>{recent.name}</p>
            <p className={styles.description}>{recent.description}</p>
            {/* <p>{recent.comment}</p> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  </Row>
  );
}

