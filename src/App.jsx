import React, { useEffect, useState } from "react";
import {
  authEndpoint,
  clientId,
  redirectUri,
  scopes,
} from "./HttpRequest/spotify_config";
import hash from "./HttpRequest/hash";
import "./App.css";
import PieChart from "./components/PieChart";
import { useStateContext } from "./contexts/ContextProvider";
function App() {
  const { token, setToken } = useStateContext();
  useEffect(() => {
    var mToken = hash.access_token;
    if (mToken) {
      setToken(mToken);
    }
  }, []);

  return (
    <div>
      {!token && (
        //<button onClick={handleLogin}>Login Here</button>
        <a
          className=""
          href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
            "%20"
          )}&response_type=token&show_dialog=true`}
        >
          Login to Spotify
        </a>
      )}
      {token && <PieChart token={token} />}
    </div>
  );
}

export default App;
