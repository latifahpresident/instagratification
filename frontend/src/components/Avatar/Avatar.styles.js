import styled from 'styled-components';

export const AvatarContainer = styled.div`
  width: 66.5px;
  height: 66.5px;
  border: solid 3px transparent;
  border-radius: 50px;
  background-image: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  display: flex;
  justify-content: center;
  align-items: center;
    .avatarImage {
        height: 52px;
        width: 52px;
        border: 3px solid white;
    }
    /* .small {
      height: 31px;
      width: 31x;
      display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1.2rem;
    height: 30px;
    width: 30px;
    margin-bottom: 1rem;
    }
    .large {
      height: 56px;
      width: 56px;
    } */

    .cardAvatar {
      margin-left: .5rem;
    }
`;