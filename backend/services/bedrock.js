import "dotenv/config";
import {
  BedrockRuntimeClient,
  ConverseCommand,
} from "@aws-sdk/client-bedrock-runtime";

const client = new BedrockRuntimeClient({
  region: process.env.AWS_REGION,
});

export async function bedrock(text) {
  const out = await client.send(
    new ConverseCommand({
      modelId: process.env.MODEL_ID,
      messages: [{ role: "user", content: [{ text }] }],
    }),
  );

  const answer = out?.output?.message?.content[0].text;
  // console.log("answer:", answer);
  console.log("out:", out);

  return answer;
}
