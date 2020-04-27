import './styles/bootstrap.css';
import './styles/style.css';
import Image1 from './assets/img1.jpg';
import Image2 from './assets/img2.jpg';
import Image3 from './assets/img3.jpg';

const setHomeImages = () => {
  document.getElementById('content_menu').classList.add('hide');
  document.getElementById('content_menu').classList.remove('fadeIn', 'animated');
  document.getElementById('content_home').classList.remove('hide');
  document.getElementById('content_home').classList.add('fadeIn', 'animated');
};

const changeCover = (img) => {
  // eslint-disable-next-line no-unused-expressions
  if (img === 1) {
    document.getElementById('mainImage').src = Image1;
  } else if (img === 2) {
    document.getElementById('mainImage').src = Image2;
  } else {
    document.getElementById('mainImage').src = Image3;
  }
};

// eslint-disable-next-line import/prefer-default-export
export const actionButton = (id) => {
  Array.prototype.forEach.call(document.getElementsByClassName('nav-link'), (el) => {
    // eslint-disable-next-line no-unused-expressions
    el.id === id ? el.classList.add('active') : el.classList.remove('active');
  });

  if (id === 'Home') {
    setHomeImages();
    document.getElementById('page_text').innerHTML = 'We are really proud to be the best Latin American restaurant in the town.';
    document.getElementById('page_title').innerHTML = "Welcome to our 'Restaurante'";
    changeCover(1);
  }
  if (id === 'Menu') {
    document.getElementById('content_menu').classList.remove('hide');
    document.getElementById('content_menu').classList.add('fadeIn', 'animated');
    document.getElementById('content_home').classList.add('hide');
    document.getElementById('content_home').classList.remove('fadeIn', 'animated');
    changeCover(2);
  }
  if (id === 'Contact') {
    setHomeImages();
    document.getElementById('page_text').innerHTML = 'email: cochabambinoski@gmail.com';
    document.getElementById('page_title').innerHTML = 'Contacts';
    changeCover(3);
  }
};

export const cover = (id) => {
  const img = new Image();
  // eslint-disable-next-line no-unused-expressions
  img.src = Image1;
  img.alt = 'Background';
  // eslint-disable-next-line no-unused-expressions
  img.classList.add(id);
  img.id = id;

  return img;
};
