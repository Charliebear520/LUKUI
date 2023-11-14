import { Row, Col, theme } from "antd";
import React, { useRef, useState } from "react";
// import rankItem from "../rankItem/Index";
import styles from "./ranklist.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
// import "swiper/css/pagination";


// import { Pagination } from "swiper";

export default function RankList({ ranks }) {
  const {
    token: { colorBgBase, colorTextFooter },
  } = theme.useToken();
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
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
            <h1 className={styles.logo}>熱門排行</h1>
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
           
            {ranks.map((rank) => (
              <SwiperSlide className={styles.swiper_slide} key={rank.id}>
                <img
                  className={styles.photo}
                  src={rank.image}
                  alt={rank.name}
                />
                <p className={styles.name}>{rank.name}</p>
                <p className={styles.description}>{rank.description}</p>
                {/* <p>{rank.comment}</p> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </Row>
   
  );
}