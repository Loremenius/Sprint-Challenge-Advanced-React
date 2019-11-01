import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from "./components/Navbar"
import PlayerCard from "./components/PlayerCard"
import PlayerList from "./components/PlayerList"
import {render} from "@testing-library/react";

it('renders without crashing', () => {
  render(<App />);
});
it('renders without crashing', () => {
  render(<Navbar />);
});
it('renders without crashing', () => {
  render(<PlayerList />);
});
it('renders without crashing', () => {
  render(<PlayerCard />);
});
