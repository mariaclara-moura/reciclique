import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  font-family: 'Montserrat', sans-serif;
  background-color: #FFF;
`;

export const SideContainer = styled.aside`
  width: 260px;
  background-color: #9bb58d;
  color: #fff;
  position: relative;
  .bg {
    position: absolute;
    inset: 0;
    opacity: 0.1;
  }
  .menu {
    padding: 1rem;
    position: relative;
    z-index: 1;
    h4 {
      margin-bottom: 1rem;
    }
    ul {
      list-style: none;
      padding: 0;
      li {
        margin: 0.5rem 0;
      }
    }
  }
  .profile {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    position: absolute;
    bottom: 50px;
    left: 10px;
    right: 10px;
    background: #fff;
    color: #000;
    border-radius: 8px;
    padding: 0.5rem;
    img {
      border-radius: 50%;
    }
    div {
      p {
        margin: 0;
        font-weight: bold;
      }
      span {
        font-size: 0.8rem;
      }
    }
  }
  .logout {
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
    background: none;
    color: #fff;
    border: none;
    cursor: pointer;
  }
`;

export const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  position: relative;
  height: 120px;
  .profile-pic {
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid #fff;
    width: 60px;
    height: 60px;
  }
`;

export const Form = styled.form`
  margin-top: 60px;
  padding: 1rem;
  textarea {
    width: 100%;
    margin-top: 1rem;
    height: 80px;
    resize: none;
  }
  .actions {
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
    .delete {
      background: #f66;
      color: #fff;
      border: none;
      padding: 0.5rem 1rem;
      cursor: pointer;
    }
    .save {
      background: #9bb58d;
      color: #fff;
      border: none;
      padding: 0.5rem 1rem;
      cursor: pointer;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  label {
    flex: 1;
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
    input {
      margin-top: 0.2rem;
      padding: 0.3rem;
    }
    div {
      margin-top: 0.2rem;
      font-size: 0.8rem;
    }
  }
`;
