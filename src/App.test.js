import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import AnimalEmoji from './AnimalEmoji';

test('when user clicks on close zoo or open zoo button, text on screen changes', () => {
  render(<App />);
  const closeZooButton = screen.queryByText(/Close zoo/i);
  const openZooButton = screen.queryByText(/Open zoo/i);

  fireEvent.click(closeZooButton);

  const closedZooEl = screen.queryByText('I am never going to financially recover from this');
  expect(closedZooEl).toBeInTheDocument();

  fireEvent.click(openZooButton);

  const openZooEl = screen.queryByText('My name is Joe Exotic and we are open for business');
  expect(openZooEl).toBeInTheDocument();
});

test('the emoji that renders depends on the animal prop: cheetah renders', () => {
  render(<AnimalEmoji animal="cheetah" />);

  const cheetahEmoji = screen.getByText(/🐆/i);
  expect(cheetahEmoji).toBeInTheDocument();
});
