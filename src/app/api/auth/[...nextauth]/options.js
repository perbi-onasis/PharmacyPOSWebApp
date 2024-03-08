// import GitHubProvider from "next-auth/providers/github";

// // import GoogleProvider from "next-auth/providers/google";

// export const options = {
//   providers: [
//     GitHubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),

//     // GithubProvider({
//     //   profile(profile) {
//     //     console.log("profile github: ", profile);

//     //     let userRole = "Github User";
//     //     if (profile?.email == "georgewise1010@gmail.com") {
//     //       userRole = "admin";
//     //     }
//     //     return {
//     //       ...profile,
//     //       role: userRole,
//     //     };
//     //   },
//     //   clientId: process.env.GITHUB_ID,
//     //   clientSecret: process.env.GITHUB_SECRET,
//     // }),
//     // GoogleProvider({
//     //   profile(profile) {
//     //     console.log("profile Google: ", profile);
//     //     return {
//     //       ...profile,
//     //       id: profile.sub,
//     //       role: userRole,
//     //     };
//     //   },
//     //   clientId: process.env.GOOGLE_ID,
//     //   clientSecret: process.env.GOOGLE_SECRET,
//     // }),
//   ],
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) token.role = user.role;
//     },

//     async session({ session, token }) {
//       if (session?.user) session.user.role = token.role;
//       return session;
//     },
//   },
// };

import GitHubProvider from "next-auth/providers/github";
// import { AuthOptions } from "next-auth";

export const options = {
  providers: [
    GitHubProvider({
      profile(profile) {
        console.log("profile github: ", profile);

        let userRole = "Github User";
        if (profile?.email == "georgewise1010@gmail.com") {
          userRole = "admin";
        }
        return {
          ...profile,
          role: userRole,
        };
      },
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  // callbacks: {
  //   async jwt({ token, user }) {
  //     if (user) token.role = user.role;
  //   },

  //   async session({ session, token }) {
  //     if (session?.user) session.user.role = token.role;
  //     return session;
  //   },
  // },
};
// {
// type: 'User',
//   site_admin: false,
//   name: 'George Femi Wise',
//   company: null,
//   blog: '',
//   location: 'Western Region, Takoradi.',
//   email: 'georgewise1010@gmail.com',
//   hireable: null,
//   bio: 'The world made a better with technology.',
//   twitter_username: 'Georgefemiwise',
//   public_repos: 17,
//   public_gists: 0,
//   followers: 6,
//   following: 13,
//   created_at: '2022-05-23T19:54:51Z',
//   updated_at: '2023-12-17T00:00:46Z',
//   private_gists: 0,
//   total_private_repos: 5,
//   owned_private_repos: 5,
//   disk_usage: 74748,
//   collaborators: 0,
//   two_factor_authentication: false,
//   plan: {
//     name: 'free',
//     space: 976562499,
//     collaborators: 0,
//     private_repos: 10000
//   }
// }