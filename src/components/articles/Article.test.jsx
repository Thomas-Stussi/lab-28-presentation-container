import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Article from './Article';

describe('Article component', () => {
  afterEach(() => cleanup());
  it('render Article component', () => {
    const { asFragment } = render(<Article
      title="title"
      author="author"
      description="description"
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
