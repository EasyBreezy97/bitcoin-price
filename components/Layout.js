import Navbar from '../components/Navbar';

const Layout = (props) => (
  <div>
    <Navbar/>
    <div className="container">
      {props.children}
    </div>
  </div>
)

export default Layout;