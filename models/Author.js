import mongoose from 'mongoose';

const AuthorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  birth_year: { type: Number },
  nationality: { type: String }
});

export default mongoose.models.Author || mongoose.model('Author', AuthorSchema);
