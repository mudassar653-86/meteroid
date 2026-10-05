# Meteor Dodge Duel

Vercel-ready static web game. No database, Prisma, or external server-side storage is required.

## Deploy to Vercel

1. Upload this project to a GitHub repository.
2. In Vercel, choose **Add New Project** and import the GitHub repository.
3. Let Vercel auto-detect the framework/build settings.
4. No environment variables are required.
5. Click **Deploy**.

### Local verification

```bash
npm install
npm run build
npm run dev
```

All player settings are stored locally in the browser with `localStorage`.
