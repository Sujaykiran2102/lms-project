// app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  providers: [
    // We will configure providers here later (e.g., Google, GitHub, or custom credentials)
    // For now, we add a placeholder credentials provider.
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        // For now, we'll return a mock user if the credentials are correct
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };

        if (user) {
          return user; // Any object returned will be saved in the session
        } else {
          return null; // If you return null, an error will be displayed
        }
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login', // Redirect users to our custom login page
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };