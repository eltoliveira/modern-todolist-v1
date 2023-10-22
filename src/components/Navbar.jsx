import styled from "styled-components";
import { Avatar, Button } from "@mantine/core";
import {
  getAuth,
  GoogleAuthProvider,
  signOut,
  signInWithPopup,
} from "firebase/auth";
import { showNotification } from "@mantine/notifications";

const StyledNav = styled.nav`
  position: relative;
  width: 100%;
  text-align: center;

  .profile {
    position: absolute;
    right: 0;
    top: 0;
  }
`;

const Navbar = ({ isAuth, setIsAuth, profile, setProfile }) => {
  const auth = getAuth(); // Obtém a instância de autenticação

  const handleAuthentication = async () => {
    console.log("Authenticating user");

    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Set to state
      setIsAuth(true);
      setProfile(user.providerData[0]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = async () => {
    console.log("Logging out user");

    showNotification({
      title: "Logging out",
      message: "Please wait...",
    });

    try {
      await signOut(auth);

      // Clear state
      setIsAuth(false);
      setProfile({});

      showNotification({
        title: "Logged out",
        message: "You have been successfully logged out",
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <StyledNav>
      <h1>#modern todolist</h1>
      <div className="profile">
        {isAuth ? (
          <div>
            <Avatar radius="20px" src={profile.photoURL} />
            <Button onClick={handleLogout}>Logout</Button>
          </div>
        ) : (
          <Button onClick={handleAuthentication}>Login with Google</Button>
        )}
      </div>
    </StyledNav>
  );
};

export default Navbar;