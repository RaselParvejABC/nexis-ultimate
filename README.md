# Nexis Ultimate

> This was a job task for Frontend Developer Internship Application at Nexis Limited Bangladesh.

## Live Site

> https://nexis-ultimate.web.app

## Overview (Features and Techs)

> - `Vite` as Dev Server and Build Tool
> - Customized `TailwindCSS` for Colors, Font Family and Font Size of Headings
> - `axios` for HTTP Client
> - `react-hook-form` for efficient form management
>   - `reset()`
>   - `trigger()`
> - `react-router-dom` for Client-side Routing
>   - v6
>   - Data Router
>   - Custom Error Page
>   - `useNavigate()`
>   - `Link`
> - `react-icons`
> - `react-toastify`
> - Routes
>   - `/`
>     - If no token in Local Storage, redirects to `/login` route.
>     - If there a token in Local Storage, tries to fetch attendance data with Session Token from Local Storage.
>       - If token is expired, removes expired tokens from storage and redirects to `/login` route.
>       - On success, show data in tabular form.
>         - Each table row has a `See Entries` button, that, on click, opens a modal shows attendance details of the person represented by that row.
>   - `/login`
>     - Login form managed with `react-hook-form`.
>     - Validation before submission.
>     - On failed attempt, shows error toast.
>     - On success, shows success toast and redirects to `/`.
>   - `/signup`
>     - Sign Up form managed with `react-hook-form`
>     - Validation before submission.
>     - Triggering validation with `trigger()` before going to next step of sign up form.
>     - On successful sign up attempt, redirects to `/login`.
