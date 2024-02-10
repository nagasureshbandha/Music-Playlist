import {AiOutlineDelete} from 'react-icons/ai'

import {
  MusicListItem,
  TrackInfoContainer,
  MusicTrackImage,
  NameGenreContainer,
  Name,
  Genre,
  DurationDeleteConatiner,
  Duration,
  DeleteButton,
} from './styledComponents'

const MusicItem = props => {
  const {musicItemDetails, onClickDeleteTrack} = props
  const {id, imageUrl, name, genre, duration} = musicItemDetails

  const onDeleteTrack = () => {
    onClickDeleteTrack(id)
  }

  return (
    <MusicListItem>
      <TrackInfoContainer>
        <MusicTrackImage src={imageUrl} alt="track" />
        <NameGenreContainer>
          <Name>{name}</Name>
          <Genre>{genre}</Genre>
        </NameGenreContainer>
        <DurationDeleteConatiner>
          <Duration>{duration}</Duration>
          <DeleteButton
            type="button"
            onClick={onDeleteTrack}
            data-testid="delete"
          >
            <AiOutlineDelete size={25} />
          </DeleteButton>
        </DurationDeleteConatiner>
      </TrackInfoContainer>
    </MusicListItem>
  )
}

export default MusicItem
