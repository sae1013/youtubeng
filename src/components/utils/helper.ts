export const createCSSString = (styles?: React.CSSProperties): string => {
  return styles
    ? Object.entries(styles)
        .map(([key, value]) => `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value};`)
        .join(' ')
    : '';
};
