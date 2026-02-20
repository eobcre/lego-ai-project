/*
normalize test: dummy bedrock data
*/

export async function bedrockStub(text) {
  switch (text) {
    case "forward":
      return `{"action":"forward"}`;
    case "backward":
      return `{"action":"backward"}`;
    case "stop":
      return `{"action":"stop"}`;
    default:
      return `{"action":"unknown"}`;
  }
}
