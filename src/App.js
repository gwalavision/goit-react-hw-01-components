import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import user from './json/user-info.json';
import statisticalData from './json/statistical-data.json';
import friends from './json/friends.json';
import transactions from './json/transactions.json';

function App() {
  const { name, tag, location, avatar, stats } = user;
  return (
    <div>
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title={'Upload Stats'} stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}

export default App;
