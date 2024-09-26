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

	public async getAIRecommendedSettings(disability: string): Promise<string> {
		const messages = this.createMessages(disability);
		console.log(`Disability: ${disability}`);
	
		const completion = await this.client.chat.completions.create(messages);
		const result = completion.choices[0].message.content;
		console.log(`Result: ${result}`);
		return result;
	}

	private createMessages(selectedDisabilities: string): ChatCompletionCreateParamsNonStreaming {
		const prompt = `
			Based on the following disabilities: ${selectedDisabilities},
			suggest the appropriate accessibility settings as a single object.
			Only include the settings that are applicable to the disabilities.
		
			The possible settings are:
			- fontSize: Numeric value for text size
			- colorTheme: Either "contrast" or "dark"
			- fontFamily: Either "legible" or "dyslexia"
			- underlineLinks: Boolean (true or false)
			- pauseAnimations: Boolean (true or false)
			- lineHeight: Numerical value for line height - e.g. 1.5
			- letterSpacing: Integer (whole) value for letter spacing - e.g. 1 instead of 0.8
		
			Respond with a valid JSON string that contains the applicable settings which can then be parsed into an object using JSON.parse.
			Do not include any extra syntax like \`\`\`json or any text before or after the object.
			Example: {"fontSize": 18, "fontFamily": "dyslexia"}
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
