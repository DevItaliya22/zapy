import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher([
    '/',
    '/api/clerk-webhook',
    '/api/drive-activity/notification',
    '/api/payment/success',
    // '/dashboard'
])

export default clerkMiddleware((auth, request) => {
    if (!isPublicRoute(request)) {
        auth().protect()
    }
})

export const config = {
    matcher: [
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        '/(api|trpc)(.*)',
    ],
}

// // https://www.googleapis.com/auth/userinfo.email
// // https://www.googleapis.com/auth/userinfo.profile
// // https://www.googleapis.com/auth/drive.activity.readonly
// // https://www.googleapis.com/auth/drive.metadata
// // https://www.googleapis.com/auth/drive.readonly

// import { authMiddleware } from '@clerk/nextjs/server'

// export default authMiddleware({
//   publicRoutes: [
//     '/',
//     '/api/clerk-webhook',
//     '/api/drive-activity/notification',
//     '/api/payment/success',
//   ],
//   ignoredRoutes: [
//     '/api/auth/callback/discord',
//     '/api/auth/callback/notion',
//     '/api/auth/callback/slack',
//     '/api/flow',
//     '/api/cron/wait',
//   ],
// })

// export const config = {
//   matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
// }

// https://www.googleapis.com/auth/userinfo.email
// https://www.googleapis.com/auth/userinfo.profile
// https://www.googleapis.com/auth/drive.activity.readonly
// https://www.googleapis.com/auth/drive.metadata
// https://www.googleapis.com/auth/drive.readonly