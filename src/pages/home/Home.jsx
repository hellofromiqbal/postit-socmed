import './home.css';
import CreateForm from '../../components/createForm/CreateForm';
import PostsList from '../../components/postsList/PostsList';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <section className="home-container">
      <CreateForm/>
      <PostsList/>
      <Footer/>
    </section>
  );
}
 
export default Home;