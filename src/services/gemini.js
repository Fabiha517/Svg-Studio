import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({
	apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});
export async function generateSvg(prompt) {
	const response = await ai.models.generateContent({
		model: "gemini-flash-latest",
		contents: `
        You are an expert SVG designer.
        Generate ONLY valid SVG code.
        Create a polished, professional-quality SVG illustration.
        Return ONLY valid JSON in exactly this format:
          {
            "title": "2-4 word descriptive title",
            "svg": "<svg>...</svg>"
          }

        Rules:
        - The title must summarize the illustration.
        - Do NOT start the title with words like "Create", "Draw", "Design", or "Generate".
        - Keep the title between 2 and 4 words.
        - The svg field must contain ONLY valid SVG code.
        - Do not wrap the JSON in markdown.
        - Do not include any explanations.

          SVG requirements:
        - Root element must be <svg>.
        - Use viewBox="0 0 500 500".
        - Set width="100%".
        - Set height="100%".
        - Use layered vector shapes, smooth gradients, subtle shadows, and highlights where         appropriate.
        - Produce realistic proportions and high visual quality unless the user requests a cartoon, flat, minimal, or icon style.
        - Keep the SVG optimized by avoiding unnecessary paths while preserving quality.
        - Preserve a square canvas.
        - The generated SVG should look visually full when rendered inside a square container.
          - Fill approximately 90% of the square canvas with a small margin while keeping the artwork centered.
        - Use modern, clean vector styling.
        - Optimize paths where possible.
        - Do not rasterize anything.

          User request:
                ${prompt}`,
	} );



let text = response.text
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();

let result;

try {
  result = JSON.parse(text);
} catch (err) {
  console.error("JSON PARSE FAILED");
  console.error(text);
  throw err;
}

let svg = result.svg;
const title = result.title;

const start = svg.indexOf("<svg");
const end = svg.lastIndexOf("</svg>");

if (start !== -1 && end !== -1) {
  svg = svg.slice(start, end + 6);
}

return { title, svg };
}
