import { PORT } from "./config";
import { createApp } from "./app";

const app = createApp();

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
