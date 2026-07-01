import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Book from '@/models/Book';

export async function GET(request) {
  try {
    await connectToDatabase();
    
    // Example: Fetch books and populate the author details
    const books = await Book.find({}).populate('author_id');
    return NextResponse.json(books, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch books' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectToDatabase();
    const body = await request.json();
    
    const newBook = await Book.create(body);
    return NextResponse.json(newBook, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create book' }, { status: 400 });
  }
}
