import "./home.css";
import Button from "../../components/common/Button/Button";
import { userSetDetails } from "../../redux/user/userAction";
import { connect } from "react-redux";

const Home = ({ dispatchUserSetDetails }) => {
  const handleLogout = () => {
    dispatchUserSetDetails(null);
  };
  return (
    <div className="home">
      <div className="home-content">
        <h1>Welcome Home</h1>
        <Button type="button" label="logout" handleClick={handleLogout} />
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  dispatchUserSetDetails: (user) => dispatch(userSetDetails(user)),
});

export default connect(null, mapDispatchToProps)(Home);
