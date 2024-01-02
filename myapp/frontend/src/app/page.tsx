import React from 'react';
import MyButton from '../app/components/Button';

const Home = () => {
  return (
    <div>
      <h1>バックエンド疎通テスト</h1>
      <MyButton />
      <p id="message">ボタンをクリックしてください</p>
    </div>
  );
};

export default Home;
