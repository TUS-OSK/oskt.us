# oskt.us

OSK team site.

## Developing

```
yarn
yarn start
```

Start a local server at `localhost:4000`.

Edit `public/index.html` `index.babel` `index.styl`.

## Deployment

Edit `circle.yml` and fill in the `GIT_****` fields.

Open [circleci](https://circleci.com) and build project.

Project Settings -> Checkout SSH Keys -> Add user key

Then, rebuild.
