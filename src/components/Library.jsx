import React from 'react'
import LibrarySong from './LibrarySong'

const Library = ({ songs, setCurrentSong }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      {songs.map((song) => (
        <LibrarySong
          song={song}
          songs={songs}
          setCurrentSong={setCurrentSong}
          id={song.id}
          key={song.id}
        />
      ))}
      <div className="library-songs"></div>
    </div>
  )
}

export default Library
