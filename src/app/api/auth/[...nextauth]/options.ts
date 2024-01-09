import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github"
import CredentialProvider from "next-auth/providers/credentials"


export const options: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        CredentialProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "Enter-your-username"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "Enter-your-Password"
                },
            },
            async authorize(credentials){
                const user = {id: "12", name: "mdasik0", password: "helloWorld"}
                if(credentials?.username === user.name && credentials?.password === user.password) {
                    return user
                }
                else {
                    return null
                }
            }
        })
    ],
}