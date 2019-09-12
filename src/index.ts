import { default as newPostHandler } from './handlers/new-post-handler';
import { default as audioConverHandler } from './handlers/audio-convert-handler';

export const newPostLambda = newPostHandler;
export const audioConverterLambda = audioConverHandler;
