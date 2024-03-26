import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import prisma from "@/app/libs/prismadb";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    

    CredentialsProvider({
      name: 'credentials',
      credentials: {
         name: { label: 'name', type: 'text'},
         email: { label: 'email' , type: 'email'},
      },

      async authorize(credentials) {
        if (!credentials?.name || !credentials?.email){
          throw new Error('Invalid credentials');
        }

       const user = await prisma.user.findUnique({
        where: {
          email: credentials.email
        }
       });
       

       return user;

      }
    })

  ],

  pages: {
    signIn: '/',
  },
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET,
 
};


export default NextAuth(authOptions);