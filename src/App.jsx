import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import userData from './userData.json';
import friends from './friends.json';
import transactions from './transactions.json';
import 'modern-normalize'
import './index.css'
import Button from './components/Button/Button';


const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <Button title="RUSS" />
      <Button title="CUT" />
      <Button title="NOY" />
      <Button title="GTER" />
      

    </>
  );
};

export default App;
