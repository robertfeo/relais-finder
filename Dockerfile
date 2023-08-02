# Stage 1: base
FROM node:18-alpine AS base

# Add these lines at the beginning of your Dockerfile
ARG DATABASE_URL

# Install dependencies only when needed
# Stage 2: deps
FROM base AS deps

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Copy package files and install dependencies with npm
COPY package.json package-lock.json* ./
COPY migrate-and-start.js ./
COPY prisma ./prisma
COPY prisma ./prisma

RUN \
    if [ -f package-lock.json ]; then npm install; \
    else echo "Lockfile not found." && exit 1; \
    fi

RUN npm cache clean --force

# Stage 3: builder
FROM base AS builder

WORKDIR /app

# Copy all project files
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/migrate-and-start.js ./
COPY --from=deps /app/prisma ./prisma
COPY --from=deps /app/package.json ./package.json
COPY . .

RUN chmod +x migrate-and-start.js

RUN npx prisma generate

RUN npm install pg

# Build the application
RUN npm run build

# Stage 4: runner (production)
FROM base AS runner

WORKDIR /app

ENV NODE_ENV production

RUN \
    addgroup --system --gid 1001 nodejs; \
    adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/migrate-and-start.js ./migrate-and-start.js
COPY --from=builder --chown=nextjs:nodejs /app/prisma ./prisma
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules

# Move ownership change to here
RUN chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME localhost

CMD ["node", "migrate-and-start.js"]
