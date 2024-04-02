This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

### Step 3: Setup Local, Dev, Prod etc environment, builds and flavour

- The way it works in android is by defining builTypes and ProductFlavour. BuildTypes is essentially debug and release bundle. Whereas ProductFlavour has two dimensions.
- One dimension is you environment like local, dev, qa, test, prod etc. and other is optional but useful which is app flavour. Suppose you want to share codebase for riders and drivers app inside the same android app codebase. You can enable flavours and write conditional code which gets build and compiled based on it. - It is also useful in hiding features for one kind of customers.

That being said, to setup buildFlavour we need to follow these steps:

- Define your environment files like .env.local, .env.dev, .env.prod files with keys
- Update app/build.gradle file with following code

```
project.ext.envConfigFiles = [
        localdebug:".env.local",
        localrelease :".env.local",
        devdebug: ".env.dev",
        devrelease: ".env.dev",
        qadebug:'.env.qa',
        qarelease:'.env.qa',
        proddebug:'.env.prod',
        prodrelease:'.env.prod',
]

apply from: project(':react-native-config').projectDir.getPath() + "/dotenv.gradle"
```

Note: Important thing here is to match the buildFlavour name with the correct .env. file.

- Next, add the following line in the same file in defaultConfig block

```
 defaultConfig {
        resValue "string", "build_config_package", "com.mmadmin"
 }
```

- Now, you can access your variables like Config.XYZ.
  - You can also access them build.gradle file ex. `project.env.get("VERSION_CODE").toInteger()`
  - in android files ex. `URL url = new URL(BuildConfig.API_URL);`
  - in ios files ex. `// import header
#import "ReactNativeConfig.h"
// then read individual key like:
NSString *apiUrl = [ReactNativeConfig envFor:@"API_URL"];`
