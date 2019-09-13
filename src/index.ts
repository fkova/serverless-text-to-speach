import { default as newPostHandler } from './handlers/new-post-handler';
import { default as getPostHandler } from './handlers/get-post-handler';
import { default as audioConverHandler } from './handlers/audio-convert-handler';

export const newPostLambda = newPostHandler;
export const getPostLambda = getPostHandler;
export const audioConverterLambda = audioConverHandler;
