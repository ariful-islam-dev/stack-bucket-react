import {  createStore } from "easy-peasy";
import BucketModel from './bucketModel';
import ItemModel from './bucketModel';
import SuggestionModel from "./suggestionModel";

const store = createStore({
    buckets: BucketModel,
    shppingItems: ItemModel,
    suggestions: SuggestionModel,
    
  });

  export default store
  