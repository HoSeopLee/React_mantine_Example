import React from 'react';

interface UseIntersectionObserverProps extends IntersectionObserverInit {
  onIntersect: IntersectionObserverCallback;
  options?: {
    rootMargin?: string;
    threshold?: number;
  };
}

const useIntersectionObserver = ({
  onIntersect,
  options = { rootMargin: '0px', threshold: 0 },
}: UseIntersectionObserverProps) => {
  const [target, setTarget] = React.useState<any>();
  React.useEffect(() => {
    if (!target) return;
    console.log(target);

    const observer = new IntersectionObserver(onIntersect, options);
    observer.observe(target);
    return () => target && observer.disconnect();
  }, [target]);

  return { setTarget };
};

export { useIntersectionObserver };
