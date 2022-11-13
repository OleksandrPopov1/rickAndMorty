import {IEpisode} from "./episode.interface";

interface IInfo {
  count: number,
  pages: number,
  next: string,
  prev: string
}

export interface IPaginatedData {
  info: IInfo,
  results: IEpisode[]
}
