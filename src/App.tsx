import React, { useEffect, Dispatch } from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from './store';
import { GetPost } from './actions/PostActions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetPost());
    console.log(postState)
  }, []);

  const postState = useSelector((state: RootStore) => state.post)

  return (
    <div className="App">
      <h1>test</h1>
    </div>
  );
}

export default App;
