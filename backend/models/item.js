import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  album: {
    type: Object,
    required: true,
  },
  artists: {
    type: [Object],
    required: true,
  },
  available_markets: {
    type: [String],
    required: true,
  },
  disc_number: {
    type: Number,
    required: true,
  },
  duration_ms: {
    type: Number,
    required: true,
  },
  explicit: {
    type: Boolean,
    required: true,
  },
  external_ids: {
    type: Object,
    required: true,
  },
  external_urls: {
    type: Object,
    required: true,
  },
  href: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  is_local: {
    type: Boolean,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  popularity: {
    type: Number,
    required: true,
  },
  preview_url: {
    type: String,
    required: true,
  },
  track_number: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  uri: {
    type: String,
    required: true,
  },
});

const Item = mongoose.model("Item", itemSchema);

export default Item;
