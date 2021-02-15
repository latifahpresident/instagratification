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
    .cardAvatar {
      margin-left: .5rem;
    }
`;

export const BadgeContainer = styled.div`
  border: 1px solid transparent;
  width: 67.5px;
  height: 67.5px;
  
  .avatarImage {
    width: 66.5px;
  height: 66.5px;
        border: 3px solid white;
    }
`;