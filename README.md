# User auth app

This repository contains the complete source code for a user authentication platform developed using Next.js, TailwindCSS, and MongoDB. The app includes functionality for user registration and login, implementing JWT for secure token-based authentication. It also features a responsive and modern user interface styled with Shadcn UI components.

## Features

- User sign up and login with JWT authentication
- Responsive design with TailwindCSS
- Beautifully styled forms and user interface using Shadcn UI components
- Seamless API calls made using Next.js server actions
- Easy integration with MongoDB for data management
- Store JWT Token using cookies
  
## Run Locally

Clone the app

```bash
   https://github.com/ishimwemx/user-auth-app.git
```
Go to the project directory

```bash
    cd user-auth-app
```
Install dependencies

```bash
    npm install
```

Setup Environment Variables

```Create a .env file in the root folder and save in the environment variables:
  JWT_SECRET = YOUR_KEY
  MONGO_URI = YOUR-MONGO-URL
 ```

- JWT_SECRET you can use whichever one of your liking
- For MONGO_URI you can use this one which is already deployed: mongodb+srv://ishimwe:1nt3rv13w@user-auth.irihw62.mongodb.net/?retryWrites=true&w=majority&appName=user-auth

Run the app

```bash
    npm run dev
```

## Tech Stack
* [Nextjs](https://nextjs.org/)
* [MongoDB](https://www.mongodb.com/)
* [TailwindCSS](https://tailwindcss.com/)
* [Shadcn](https://ui.shadcn.com/)

## Deployment

- Live demo: https://user-auth-app-fawn.vercel.app/
- App is deployed on Vercel.

## Contributing

Contributions are always welcome
Just raise an issue, and we will discuss it.


