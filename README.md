## Basic form with vite

Basic form made from vanilla javascript build with vite. Unit testing with vitest.

**Packages:**
```
vite - used for building (npm run vite)
vitest - used for unit test (npm run vitest)
c8 - used for coverage in unit test (npm run vitest --coverage)
```

**Project setup:**
```
npm create vite
npm i --save-dev vite
npm i --save-dev vitest
npm i --save-dev c8
```

**Vite config:**
```
export default defineConfig({
  test: {
      globals: true, // define all testing variables
      coverage: {
          reporter: [ "text", "html" ] // define coverage reporter type
      }
  }
})
```