'use server';

/**
 * @fileOverview Generates a risk analysis report for a social media account.
 *
 * - generateAccountRiskAnalysis - A function that generates the risk analysis report.
 * - GenerateAccountRiskAnalysisInput - The input type for the generateAccountRiskAnalysis function.
 * - GenerateAccountRiskAnalysisOutput - The return type for the generateAccountRiskAnalysis function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAccountRiskAnalysisInputSchema = z.object({
  accountIdentifier: z
    .string()
    .describe('The username or profile URL of the social media account.'),
  platform: z
    .string()
    .describe(
      'The social media platform of the account (e.g., Instagram, Twitter, Facebook, LinkedIn, TikTok).'
    ),
});
export type GenerateAccountRiskAnalysisInput = z.infer<
  typeof GenerateAccountRiskAnalysisInputSchema
>;

const GenerateAccountRiskAnalysisOutputSchema = z.object({
  riskScore: z
    .number()
    .describe(
      'A risk score from 0-100 indicating the likelihood of the account being fake or malicious.'
    ),
  analysisReport: z
    .string()
    .describe(
      'A detailed report outlining the factors contributing to the risk score.'
    ),
});
export type GenerateAccountRiskAnalysisOutput = z.infer<
  typeof GenerateAccountRiskAnalysisOutputSchema
>;

export async function generateAccountRiskAnalysis(
  input: GenerateAccountRiskAnalysisInput
): Promise<GenerateAccountRiskAnalysisOutput> {
  return generateAccountRiskAnalysisFlow(input);
}

const generateAccountRiskAnalysisPrompt = ai.definePrompt({
  name: 'generateAccountRiskAnalysisPrompt',
  input: {schema: GenerateAccountRiskAnalysisInputSchema},
  output: {schema: GenerateAccountRiskAnalysisOutputSchema},
  prompt: `You are an AI assistant designed to analyze social media accounts and generate a risk analysis report.

  Based on the provided account identifier and platform, assess the likelihood of the account being fake or malicious.

  Consider factors such as profile information, activity patterns, content analysis, and network analysis.

  Generate a risk score from 0-100 and provide a detailed report outlining the factors contributing to the score.

  Account Identifier: {{{accountIdentifier}}}
  Platform: {{{platform}}}
  `,
});

const generateAccountRiskAnalysisFlow = ai.defineFlow(
  {
    name: 'generateAccountRiskAnalysisFlow',
    inputSchema: GenerateAccountRiskAnalysisInputSchema,
    outputSchema: GenerateAccountRiskAnalysisOutputSchema,
  },
  async input => {
    const {output} = await generateAccountRiskAnalysisPrompt(input);
    return output!;
  }
);
