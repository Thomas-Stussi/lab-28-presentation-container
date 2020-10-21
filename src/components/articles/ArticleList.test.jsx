import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ArticleList from './ArticleList';

const testArray = [
  { title: 'title1', author: 'author1', description: 'description1' },
  { title: 'title2', author: 'author2', description: 'description2' },
  { title: 'title3', author: 'author3', description: 'description3' }
];

describe('ArticleList component', () => {
  afterEach(() => cleanup());
  it('render ArticleList component', () => {
    const { asFragment } = render(<ArticleList
      articles={testArray}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
