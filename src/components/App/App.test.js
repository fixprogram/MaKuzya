import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

it(`App correctly renders after relaunch`, () => {
  const tree = renderer.create(
      <App
        data={{
          questions: [
            {
              type: `genre`,
              genre: `classic`,
              answers: [
                {
                  src: `https://upload.wikimedia.org/wikipedia/ru/e/e5.ogg`,
                  genre: `rockk`
                }
              ]
            },
            {
              type: `artist`,
              song: {
                src: `https://upload.wikimedia.org/wikipedia/ru/e/e5.ogg`,
                artist: `Yenifer`
              },
              answers: [
                {
                  picture: `https://placehold.it/135x135`,
                  artist: `Vesemir`
                }
              ]
            },
          ],
          mistakes: 1,
          time: 2
        }}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
}
);
