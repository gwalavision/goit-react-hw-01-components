import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import randomColor from '../randomColorFn';

function StatisticsItem({ label, percentage }) {
  return (
    <li className={styles.item} style={{ backgroundColor: randomColor() }}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}&#37;</span>
    </li>
  );
}

StatisticsItem.propTypes = {
  percentage: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

export default StatisticsItem;
