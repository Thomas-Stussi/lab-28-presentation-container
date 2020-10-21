/* eslint-disable keyword-spacing */
/* eslint-disable space-before-function-paren */
import React, { Component } from 'react';
import ArticleList from '../articles/ArticleList';
import Search from '../search/Search';
import Loading from '../articles/Loading';
import { getArticles } from '../../services/news-api';

export default class AllArticles extends Component {
  state = {
    articles: [],
    search: '',
    loading: true
  }

  handleChange = ({ target }) => {
    this.setState({ search: target.value });
  }

  handleSearch = async () => {
    const articleArray = await getArticles(this.state.search);

    this.setState({ articles: articleArray, loading: false });
  }

  render() {
    const { articles, search, loading } = this.state;

    if (loading) return <>
      <Search
        search={search}
        onSubmit={this.handleSearch}
        onChange={this.handleChange}
      />
      <br />
      <Loading />
    </>;
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
