[![Netlify Status](https://api.netlify.com/api/v1/badges/83b69c89-4474-42a7-98e0-5f341635b539/deploy-status)](https://app.netlify.com/sites/cloning-omdb-ohminkwon/deploys)

# ๐ฅ Vue3 Movie Search

Vue3์ OMDb API๋ฅผ ์ฌ์ฉํ๋ ์ํ ๊ฒ์ ์ ํ๋ฆฌ์ผ์ด์ ์์ ์๋๋ค.
Vue3-webpack-template๋ฅผ ํ์ฉํ์ฌ ํ๋ก์ ํธ๋ฅผ ์์ํฉ๋๋ค.

[DEMO](https://cloning-omdb-ohminkwon.netlify.app/)

<img style="border: 2px solid orange;" src="./src/assets/example_00.png" alt="Main">  

## ๐์ฐธ์กฐ ๋ฌธ์
- [Vue3](https://v3.ko.vuejs.org/guide/introduction.html)
- [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- [Vuex](https://next.vuex.vuejs.org/)
- [Vue Router](https://next.router.vuejs.org/installation.html)
- [Netlify](https://docs.netlify.com/)
- [Jest](https://jestjs.io/docs/getting-started)
- [Vue test utils](https://next.vue-test-utils.vuejs.org/guide/)
- [Cypress](https://docs.cypress.io/guides/overview/why-cypress)

## ๐ฅ๏ธ ๋์ ํ๋ฉด

๊ฒ์ & ์ถ๋ ฅ ์์   
<img style="border: 2px solid orange;" src="./src/assets/example_01.gif" alt="example-1">  
  
๋ฐ์์ฑ ์์   
<img style="border: 2px solid orange;" src="./src/assets/example_02.gif" alt="example-2">

## ๐ฏMain Contents
- Vuex(Store)๋ก ์ค์ ์ง์ค์ ๋ฐ์ดํฐ ์ฒ๋ฆฌ & ๋ค์์คํ์ด์ค ๊ด๋ฆฌ
- SPA(Single Page Application)๋ฅผ ์ํ Vue Router ๊ตฌ์ฑ & Hash ๊ธฐ๋ฐ ํ์ด์ง ๋จ์ ๊ฐ๋ฐ
- OMDb API๋ฅผ ํ์ฉํด ์ค์  ์ํ ์ ๋ณด๋ฅผ ๊ฒ์ & ์ถ๋ ฅ
- Vue ํ๋ฌ๊ทธ์ธ์ ์์ฑํ๊ณ  ์ ์ฉ
- API Key๊ฐ ๋ธ์ถ๋์ง ์๋๋ก Netlify Functions(์๋ฒ๋ฆฌ์ค ํจ์)์ ํ๊ฒฝ ๋ณ์(.env)๋ฅผ ์ฌ์ฉํด ๋ฐฑ์๋๋ฅผ ๊ตฌ์ฑํ๊ณ , ๋ก์ปฌ์์ ํ์คํธ
- GitHub ์ ์ฅ์์ Push(์๋ก๋)ํ๊ณ  Netlify Hosting์ผ๋ก CD(์ง์์ ์ธ ๋ฐฐํฌ)๋ฅผ ์ ์ฉ
- Jest์ VTU(Vue Test Utils)๋ฅผ ํ์ฉํด ์ปดํฌ๋ํธ ๋จ์ ํ์คํธ (์งํ์ค)
- Cypress๋ฅผ ํ์ฉํด E2E ํ์คํธ (์งํ์์ )

## ๐กSpecs
- Vue3
- Vuex
- Vue-Router
- Webpack
- OMDb API
- Netlify
  - Hosting with Github(Continuous Deployment)
  - Functions(Serverless)
- Axios
- Lodash
- Tests
  - Jest
  - Vue Test Utils
  - Cypress

## ๐ฆPackages
์ค์นํ  ๊ฐ ํจํค์ง(๋ชจ๋)์ ์ค์น ๋ฒ์ ์ด ๋ค๋ฅธ ๊ฒฝ์ฐ ์ฌ์ฉ๋ฒ์ด ๋ฌ๋ผ์ง ์ ์์ต๋๋ค.
๋ชจ๋  ํจํค์ง๋ฅผ package.json ํ์ผ์ ๋ช์๋ ๋ฒ์ ๊ณผ ๋์ผํ๊ฒ ์ค์นํ๋ ๊ฒ์ ๊ถ์ฅํฉ๋๋ค.
- [bootstrap](https://github.com/twbs/bootstrap): ๋ค์ํ๊ณ  ๊ฐ๋ ฅํ ๊ธฐ๋ฅ์ ์ ๊ณตํ๋ UI ํ๋ ์์ํฌ์๋๋ค.
- [vuex](https://github.com/vuejs/vuex): Vue.js๋ฅผ ์ํ ์ค์ ์ง์ค์ ์ํ ๊ด๋ฆฌ ๋ผ์ด๋ธ๋ฌ๋ฆฌ์๋๋ค.
- [vue-router](https://github.com/vuejs/vue-router-next): Vue.js SPA๋ฅผ ์ํ ๊ณต์ ๋ผ์ฐํฐ์๋๋ค.
- [axios](https://github.com/axios/axios):  HTTP ํด๋ผ์ด์ธํธ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ก, OMDb API๋ฅผ ํตํด ์ํ ์ ๋ณด๋ฅผ ์์ฒญํ๊ธฐ ์ํด ์ฌ์ฉํฉ๋๋ค.
- [lodash](https://github.com/lodash/lodash): ๋ค์ํ ์ ํธ๋ฆฌํฐ ๊ธฐ๋ฅ์ ์ ๊ณตํ๋ ์๋ฐ์คํฌ๋ฆฝํธ ๋ผ์ด๋ธ๋ฌ๋ฆฌ์๋๋ค.
- [netlify-cli](https://www.npmjs.com/package/netlify-cli): Netlify ๋ช๋ น์ ์ฌ์ฉํด ๋ก์ปฌ์์ ํ๋ก์ ํธ์ ์๋ฒ๋ฆฌ์ค ํจ์๊ฐ ํต์ ํ๊ธฐ ์ํด ์ฌ์ฉํฉ๋๋ค.
- [dotenv-webpack](https://www.npmjs.com/package/dotenv-webpack): Webpack์์ dotenv๋ก ํ๊ฒฝ ๋ณ์๋ฅผ ์ค์ ํฉ๋๋ค. 
- [jest](https://github.com/facebook/jest): ํ์ด์ค๋ถ์์ ๋ง๋  ํ์คํธ ํ๋ ์์ํฌ๋ก VTU(Vue Test Utils)์์ ๊ถ์ฅํ๋ ํ์คํธ ๋ฌ๋(์คํ ํ๊ฒฝ)์๋๋ค.
- [@vue/test-utils](https://github.com/vuejs/vue-test-utils-next): Vue.js ํ๊ฒฝ์์ ๋จ์ ํ์คํธ๋ฅผ ํ๊ธฐ ์ํ ๊ณต์(Official) ๋ผ์ด๋ธ๋ฌ๋ฆฌ ์๋๋ค.
- [vue-jest](https://github.com/vuejs/vue-test-utils-next): Vue ํ์ผ์ Jest๊ฐ ์คํํ  ์ ์๋ ์๋ฐ์คํฌ๋ฆฝํธ๋ก ์ปดํ์ผํฉ๋๋ค.
- [babel-jest](https://github.com/babel/babel-jest): JS ํ์ผ์ Jest๊ฐ ์คํํ  ์ ์๋ ์๋ฐ์คํฌ๋ฆฝํธ๋ก ์ปดํ์ผํฉ๋๋ค.
- [cypress](https://github.com/cypress-io/cypress): ๋ธ๋ผ์ฐ์  ๊ธฐ๋ฐ์ผ๋ก ์ฝ๊ณ  ๋น ๋ฅด๊ฒ ํ์คํธํ  ์ ์๋ ํ๋ก ํธ์๋ ์ ์ฉ ํ์คํธ ๋๊ตฌ์๋๋ค.
- [eslint-plugin-cypress](https://github.com/cypress-io/eslint-plugin-cypress): Cypress ํ์คํธ ํ๊ฒฝ์ ์ํ ESLint ํ๋ฌ๊ทธ์ธ์๋๋ค.

### ํจํค์ง ์ค์น ์ฃผ์์ฌํญ

Vue 3๋ฒ์ ์ ๋์ํ๋ ํ๋ฌ๊ทธ์ธ๋ค๊ณผ ์ต์ ์ ๋ถํธ์คํธ๋ฉ 5๋ฒ์  ํจํค์ง๋ฅผ ์ค์นํ์ธ์!

- `npm i bootstrap@next`
- `npm i vuex@next`
- `npm i vue-router@4`
- `npm i @vue/test-utils@next`
- `npm i vue-jest@next`

## ๐ Refs
### HTML Entities in numeric order
http://www.evotech.net/blog/2007/04/named-html-entities-in-numeric-order/

