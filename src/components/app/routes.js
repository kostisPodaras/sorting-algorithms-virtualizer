import lazyLoad from 'core/components/lazyLoad';

const Home =
  process.env.NODE_ENV === 'production'
    ? lazyLoad(() => import('./components/home'))
    : require('./components/home').default;

export { Home };
