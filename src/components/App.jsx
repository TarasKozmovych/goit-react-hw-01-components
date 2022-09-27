import Profile from './profile/profile';
import user from '../data/user.json';

import Statistics from './statistics/Statistics';
import data from '../data/data.json';

import FriendList from './friends/FriendList';
import friends from '../data/friends.json';

import TransactionHistory from './transactions/TransactionHistory';
import transactions from '../data/transactions.json';

import styles from './styles.module.css';


export const App = () => {
  return (
    <div className={styles.wrapper}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};