// src/App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/blog/Blog';
import Contact from './pages/Contact';
import Products from './pages/Products';
import BlogPost from './pages/blog/BlogPost';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import CookiePolicy from './pages/CookiePolicy';
import NotFoundPage from './pages/NotFoundPage';  // ✅ إضافة الاستيراد
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/blog/:slug" component={BlogPost} />
          <Route path="/cookies" component={CookiePolicy} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/products" component={Products} />
          <Route path="/contact" component={Contact} />
          <Route path="/privacy" component={PrivacyPolicy} />
          <Route path="/terms" component={TermsOfUse} />
          {/* ✅ صفحة 404 - يجب أن تكون في النهاية */}
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;