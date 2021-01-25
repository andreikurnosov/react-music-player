import React from 'react'
import LibrarySong from './LibrarySong'

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
      <h2>Library</h2>
      {songs.map((song) => (
        <LibrarySong
          song={song}
          songs={songs}
          setCurrentSong={setCurrentSong}
          id={song.id}
          isPlaying={isPlaying}
          key={song.id}
          audioRef={audioRef}
          setSongs={setSongs}
        />
      ))}
      <div className="library-songs"></div>
    </div>
  )
}

export default Library
