import NextAuth from "next-auth";
import githubAuth from "next-auth/providers/github"

//ibaratanya kamu mau login pakai kartu apa, as,atau simpati gitu
export const authOption = {
    providers: [
        githubAuth({
            clientId: process.env.GITHUB_CLIENT,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
}

//ibaratanya ini hape
const handler = NextAuth(authOption);

export { handler as GET, handler as POST }
