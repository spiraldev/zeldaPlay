FROM jmcdo29/build AS build

FROM node:10-alpine as release
RUN apk add --no-cache bash
COPY --from=build /tmp/node_modules ./node_modules
COPY --from=build /app/dist/apps/api ./dist/apps/api
COPY --from=build /app/package.json ./

EXPOSE 3333

CMD ["node", "dist/apps/api/main.js"]
