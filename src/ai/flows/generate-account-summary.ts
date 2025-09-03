'use server';

/**
 * @fileOverview Generates a short summary of the key indicators contributing to the risk score of a social media account.
 *
 * - generateAccountSummary - A function that generates the account summary.
 * - GenerateAccountSummaryInput - The input type for the generateAccountSummary function.
 * - GenerateAccountSummaryOutput - The return type for the generateAccountSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAccountSummaryInputSchema = z.object({
  riskScore: z.number().describe('The risk score of the account (0-100).'),
  flaggedIndicators: z
    .array(z.string())
    .describe('A list of key indicators that contribute to the risk score.'),
});

export type GenerateAccountSummaryInput = z.infer<
  typeof GenerateAccountSummaryInputSchema
>;

const GenerateAccountSummaryOutputSchema = z.object({
  summary: z.string().describe('A short summary of the key risk indicators.'),
});

export type GenerateAccountSummaryOutput = z.infer<
  typeof GenerateAccountSummaryOutputSchema
>;

export async function generateAccountSummary(
  input: GenerateAccountSummaryInput
): Promise<GenerateAccountSummaryOutput> {
  return generateAccountSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAccountSummaryPrompt',
  input: {schema: GenerateAccountSummaryInputSchema},
  output: {schema: GenerateAccountSummaryOutputSchema},
  prompt: `You are an AI assistant that summarizes the risk indicators of a social media account.

Given the following risk score and flagged indicators, generate a concise one-sentence summary explaining the main reasons for the risk score.

Risk Score: {{riskScore}}
Flagged Indicators: {{#each flaggedIndicators}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}

Summary: `,
});

const generateAccountSummaryFlow = ai.defineFlow(
  {
    name: 'generateAccountSummaryFlow',
    inputSchema: GenerateAccountSummaryInputSchema,
    outputSchema: GenerateAccountSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return {
      ...output,
      progress: 'Generated a short summary of the key indicators contributing to the risk score.',
    };
  }
);
