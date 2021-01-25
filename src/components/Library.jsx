import React from 'react'
import LibrarySong from './LibrarySong'

const Library = ({ songs }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      {songs.map((song) => (
        <LibrarySong song={song} />
      ))}
      <div className="library-songs"></div>
    </div>
  )
}

export default Library
