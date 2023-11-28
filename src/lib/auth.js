import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import dayjs from "dayjs";

async function refreshAccessToken(token) {
  console.log("Refreshing access token", token);
  try {
    const response = await fetch("http://127.0.0.1:8000/auth/refresh/", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        refresh: token.refresh,
      }),
    });

    const refreshedTokens = await response.json();

    if (!response.ok) {
      throw refreshedTokens;
    }

    return {
      ...token,
      access: refreshedTokens.access,
      // accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
      refresh: token.refresh, // Fall back to old refresh token
    };
  } catch (error) {
    console.log("Error here: ", error);

    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export const authOptions = {
  // session: {
  //   strategy: "jwt",
  // },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        try {
          const response = await fetch("http://127.0.0.1:8000/auth/login/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          });

          const data = await response.json();
          console.log("Data here", data);
          if (data.msg) {
            return null;
          }

          if (data) {
            // Any object returned will be saved in `user` property of the JWT
            return data;
          } else {
            // If you return null then an error will be displayed advising the user to check their details.
            return null;

            // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
          }
        } catch (err) {
          console.log("Error here", err);
        }
        // Add logic here to look up the user from the credentials supplied
      },
    }),
  ],
  callbacks: {
    async session({ session, user, token }) {
      if (token) {
        session.user = token;
        return session;
      }
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (account && user) {
        return {
          ...token,
          ...user,
        };
      }
      const user_in_token = jwtDecode(token.access);

      const isExpired = dayjs.unix(user_in_token.exp).diff(dayjs()) < 1;

      // Return previous token if the access token has not expired yet
      if (!isExpired) {
        return {
          ...token,
          ...user,
        };
      }

      // Access token has expired, try to update it
      return refreshAccessToken({
        ...token,
        ...user,
      });
    },
  },
  pages: {
    signIn: "/login",
    error: "/error",
  },
};
