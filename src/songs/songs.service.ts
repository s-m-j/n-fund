import { Injectable, Inject } from '@nestjs/common';
import { Connection } from 'src/common/constants/connection';

@Injectable()
export class SongsService {
  constructor(
    @Inject('CONNECTION')
    connection: Connection,
  ) {
    console.log('connection string', connection.CONNECTION_STRING);
  }

  // local db
  // local array
  private readonly songs = [];

  create(song) {
    // Save the song in the database
    this.songs.push(song);
    return this.songs;
  }

  findAll() {
    // fetch the songs from the db
    // Errors comes while fetching the data from DB
    throw new Error('Error in Db whil fetching record');
    return this.songs;
  }
}
