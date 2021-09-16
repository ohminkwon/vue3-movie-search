[![Netlify Status](https://api.netlify.com/api/v1/badges/83b69c89-4474-42a7-98e0-5f341635b539/deploy-status)](https://app.netlify.com/sites/cloning-omdb-ohminkwon/deploys)

# 🎥 Vue3 Movie app

Vue3와 OMDb API를 사용하는 영화 검색 애플리케이션 예제입니다.
Vue3-webpack-template를 활용하여 프로젝트를 시작합니다.

[DEMO](https://cloning-omdb-ohminkwon.netlify.app/)

<img style="border: 2px solid orange;" src="./src/assets/example_00.png" alt="Main">

## 화면 출력 예시

검색 & 출력 예시 
<img style="border: 2px solid orange;" src="./src/assets/example_01.gif" alt="example-1">

## 📖참조 문서
- [Vue3](https://v3.ko.vuejs.org/guide/introduction.html)
- [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- [Vuex](https://next.vuex.vuejs.org/)
- [Vue Router](https://next.router.vuejs.org/installation.html)
- [Netlify](https://docs.netlify.com/)
- [Jest](https://jestjs.io/docs/getting-started)
- [Vue test utils](https://next.vue-test-utils.vuejs.org/guide/)
- [Cypress](https://docs.cypress.io/guides/overview/why-cypress)

## 🎯Main Contents
- Vuex(Store)로 중앙 집중식 데이터 처리 & 네임스페이스 관리
- SPA(Single Page Application)를 위한 Vue Router 구성 & Hash 기반 페이지 단위 개발
- OMDb API를 활용해 실제 영화 정보를 검색 & 출력
- Vue 플러그인을 생성하고 적용
- API Key가 노출되지 않도록 Netlify Functions(서버리스 함수)와 환경 변수(.env)를 사용해 백엔드를 구성하고, 로컬에서 테스트
- GitHub 저장소에 Push(업로드)하고 Netlify Hosting으로 CD(지속적인 배포)를 적용
- Jest와 VTU(Vue Test Utils)를 활용해 컴포넌트 단위 테스트 (진행중)
- Cypress를 활용해 E2E 테스트 (진행예정)

## 💡Specs
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

## 📦Packages
설치할 각 패키지(모듈)의 설치 버전이 다른 경우 사용법이 달라질 수 있습니다.
모든 패키지를 package.json 파일에 명시된 버전과 동일하게 설치하는 것을 권장합니다.
- [bootstrap](https://github.com/twbs/bootstrap): 다양하고 강력한 기능을 제공하는 UI 프레임워크입니다.
- [vuex](https://github.com/vuejs/vuex): Vue.js를 위한 중앙 집중식 상태 관리 라이브러리입니다.
- [vue-router](https://github.com/vuejs/vue-router-next): Vue.js SPA를 위한 공식 라우터입니다.
- [axios](https://github.com/axios/axios):  HTTP 클라이언트 라이브러리로, OMDb API를 통해 영화 정보를 요청하기 위해 사용합니다.
- [lodash](https://github.com/lodash/lodash): 다양한 유틸리티 기능을 제공하는 자바스크립트 라이브러리입니다.
- [netlify-cli](https://www.npmjs.com/package/netlify-cli): Netlify 명령을 사용해 로컬에서 프로젝트와 서버리스 함수가 통신하기 위해 사용합니다.
- [dotenv-webpack](https://www.npmjs.com/package/dotenv-webpack): Webpack에서 dotenv로 환경 변수를 설정합니다. 
- [jest](https://github.com/facebook/jest): 페이스북에서 만든 테스트 프레임워크로 VTU(Vue Test Utils)에서 권장하는 테스트 러너(실행 환경)입니다.
- [@vue/test-utils](https://github.com/vuejs/vue-test-utils-next): Vue.js 환경에서 단위 테스트를 하기 위한 공식(Official) 라이브러리 입니다.
- [vue-jest](https://github.com/vuejs/vue-test-utils-next): Vue 파일을 Jest가 실행할 수 있는 자바스크립트로 컴파일합니다.
- [babel-jest](https://github.com/babel/babel-jest): JS 파일을 Jest가 실행할 수 있는 자바스크립트로 컴파일합니다.
- [cypress](https://github.com/cypress-io/cypress): 브라우저 기반으로 쉽고 빠르게 테스트할 수 있는 프론트엔드 전용 테스트 도구입니다.
- [eslint-plugin-cypress](https://github.com/cypress-io/eslint-plugin-cypress): Cypress 테스트 환경을 위한 ESLint 플러그인입니다.

### 패키지 설치 주의사항

Vue 3버전에 대응하는 플러그인들과 최신의 부트스트랩 5버전 패키지를 설치하세요!

- `npm i bootstrap@next`
- `npm i vuex@next`
- `npm i vue-router@4`
- `npm i @vue/test-utils@next`
- `npm i vue-jest@next`

## 📚 Refs
### HTML Entities in numeric order
http://www.evotech.net/blog/2007/04/named-html-entities-in-numeric-order/

