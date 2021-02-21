import TransactionItem from './TransactionItem'


export default function TransactionHistory({transactions}) {
  console.log(transactions);
    return (
<table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
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
