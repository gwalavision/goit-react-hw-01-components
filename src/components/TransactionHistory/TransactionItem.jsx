export default function TransactionItem({ type, amount, currency }) {
    console.log(type);
    return (
        <tr>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    )
}