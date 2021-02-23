import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

export default function TransactionItem({ type, amount, currency }) {
  return (
    <tr className={styles.itemContainer}>
      <td className={styles.item}>{type}</td>
      <td className={styles.item}>{amount}</td>
      <td className={styles.item}>{currency}</td>
    </tr>
  );
}

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
