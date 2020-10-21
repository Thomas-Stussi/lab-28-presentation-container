import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NewsSearch from './NewsSearch';
import { getArticles } from '../../services/news-api';

jest.mock('../../services/news-api');

describe('NewsSearch container', () => {
  it('displays a list of articles', async () => {
    getArticles.mockResolvedValue([
      { title: 'title1', author: 'author1', description: 'description1' },
      { title: 'title2', author: 'author2', description: 'description2' },
      { title: 'title3', author: 'author3', description: 'description3' }
    ]);

    render(<NewsSearch />);

    const button = screen.getByTestId('button');

    await fireEvent.click(button);

    const articleList = await screen.findByTestId('articles');

    expect(articleList).not.toBeEmptyDOMElement();
  });
});
