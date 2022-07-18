import { setupWorker, rest } from "msw";
import { mockMovies } from "./handler";
export const worker = setupWorker(rest.get("/movies/:titleId", mockMovies));
worker.start();
