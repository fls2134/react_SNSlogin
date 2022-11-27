import './App.css';
import logoKakao from './logo/kakao.svg'
import { REST_API_KEY, REDIRECT_URI } from './KakaoSocialLogin';

function App() {  
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const kakao = () => {
    window.location.href = KAKAO_AUTH_URL;
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="Social-Kakao" onClick={kakao}>
          <img src={logoKakao} alt="logo"/>
        </div>
      </header>
    </div>
  );
}

export default App;
