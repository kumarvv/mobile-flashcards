# mobile-flashcards
Mobile-FlashCards is a mobile application to manage your flashcards library. This applications runs natively in iOS and Android platform with following features: 
- Add or remove a deck 
- Add any number of flashcards to a deck 
- Take one or more quizzes on deck flashcards
- Review history of past quizzes

## Requirements 
- Node and NPM are required and can be downloaded [here](https://nodejs.org/en/download/)
- Yarn is required for running the app with mobile simulators or mobile devices 
```$bash
npm install -g yarn
```
- If you are using Simulators, install [iOS Simulator](https://developer.apple.com/library/content/documentation/IDEs/Conceptual/iOS_Simulator_Guide/GettingStartedwithiOSSimulator/GettingStartedwithiOSSimulator.html) or [Android Emulator](https://developer.android.com/studio/run/emulator.html)
- Install Expo in your simulators and mobile devices: [Expo on Google Play (Android)](https://play.google.com/store/apps/details?id=host.exp.exponent) or [Expo on the App Store (iOS)](https://itunes.apple.com/us/app/expo-client/id982107779)
 

## Installation
1. clone the readable repo and install: 
```
git clone https://github.com/kumarvv/mobile-flashcards.git
cd mobile-flashcards
yarn install
```

## Run the Application 
1. Start the app using yarn: 
```$bash 
yarn start
```
2. Follow the instructions to open the app in iOS or Android simulators / devices. 

## Dependencies
This app uses following external libraries: 
- react 
- react-native 
- react-navigation 
- redux and react-redux
- expo 
- sort-by
- create-react-native-app (this project was bootstrapped with Create React Native App. You can find more information on how to perform common tasks here.)

## License
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <https://unlicense.org>
