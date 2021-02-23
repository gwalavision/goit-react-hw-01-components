import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

import StatisticsItem from './StatisticsItem';

function Statistics({ stats, title }) {
  return (
    <section className={styles.container}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statsContainer}>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem key={id} percentage={percentage} label={label} />
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  stats: PropTypes.array.isRequired,
  title: PropTypes.string,
};

export default Statistics;
