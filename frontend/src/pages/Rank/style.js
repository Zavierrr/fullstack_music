import styled from 'styled-components';
import style from '../../assets/global-style';

// Props中的globalRank和tracks.length均代表是否为全球榜

export const Container = styled.div`
  position: fixed;
  top: 4.5rem;
  bottom: ${props => props.play > 0 ? "60px" : 0};
  width: 100%;
  .offical,.global {
    margin: 0.5rem 0.25rem;
    padding-top: 0.75rem;
    font-weight: 700;
    font-size: ${style["font-size-m"]};
    color: ${style["font-color-desc"]};
  }
`

export const List = styled.ul`
  margin-top: 0.5rem;
  padding: 0 0.25rem;
  display: ${props => props.globalRank ? "flex" : ""};
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  background: ${style["background-color"]};
  &::after{
    content:"";
    display:block;
    width: 32vw;
  }
`
export const ListItem = styled.li`
  display: ${props => props.tracks.length ? "flex" : ""};
  padding: 3px 0;
  border-bottom: 1px solid ${style["border-color"]};
  .img_wrapper{
    width:  ${props => props.tracks.length ? "27vw" : "32vw"};
    height: ${props => props.tracks.length ? "27vw" : "32vw"};
    border-radius: 3px;
    position: relative;
    .decorate {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 1.75rem;
      border-radius: 3px;
      background: linear-gradient(hsla(0,0%,100%,0),hsla(0,0%,43%,.4));
    }
    img{
      width: 100%;
      height: 100%;
      border-radius: 3px;
    }
    .update_frequecy{
      position: absolute;
      left: 7px;
      bottom: 7px;
      font-size: ${style["font-size-ss"]};
      color: ${style["font-color-light"]};
    }
  }
`
export const SongList = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: .5rem .5rem;
  >li{
    font-size: ${style["font-size-s"]};
    color: grey;
  }
`