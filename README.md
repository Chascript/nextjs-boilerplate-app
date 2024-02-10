### Features Added:

- Next.js version (14.1.0)
- Storybook integration
- TypeScript
- Linting and code formatting using ESLint
- Husky for Git hooks
- Tailwind CSS
- Webpack 5 for bundling
- [Connect repo to Vercel for quick deployment](https://vercel.com/docs/deployments/git/vercel-for-github#deploying-a-github-repository)
- Remote vercel postsql database

#Getting Started:

 ```
   yarn install
 ```

**Connect repo to Vercel**
https://vercel.com/new

**Create a Vercel Postgres database**

1. In your [dashboard on Vercel](https://vercel.com/dashboard), create or select the project you want to work with.
2. Select the Storage tab, then select the Connect Store button.
3. Select Postgres.
4. Enter a database name
5. Select a region. If your project has Edge or Serverless Functions, choose an option near their regions for faster responses.
6. Select Create and Continue.
7. In the next view, change nothing and select Connect.
8. Pull your environment variables automatically

```
  vercel env pull .env.development.local
```



Todo:
- testing
