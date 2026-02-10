import dotenv from 'dotenv';
dotenv.config();
import fetch from 'node-fetch';

export interface AIFailureAnalysis {
  category: string;
  rootCause: string;
  suggestedFix: string;
  confidence: number;
}

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent';

export async function analyzeTestFailure(
  testName: string,
  errorMessage: string,
  stack?: string
): Promise<AIFailureAnalysis> {
  if (!GEMINI_API_KEY) {
    return {
      category: 'Unknown',
      rootCause: 'Gemini API key not configured',
      suggestedFix: 'Add GEMINI_API_KEY to environment variables',
      confidence: 0
    };
  }

  const prompt = `Analyze the following Playwright test failure and return ONLY valid JSON with the following fields: category, rootCause, suggestedFix, confidence (0-1).\nTest Name: ${testName}\nError Message: ${errorMessage}\nStack Trace: ${stack ?? 'N/A'}`;

  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text: prompt }
            ]
          }
        ]
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API error:', errorText);
      return {
        category: 'AIError',
        rootCause: 'Gemini API call failed',
        suggestedFix: 'Check Gemini API key or network',
        confidence: 0
      };
    }

    const data: any = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '{}';
    let result;
    try {
      result = JSON.parse(text);
    } catch (jsonErr) {
      return {
        category: 'AIError',
        rootCause: 'Gemini response was not valid JSON',
        suggestedFix: 'Check prompt or Gemini output',
        confidence: 0
      };
    }
    return {
      category: result.category ?? 'Unknown',
      rootCause: result.rootCause ?? 'Unknown',
      suggestedFix: result.suggestedFix ?? 'Unknown',
      confidence: Number(result.confidence) || 0.5
    };
  } catch (err) {
    console.error('Gemini analysis error:', err);
    return {
      category: 'AIError',
      rootCause: 'Gemini analysis failed',
      suggestedFix: 'Check Gemini API configuration or network',
      confidence: 0
    };
  }
}
