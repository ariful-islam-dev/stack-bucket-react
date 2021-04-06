import {  createStore } from "easy-peasy";
import BucketModel from './bucketModel';
import ItemModel from './bucketModel';

const store = createStore({
    buckets: BucketModel,
    shppingItems: ItemModel
    
  });

  export default store
  