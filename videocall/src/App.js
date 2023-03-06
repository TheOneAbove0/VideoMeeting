
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import { CssBaseline } from "@mui/material";



// Lawyer'S PAGES

import LawyerRoom from "./LawyerVideoMeeting/Room";

// Client'S PAGES

import ClientRoom from "./ClientVideoMeeting/Room";




const App = () => {

  return (
    <>


      <>
        <CssBaseline>
          <Router>
            <AuthProvider>
              <Switch>
               
               <Route
                  exact
                  path="/lawyer/room/:roomID"
                  component={LawyerRoom}
                />
                <Route
                  exact
                  path="/client/room/:roomID"
                  component={ClientRoom}
                />

              </Switch>
            </AuthProvider>
          </Router>
        </CssBaseline>

      </>

    </>
  );
};

export default App;
