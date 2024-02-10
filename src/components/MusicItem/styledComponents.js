import styled from 'styled-components'

export const MusicListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
`

export const TrackInfoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 500px;
`

export const MusicTrackImage = styled.img`
  height: 90px;
  width: 140px;
  margin-right: 20px;
`

export const NameGenreContainer = styled.div`
  display: flex;
flex-direction:column;
`

export const Name = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 500;
  color: #fff;
`

export const Genre = styled.p`
  color: #3b82f6;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
`

export const DurationDeleteConatiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Duration = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: bold;
  margin-right: 50px;
  color: #fff;
`

export const DeleteButton = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: none;
  color: #fff;
`
