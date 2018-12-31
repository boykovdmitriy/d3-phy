import './styles.scss'
import {ResizeDetector} from './app/resizeDetector';
import {render} from './app/render';

const generateList = (count, callback) => {
  const list = [];
  for (let i = 0; i < count; i++) {
    list.push(callback(i));
  }
  return list;
};

const randomNumber = () => Math.floor(Math.random() * 1000);

ResizeDetector((size) => render({...size, items: generateList(20, () => 10)}));