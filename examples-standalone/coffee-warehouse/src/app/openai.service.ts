import { Injectable } from '@angular/core';

import { AzureOpenAI } from "openai";
import type {
  ChatCompletionCreateParamsNonStreaming,
} from "openai/resources/index";

// You will need to set these environment variables or edit the following values
const apiKey = 'asd';
const endpoint = 'https://dx-hackathon-2024q3.openai.azure.com/';


// Required Azure OpenAI deployment name and API version
const apiVersion = "2024-08-01-preview";
const GPT_4o_MINI = 'gpt-4o-mini-dx-hackathon';

@Injectable({
  providedIn: 'root',
})
export class OpenAIService {
  private client: AzureOpenAI;

  constructor() {
    this.client = new AzureOpenAI({
      endpoint,
      apiKey,
      apiVersion,
      deployment: GPT_4o_MINI,
      dangerouslyAllowBrowser: true
    });
  }

  public async getAIResponse(disabilities: string[]): Promise<string> {
    const messages = this.createMessages(disabilities);

    const completion = await this.client.chat.completions.create(messages);
    const result = completion.choices[0].message.content;
    return result;
  }

  private createMessages(selectedDisabilities: string[]): ChatCompletionCreateParamsNonStreaming {
    const prompt = `
    Based on the following disabilities: ${selectedDisabilities.join(', ')},
    suggest the appropriate accessibility settings as a list of key-value pairs.
    The keys should match the following settings:
    - textSize: Numeric value for text size (e.g. 16)
    - colorTheme: Either 'contrast' or 'dark'
    - font: Either 'legible' or 'dyslexia'
    - underlineLinks: Boolean (true or false)
    - pauseAnimations: Boolean (true or false)
    - lgSizeWidgets: Boolean (true or false)
    - lineHeight: Numeric value for line height (e.g. 1.2)
    - letterSpacing: Numeric value for letter spacing (e.g. 1)

    The response should only return valid key-value pairs, for example:
    [{textSize: 16}, {colorTheme: 'contrast'}, {pauseAnimations: true}]
    Please provide the best configuration based on the disabilities.
    `;

    return {
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant who recommends accessibility settings based on disabilities provided."
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "gpt-4",
    };
  }


}
