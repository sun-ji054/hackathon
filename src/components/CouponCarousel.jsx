import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import CouponCard from './CouponCard';

function CouponCarousel({ coupons }) {
    return (
        <Swiper
            spaceBetween={25}
            slidesPerView="auto"
            pagination={{
                clickable: true,
                renderBullet: (index, className) => {
                    // 무조건 3개만 생성
                    if (index >= 3) return '';
                    return `<span class="${className}"></span>`;
                },
            }}
            autoplay={{ delay: 3000 }}
            modules={[Autoplay, Pagination]}
        >
            {coupons.map((c, i) => (
                <SwiperSlide key={i} style={{ width: '240px' }}>
                    <CouponCard {...c} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default CouponCarousel;
