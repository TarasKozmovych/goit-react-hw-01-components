import Profile from './profile/profile';
import user from '../data/user.json';


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
      {/* <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} /> */}
    </div>
  );
};