import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Link from '../../components/Link/Link';
import "./Login.scss"

export default function Login() {
  return (
    <div className="login">
      <h1>Login</h1>
      <div className="forms">
        <Input label="E-mail" placeholder="Type your username" name="email" />
        <Input label="Password" placeholder="Type your password" type="password" name="password" />
        <a href=""></a>
      </div>
      <Button className="buttonlogin" text="Login" type="login" />
      <div className="socialmedia">
        <a href=""></a>
        <div className="redesSociais">
          <Link href="www.facebook.com.br"><i class="fab fa-facebook-square"></i></Link>
          <Link href="www.twitter.com"><i class="fab fa-twitter-square"></i></Link>
          <Link href="www.gmail.com"><i class="fab fa-google"></i></Link>
        </div>
      </div>
    </div>
  )
}

