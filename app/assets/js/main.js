import initNavigationToggle from './components/navigation';
import initMasonryGrid from './components/masonry';
import initSlider from './components/slider';

initNavigationToggle();
initMasonryGrid();
initSlider();

document.querySelector('html').classList.remove('no-js');