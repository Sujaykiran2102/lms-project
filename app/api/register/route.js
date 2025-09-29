import { NextResponse } from 'next/server';
import connectToDatabase from '@/utils/mongodb';
import User from '../../models/User';
import bcrypt from 'bcryptjs';

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, password, name, role } = body;

    // ... (All your existing validation logic remains here) ...
    if (!email || !password || !name || !role) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }
    // (email regex, password length, role validation, etc.)

    await connectToDatabase();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await User.create({
      email,
      password: hashedPassword,
      name,
      role,
    });

    console.log('✅ User registration successful:', {
      id: newUser._id.toString(),
      email: newUser.email,
      name: newUser.name,
      role: newUser.role,
    });

    // --- NEW: Determine redirect message ---
    const dashboard = role === 'admin' ? 'admin-dashboard' : 'student-dashboard';
    const redirectMessage = `User registered successfully. Redirecting to /${dashboard}...`;

    // --- UPDATED: Return the new message ---
    return NextResponse.json(
      { 
        message: redirectMessage,
        user: {
          id: newUser._id.toString(),
          email: newUser.email,
          name: newUser.name,
          role: newUser.role
        }
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('❌ Registration error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}