import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true },
  genre_ids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Genre' }],
  published_year: { type: Number },
  isbn: { type: String, unique: true },
  available_copies: { type: Number, default: 1 }
}, { timestamps: true });

export default mongoose.models.Book || mongoose.model('Book', BookSchema);
