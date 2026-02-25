import { NextRequest, NextResponse } from 'next/server'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Get Formbold endpoint from environment
    const formboldEndpoint = process.env.FORMBOLD_ENDPOINT
    if (!formboldEndpoint) {
      console.error('FORMBOLD_ENDPOINT not configured')
      return NextResponse.json(
        { error: 'Form submission service not configured' },
        { status: 500 }
      )
    }

    // Forward to Formbold
    const formboldResponse = await fetch(formboldEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: body.name,
        email: body.email,
        subject: body.subject,
        message: body.message,
        submittedAt: new Date().toISOString(),
      }),
    })

    if (!formboldResponse.ok) {
      console.error('Formbold error:', formboldResponse.status)
      return NextResponse.json(
        { error: 'Failed to submit form' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
