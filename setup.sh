GREEN='\033[1;32m'
CLEAR='\033[0m'

echo "${GREEN}⭐ Starting Setup ⭐${CLEAR}"

# Install dependencies
npm i styled-components styled-native-kit react-navigation i18n-js object-key-path-transformer moment axios redux redux-saga react-redux redux-saga-requests redux-saga-requests-axios redux-persist reselect ts-optchain color react-native-gesture-handler react-native-iphone-x-helper react-navigation-transitions validator react-native-inapplsbrowser-reborn react-native-safari-view react-native-linear-gradient react-native-svg
echo "${GREEN}✅ Dependencies installed!${CLEAR}"

# Install dev dependencies
npm i -D react-native-svg-transformer @types/styled-components @types/react-navigation @types/react-redux
echo "${GREEN}✅ Dev Dependencies installed!${CLEAR}"

# Install pods
(cd ios && pod install)
echo "${GREEN}✅ Pods installed!${CLEAR}"

# Install pastries
npm i -g pastry-cli
cd src && svn export https://github.com/RedmindAB/pastries/trunk/react-native pastries
echo "${GREEN}✅ Pastries installed!${CLEAR}"


# Move folders to parent directory
cp -R -L MOVE_TO_PARENT_DIR/* ../
rm -rf MOVE_TO_PARENT_DIR
echo "${GREEN}✅ Moved config files to root dir!${CLEAR}"

echo "${GREEN}🎉 SETUP COMPLETE! 🎉"