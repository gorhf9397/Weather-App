# Weather-App 현재위치 날씨 프로젝트
# information
<img src="https://user-images.githubusercontent.com/108771927/216899008-b0afbc2c-b4aa-4487-94c3-c847a1dbc41a.png" width="500" height="350">
<h4>Bridge 들을 통해서 코드가 운영체제와 통신을 할 수 있도록 하는 인프라 시설</h4>
<h4>Java 와 Xcode 를 통해 인프라를 가져와서 이것들을 apk 와 ipa 안에 넣어줌</h4>
<img src="https://user-images.githubusercontent.com/108771927/216899079-33f27116-bb6e-435f-ae18-5dabfd788910.png" width="500" height="350">
<h4>Expo : 작성한 코드의 결과를 앱에서 즉시확인</h4>
<h4>Java, Xcode 설치할필요x</h4>
<h4>npm install --global expo-cli</h4>
<h4>brew install watchman (mac용)</h4>
<h4>앱스토어 Expo Go 다운로드</h4>
<h4>안드로이드 Expo 다운로드</h4>
<img src="https://user-images.githubusercontent.com/108771927/216899141-c79d7770-1b30-4bdf-98e4-7488be203616.png" width="500" height="350">

ReactNative 코드를 사용 => 메세지 전달(Bridge 를 통해) =>JavaAndroid , iOS 코드로 번역

Native, Bridge 코드는 작성하지않고 오로지 JavaScript 부분만 작성
Event 가 발생 iOS,Android Bridge를통해 메세지 전달 => 
ReactNative가 JSON 메세지 생성 => JavaScript에 메세지 전달

JavaScript 는 운영체제를 상대로 메세지를 주고받기 위한 레이어

하지만 모든 인프라는 필요함 Android-Java, iOS - Objective-C , Swift 로 만들어짐

# 개발환경 오류
zsh: command not found: expo 오류
npm i expo 로 설치 했을때 npm bin -g 명령어의 경로 가 글로벌변수로 나오지않음 <p>
npm install --global expo-cli 로 설치 하려 했으나 Error: EACCES: permission denied, 라는 error<p>
자신의 계정 홈 경로에 npm global 설치 패키지 디렉토리를 만들고 글로벌 설치시에 해당 경로로 패키지가 설치 되도록 하는 방법으로<p>
mkdir ~/.npm-global<p>
npm config set prefix '~/.npm-global'<p>
디렉토리 추가 해주고<p>
vi ~/.profile<p>
export PATH=~/.npm-global/bin:$PATH 환경변수 설정추가<p>
그다음 npm bin -g 확인했으나<p>
npm ERR! bin (not in PATH env variable) 에러뜸<p>
stack-overfloew 발췌 <p>
https://stackoverflow.com/questions/35540692/why-wont-my-npm-package-commands-work<p>
export PATH=$PATH:`npm bin -g` 명령어 추가로 해결<p>
