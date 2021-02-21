import TransactionItem from './TransactionItem'
import styles from './TransactionHistory.module.css'




export default function TransactionHistory({transactions}) {
    return (
<table className={styles.container}>
  <thead className={styles.thumbnails}>
    <tr >
      <th className={styles.thumbnailItem}>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
          {
            transactions.map(({ type, amount, currency, id }) => (
              <TransactionItem
                key={id}
                type={type}
                amount={amount}
                currency={currency}
              />
            ))
      }
  </tbody>
</table>
    )
 
}

