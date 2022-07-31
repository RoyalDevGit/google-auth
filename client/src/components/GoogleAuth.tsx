import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import GoogleLogin from "react-google-login";

interface AuthResponse {
  token: string;
  user: User;
}

interface User {
  _id: string;
  name: string;
  email: string;
  avatar: string;
}

const GoogleAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  console.log(process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID);
  
  const onSuccess = async (res: any) => {
    try {
      console.log('success');
      
      const result: AxiosResponse<AuthResponse> = await axios.post("/auth/", {
        token: res?.tokenId,
      });

      setUser(result.data.user);
    } catch (err) {
      console.log(err);
    }
  };

  const onFailure = async (res: any) => {
    console.log(res);
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col">
      { (
        <GoogleLogin
          clientId="70192726263-ursa5bj3rg01ndmm41af4n7bpdoaisa2.apps.googleusercontent.com"
          onSuccess={onSuccess}
          onFailure={onFailure}
        />
      )}

      {user && (
        <>
          <img src={user.avatar} className="rounded-full" />
          <h1 className="text-xl font-semibold text-center my-5">
            {user.name}
          </h1>
        </>
      )}
    </div>
  );
};

export default GoogleAuth;