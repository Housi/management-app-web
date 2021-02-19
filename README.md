## URB-E Management App

1. run `yarn` (npm i yarn -g if you dont have it), it will install all dependancies, if NODE_ENV='production' then devDependancies are skipped

2. create .env.local file (copy .env.example) - here you can change base path, asset prefix (assets are in `/public` folder) api url etc

3.1 To run for developement (pretty heavy, can be faster after pre-build)
`yarn dev` or `yarn build && yarn dev`

4 To run prod app:

4.1. Best way to run it on prod is through `yarn start` then we can use `NEXT_PUBLIC_BASEPATH='/management'` to make it run under `localhost:3000/management` other port by running `yarn start -p 1111`

4.2. Other way is to export it as static folder by running: `yarn build && yarn next export`. This will create 'out' directory which can be served with any static server, if you want to mount it under other path eg '/management' you would need to make an alias for that path to point to /out directory in your server config. And then don't set up basepath in env

In case of unexpected errors during build remove `.next` directory and be sure to only build/export through yarn, it manages dependendencies correctly, other commands might cause problems with multiple react versions

## NEXT Readme ↓

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
