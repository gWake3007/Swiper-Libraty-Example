import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  // Optional parameters
//   direction: 'vertical',
//   loop: true,
  modules: [Navigation, Pagination],
  // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
});
