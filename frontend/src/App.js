import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PostsScreen from './screens/PostsScreen';
import PostScreen from './screens/PostScreen';
import SearchScreen from './screens/SearchScreen';
import UpdateScreen from './screens/UpdateScreen';
import DeleteScreen from './screens/DeleteScreen';



function App() {
  return (
    <Router>
      <Header />
      <Container className='my-3' id='main'>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/posts' component={PostsScreen} exact />
        <Route path='/posts/:id' component={PostScreen} />
        <Route path='/search/:q' component={SearchScreen} />
        <Route path='/delete-post/:id' />
        <Route path='/update-post/:id' component={UpdateScreen} />
        <Route path='/delete-post/:id' component={DeleteScreen} />
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
