# Maestro Frontend Take-Home Test

Your task is to use the given design (`take-home.fig`, which is a [Figma](https://www.figma.com/) file) and build it using React (other frameworks are fine but this project uses React for a quick start).

![](desktop.png)

### Getting started

- Install the dependencies with `yarn install` or `npm install`.
- Use `yarn start` or `npm run start` if you're using React.
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- The page will reload if you make edits.<br />
- You will also see any lint errors in the console.

### Preconfiguration

We would rather see how you write code so have set the project up to get started straight away using [Create React App](https://github.com/facebook/create-react-app). The below packages are what `Maestro` is built upon and are preconfigured, but if you decide to use something other than these, than you will need to install them yourself.

- [Apollo GraphQL](https://www.apollographql.com)
- [styled-components](https://styled-components.com) || `sass` || `css`
- [Recharts](https://recharts.org)

The `API` to fetch data is an [unofficial SpaceX GraphQL endpoint](https://studio.apollographql.com/public/SpaceX-pxxbxen/variant/current/home)

The font `Inter` is already preconfigured and is added to the project within `src/index.js` via `<GlobalFont />`.

Not familiar with `styled-components` - then you can start adding your `sass` or `css` code directly into `src/styles/globalStyle.js`, otherwise creating your own style files works just as well.

### What we're looking for

- **Attention to detail.** Match your code to the design as best as you can. Most values are consistent but it is a possibility there was a slight mistake somewhere! To view the details of each element in the Figma design - you can see the values in the right panel once the element is selected.
- **Make sure it's responsive.** The designs given show what the design should look like at appropriate breakpoints so make sure to match these as best you can.
- **Appropriate markup.** Make sure you use semantic markup as best as you can.
- **Build your components from scratch.** Not including the chart (use `Rechart` or something your comfortable with) but everything else should be built by you and not via a third party library.

### What we're not looking for

- **Old browsers.** Use any modern features you like (eg. `CSS Grid` || `Flexbox`) - `Maestro` doesn't support IE 11 anyway.
- **Tests.** If they assist you in building the project than by all means write them but we're looking for implementing the design and functionality so don't prioritize them.

### Demo

Included is a demo video of what the overall project can look like once completed to give you a better sense of it in real time. We recommend watching this before you get started as some things can't be shown in a design file.

_Note: the demo uses skeleton screens for loading and infinite scroll in the right panel list - these aren't required but are nice to have if you have time (you won't be marked down for not doing these)._

### Submitting

Along with your code, create a short `README.md` file that talks about any interesting things you ran into and/or decisions you made etc. Also use this as a place to tell us any context around a certain decision you've made or if you couldn't get something completed, explain what you would do if you had more time.

Once done, create a public or private repo on Github. If it's private then you can invite me (`rbenstead`).

### Things to note

- The chart in the design won't match `BarChart` in `Recharts` - this is fine. The design is for context that it should be charting data.
