// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/core';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper', {
  // Налаштування Swiper
  slidesPerView: 1,
  spaceBetween: 10,
  // Додайте інші налаштування за потребою
});
