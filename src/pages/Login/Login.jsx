import Input from '../../components/Input/Input';

export default function Login() {
  return (
    <div className="login">
      <h1>Login</h1>
      <Input label="E-mail" placeholder="Type your username" name="email"/>
      <Input label="Password" placeholder="Type your password" type="password" name="password"/>
      <a href=""></a>
    </div>
  )
}

