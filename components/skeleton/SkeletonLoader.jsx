import classnames from 'classnames';

import styles from './skeleton-loader.module.scss';

const SkeletonLine = (props) => {
   const {
      withShadow,
      light,
      className,
      edgeStyle = 'curved',
      size = 'medium',
   } = props;
   return (
      <div
         className={classnames(
            styles.skeletonLine,
            styles[size],
            withShadow ? styles.withShadow : null,
            light ? styles.light : null,
            styles[edgeStyle],
            className,
         )}
      />
   );
};

const SkeletonLoader = (props) => {
   const { count = 1, className, classes, ...rest } = props;

   return (
      <div className={classnames(className, classes?.container)}>
         {Array.from({ length: count }, (_, index) => (
            <SkeletonLine key={index} {...rest} className={classes?.line} />
         ))}
      </div>
   );
};

export default SkeletonLoader;
