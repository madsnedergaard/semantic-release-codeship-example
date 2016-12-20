# semantic-release-codeship-example

[ ![Codeship Status for Merott/semantic-release-codeship-example](https://codeship.com/projects/ab874470-be1a-0133-da64-7e9e0e2677da/status?branch=master)](https://codeship.com/projects/136813)

An example of using [`semantic-release`](https://github.com/semantic-release/semantic-release)
to automatically publish a module from [Codeship](https://codeship.com) to NPM.

# Set up

_Note: if you want to try this for yourself, you must first clone/fork the
project, and use a different `name` in `package.json`._


1. Install the dependencies:

  ```
  npm install -g semantic-release-cli
  npm install
  ```

2. Create a Codeship project on [codeship.com](https://codeship.com). Simply
link to the Github project, and configure with:

   Setup Commands:

   ```
   nvm install 5
   nvm use 5
   npm install
   ```

   Test Pipelines:

   ```
   npm test
   ```

3. Back to the command line, set up `semantic-release`:

   ```
   semantic-release-cli setup
   # select "Other (prints tokens)" when prompted for the CI you are using
   ```

   <p align="center">
     <img src="images/semantic-release-cli_setup.png?raw=true" alt="semantic-release-cli setup shell" />
   </p>

4. Copy the `GH_TOKEN` and `NPM_TOKEN` values and add them as environment
variables to your Codeship project settings.

5. In addition to above, add a `CI=true` environment variable to the Codeship
project.

6. From your Project Settings on Codeship, add a new deployment pipeline:

   - When branch is exactly `master`
   - Using a Custom Script: `npm run semantic-release`

7. Commit and push to your git `master` branch, then simply wait!


We're also making use of the `generateNotes` plugin to automatically generate
release notes: https://github.com/Merott/semantic-release-codeship-example/releases

## Additional steps when setting up yourself (without cloning this repository)

1. Install Codeship-condition plugin

```
npm install -D @semantic-release/condition-codeship
```

2. Setup Codeship-condition plugin configuration

Add the following code in package.json:

```
"release": {
  "verifyConditions": [
    "./node_modules/@semantic-release/condition-codeship"
  ]
},
```

3. Now commit and push to your git `master` branch, and then it should work.
