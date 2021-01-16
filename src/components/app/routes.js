import lazyLoad from 'core/components/lazyLoad';

const Dashboard =
  process.env.NODE_ENV === 'production'
    ? lazyLoad(() => import('./components/dashboard'))
    : require('./components/dashboard').default;

export { Dashboard };
