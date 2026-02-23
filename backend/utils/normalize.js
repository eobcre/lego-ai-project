/*
- action validation
- undefined, null fallback
- applying default values for speed and duration
*/

const DEFAULT_SPEED = 30;
const DEFAULT_DURATION = 1000;

export async function normalize(parsed) {
  // parsed bedrock returns { "action": "forward" || "backward" || "stop" }
  const actionValue = parsed?.action;
  // console.log("actionValue:", actionValue);

  const action = actionValue.trim().toLowerCase();

  // action validation
  if (!["forward", "backward", "stop"].includes(action)) {
    console.error("Invalid_Action_Value:", { received: actionValue });
    return { action: "stop", speed: 0, durationMs: 0 };
  }

  // default speed, duration fallback
  const speed = parsed.speed ?? DEFAULT_SPEED;
  const durationMs = parsed.durationMs ?? DEFAULT_DURATION;

  // must return default value for speed and duration
  return { action, speed, durationMs };
}
