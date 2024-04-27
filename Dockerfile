# Install dependencies only when needed
FROM node:20.12-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
RUN yarn add sharp --ignore-engines

# Rebuild the source code only when needed
FROM node:20.12-alpine AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

RUN yarn build

# Production image, copy all the files and run next
FROM node:20.12-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

COPY --from=builder  --chown=node:node /app/package.json .
COPY --from=builder  --chown=node:node /app/yarn.lock .
COPY --from=builder  --chown=node:node /app/next.config.mjs ./
COPY --from=builder  --chown=node:node /app/public ./public
COPY --from=builder  --chown=node:node /app/messages ./messages
COPY --from=builder  --chown=node:node /app/.next/standalone ./
COPY --from=builder  --chown=node:node /app/.next/static ./.next/static

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder  --chown=node:node /app/.next/static ./.next/static

USER root

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
