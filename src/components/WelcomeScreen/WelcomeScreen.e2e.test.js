import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from './WelcomeScreen';

Enzyme.configure({adapter: new Adapter()});

it(`Wecome screen is correctly rendered after relaunch`, () => {
  const clickHandler = jest.fn();
  const app = shallow(
      <WelcomeScreen
        mistakes={0}
        time={0}
        onClick={clickHandler} />
  );
  const startButton = app.find(`button`);
  startButton.simulate(`click`);
  expect(clickHandler).toHaveBeenCalledTimes(1);
}
);
