FROM node:18

RUN groupadd -r reactgroup && \
    useradd -r -g reactgroup reactuser

WORKDIR /app

COPY --chown=reactuser:reactgroup package.json package-lock.json ./
RUN npm ci

COPY --chown=reactuser:reactgroup . .

USER reactuser

EXPOSE 3000

CMD ["npm", "start"]