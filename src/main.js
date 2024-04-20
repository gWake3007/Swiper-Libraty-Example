// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/core';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Імпортуйте Swiper та модулі навігації та пагінації

// // Імпортуйте CSS-стилі Swiper (це також можна зробити в HTML-файлі)
// import 'swiper/swiper-bundle.css';
// import 'swiper/components/navigation/navigation.min.css';
// import 'swiper/components/pagination/pagination.min.css';

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper', {
  // Налаштування Swiper
  slidesPerView: 1,
  spaceBetween: 10,
  // Додайте інші налаштування за потребою
});
