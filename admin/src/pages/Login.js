import React, { useState } from "react";
import { Button, Card, Input, Icon, Spin } from "antd";
import "../styles/login.css";
function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  function handleLogin(){
    setIsLoading(true);
    setTimeout(() => {
        setIsLoading(false);
    }, 1000);
  }
  return (
    <section className="login-wrapper">
      <Spin tip="Loading..." spinning={isLoading}>
        <Card title="GolderBrother Blog System">
          <Input
            id="username"
            size="large"
            className="login-item"
            placeholder="please enter your username"
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            onChange={e => setUsername(e.target.value)}
          />
          <Input
            id="password"
            size="large"
            className="login-item"
            placeholder="please enter your password"
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            onChange={e => setPassword(e.target.value)}
          />
          <Button className="login-item" type="primary" size="large" block onClick={handleLogin}>登录</Button>
        </Card>
      </Spin>
    </section>
  );
}
export default Login;
