import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
  direction: 'vertical',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
});
