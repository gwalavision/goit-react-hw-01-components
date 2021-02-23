import colors from '../json/colors.json';

const randomColor = () => {
  return colors[Math.round(Math.random() * (Number(colors.length) + 1 - 1) + 1)]
    .hex;
};

export default randomColor;
