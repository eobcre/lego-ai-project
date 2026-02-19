import "dotenv/config";
import {
  BedrockRuntimeClient,
  ConverseCommand,
} from "@aws-sdk/client-bedrock-runtime";

/* 
bedrock returns json format test
*/

// aws region
const client = new BedrockRuntimeClient({
  region: process.env.AWS_REGION,
});

export async function bedrock(text) {
  const out = await client.send(
    new ConverseCommand({
      modelId: process.env.MODEL_ID,
      system: [
        {
          text:
            "You control a LEGO train.\n" +
            "Given the user input, reply ONLY with valid JSON in this exact format:\n" +
            '{"action":"forward"} or {"action":"backward"} or {"action":"stop"}\n' +
            "Allowed actions: forward, backward, stop.\n" +
            "No explanation. No markdown. No extra keys.",
        },
      ],
      messages: [
        {
          role: "user",
          content: [{ text }],
        },
      ],
    }),
  );

  // extract bedrock answer
  const answer = out?.output?.message?.content[0].text;
  // console.log("answer:", answer);
  // console.log("out:", out);

  return answer;
}
