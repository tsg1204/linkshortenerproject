# Authentication — Clerk

All authentication in this app is handled exclusively by **Clerk** (`@clerk/nextjs` v6). No other auth methods, libraries, or custom implementations should ever be used or introduced.

## Rules

- **Clerk only.** Never implement custom auth, sessions, JWTs, or use any other auth library.
- **User identity comes from Clerk.** Always use `auth()` (server) or `useAuth()` / `useUser()` (client) to get the current user. Never trust user IDs from request bodies or query params.
- **Middleware lives in `proxy.ts`** using `clerkMiddleware()`. Route protection is configured there.

## Route Behaviour

| Route          | Behaviour                                                  |
| -------------- | ---------------------------------------------------------- |
| `/dashboard`   | Protected — redirect unauthenticated users to sign-in      |
| `/` (homepage) | If the user is already signed in, redirect to `/dashboard` |

## Sign In / Sign Up

- Sign in and sign up must always be launched as a **Clerk modal** (not a dedicated page).
- Use the `<SignInButton mode="modal">` and `<SignUpButton mode="modal">` components from `@clerk/nextjs`.
- Never navigate to a standalone `/sign-in` or `/sign-up` route.

## Middleware (`proxy.ts`)

Route protection is enforced via `clerkMiddleware()`. Use `createRouteMatcher` to define protected routes and call `auth.protect()` for them:

```ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)']);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect();
});
```

## Server-Side Auth

Use `auth()` from `@clerk/nextjs/server` in Server Components and Route Handlers:

```ts
import { auth } from '@clerk/nextjs/server';

const { userId } = await auth();
if (!userId) redirect('/');
```

## Client-Side Auth

Use hooks from `@clerk/nextjs` only when a component genuinely needs client interactivity:

```ts
import { useAuth } from '@clerk/nextjs';

const { isSignedIn, userId } = useAuth();
```
