/* eslint-disable space-before-function-paren */
import React, { Component } from 'react';
import ArticleList from '../articles/ArticleList';
import Search from '../search/Search';
import { getArticles } from '../../services/news-api';

export default class AllArticles extends Component {
  state = {
    articles: [],
    search: ''
  }

  handleChange = ({ target }) => {
    this.setState({ search: target.value });
  }

  handleSearch = async () => {
    const articleArray = await getArticles(this.state.search);

    this.setState({ articles: articleArray });
  }

  render() {
    const { articles, search } = this.state;
    return (
      <>
        <Search
          search={search}
          onSubmit={this.handleSearch}
          onChange={this.handleChange}
        />
        <ArticleList
          articles={articles}
        />
      </>


    );
  }
}
