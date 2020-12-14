import styled from 'styled-components';
import { grayBorder} from './../../global-styles/global.styles';

export const FollowersSection = styled.section`
    border: 1px solid ${grayBorder};
    margin-top: .2rem;
    border-radius: 3px;
    min-height: 110px;
    max-height: 110px;
`;

export const FollowersList = styled.ul`
    /* border: 1px solid green; */
    padding: 0 0 0 1rem;
    display: flex;
    justify-content: space-between;
    overflow-x: scroll;
    width: auto;

`;

export const FollowesListItem = styled.li`
    /* border: 1px solid orange; */
    list-style-type: none;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-right: .5rem;
    .avatarUsername {
        font-size: 0.79rem;
        margin: 0;
    }
`;

export const AvatarContainer = styled.div`
  width: 62.5px;
  height: 62.5px;
  border: solid 3px transparent;
  border-radius: 50px;
  background-image: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%) ;
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
`;