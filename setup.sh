echo "STARTING SETUP"

# Install dependenciess
npm i styled-components styled-native-kit react-navigation i18n-js object-key-path-transformer moment axios redux redux-saga react-redux redux-saga-requests redux-saga-requests-axios redux-persist reselect ts-optchain color react-native-gesture-handler react-native-iphone-x-helper react-navigation-transitions validator react-native-inapp-browser-reborn react-native-safari-view react-native-linear-gradient react-native-svg

# Install dev dependencies
npm i -D react-native-svg-transformer @types/styled-components @types/react-navigation @types/react-redux

# Install pods
cd ios && pod install; cd ..

# Install pastries
npm i -g pastry-cli
cd src && svn export https://github.com/RedmindAB/pastries/trunk/react-native pastries

echo "SETUP COMPLETE"