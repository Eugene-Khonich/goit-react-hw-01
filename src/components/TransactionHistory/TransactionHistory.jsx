import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead>
        <tr className={css.head}>
          <th className={css.headItem}>Type</th>
          <th className={css.headItem}>Amount</th>
          <th className={css.headItem}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          return (
            <tr className={css.list} key={item.id}>
              <td className={css.listItem} key={item.type}>
                {item.type}
              </td>
              <td className={css.listItem} key={item.amount}>
                {item.amount}
              </td>
              <td className={css.listItem} key={item.currency}>
                {item.currency}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
