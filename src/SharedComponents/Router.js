import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserNavBar from './Nav';
//user
import Home from '../SharedComponents/Home';
import UserHome from '../FeaturedComponents/User/Home';
///
import BooksDisplayListing from '../FeaturedComponents/Featured/Book/Listing';
import AuthorsDisplayListing from '../FeaturedComponents/Featured/Author/Listing';
//Admin
import AdminPanel from '../FeaturedComponents/Admin/Panel';
import { LoginForm } from '../FeaturedComponents/UserForms/login';
import { SignUpForm } from '../FeaturedComponents/UserForms/signup';
import CategoriesListing from '../FeaturedComponents/Featured/Categories/Listing';
import BookDetails from '../FeaturedComponents/Featured/Book/Details';

import AuthorDetails from '../FeaturedComponents/Featured/Author/Details';

import CategoryDetails from '../FeaturedComponents/Featured/Categories/Details';
import Footer from '../SharedComponents/Footer';

export default class Routing extends React.Component {
  render() {
    return (
      <Router>
        <UserNavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/userProfile" component={UserHome} />
          <Route exact path="/books" component={BooksDisplayListing} />
          <Route exact path="/books/:bookId" component={BookDetails} />
          <Route exact path="/authors" component={AuthorsDisplayListing} />
          <Route exact path="/authors/:authorId" component={AuthorDetails} />
          <Route exact path="/admin" component={AdminPanel} />
          <Route exact path="/signup" component={SignUpForm} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/categories" component={CategoriesListing} />
          <Route exact path="/categories/:categoryId" component={CategoryDetails} />
        </Switch>
        <Footer />
      </Router>
    )
  }
}






