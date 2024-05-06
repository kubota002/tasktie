import { setupWorker } from "msw/browser";
import { clientHanders } from "./clientHandlers"

export const worker = setupWorker(...clientHanders);