import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Container, MainContent, Header, Form, Row } from './style';
import { SideBar, SearchModal } from '../../components';
import { CoverBg, ProfileIcon } from '../../assets';

export default function Profile() {

  return (
    <Container>
      <SideBar />
      <MainContent>
      <SearchModal />

        <Header>
          <Image src={CoverBg} alt="Cover" fill/>
          <div className="profile-pic">
            <Image src={ProfileIcon} alt="Profile" width={80} height={80} />
          </div>
        </Header>
        <Form>
          <Row>
            <label>
              * Nome de Usuário
              <input placeholder="Digite o nome de usuário" />
            </label>
            <label>
              * E-mail
              <input placeholder="Digite o seu e-mail" />
              <div><input type="checkbox" /> Desejo mostrar no meu perfil</div>
            </label>
            <label>
              * Telefone
              <input placeholder="Digite o seu telefone" />
              <div><input type="checkbox" /> Desejo mostrar no meu perfil</div>
            </label>
            <label>
              Instagram
              <input placeholder="Digite o seu @ do instagram" />
              <div><input type="checkbox" /> Desejo mostrar no meu perfil</div>
            </label>
          </Row>
          <textarea placeholder="Insira uma breve saudação"></textarea>
          <div className="actions">
            <button className="delete">❌ Apagar Conta</button>
            <button className="save">✅ Salvar alterações</button>
          </div>
        </Form>
      </MainContent>
    </Container>
  );
}
