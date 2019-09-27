GREEN='\033[1;32m'
CLEAR='\033[0m'

echo "${GREEN}⭐ Starting Setup ⭐${CLEAR}"

# Install dependencies
echo "${GREEN}Installing dependencies...${CLEAR}"
npm i styled-components styled-native-kit react-navigation@3.12.1 i18n-js object-key-path-transformer moment axios redux redux-saga react-redux redux-saga-requests redux-saga-requests-axios redux-persist reselect ts-optchain color react-native-gesture-handler react-native-iphone-x-helper react-navigation-transitions validator react-native-inappbrowser-reborn react-native-safari-view react-native-linear-gradient react-native-svg react-native-vector-icons
echo "${GREEN}✅ Dependencies installed!${CLEAR}"

# Install dev dependencies
echo "${GREEN}Installing dev dependencies...${CLEAR}"
npm i -D react-native-svg-transformer @types/react @types/react-native @types/styled-components @types/react-navigation typescript
# Linter dependencies (WIP) - Conflicts with prettier auto formatting
# npm i -D @types/react-redux eslint eslint-config-airbnb eslint-config-prettier @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-native
echo "${GREEN}✅ Dev Dependencies installed!${CLEAR}"

# Installing peer dependencies (see above WIP)
# echo "${GREEN}Installing peer dependencies...${CLEAR}"
# npx install-peerdeps --dev eslint-config-airbnb
# echo "${GREEN}✅ Peer Dependencies installed!${CLEAR}"

# Link native libraries
echo "${GREEN}Linking native libraries...${CLEAR}"
react-native link react-native-gesture-handler
react-native link react-native-vector-icons
echo "${GREEN}✅ Native libraries linked!${CLEAR}"

# Install pods
echo "${GREEN}Installing pods...${CLEAR}"
(cd ios && pod install)
echo "${GREEN}✅ Pods installed!${CLEAR}"

# Install pastries
echo "${GREEN}Installing pastries...${CLEAR}"
npm i -g pastry-cli
cd src && svn export https://github.com/RedmindAB/pastries/trunk/react-native pastries
echo "${GREEN}✅ Pastries installed!${CLEAR}"


# Setup config files
echo "${GREEN}Setting up config files...${CLEAR}"
# Copy files
cp -R -L MOVE_TO_PARENT_DIR/* ../

# Rename files
mv ../prettierrc ../.prettierrc
mv ../eslintrc.json ../.eslintrc.json

# Remove files
rm -rf MOVE_TO_PARENT_DIR
rm -rf assets/svg/REMOVE_ME.ts
rm -rf ../.prettierrc.js
rm -rf ../.eslintrc.js
rm -rf README.md
rm -rf setup.sh
rm -rf package-lock.json
echo "${GREEN}✅ Setup config files!${CLEAR}"

echo "${GREEN}🎉 SETUP COMPLETE! 🎉"