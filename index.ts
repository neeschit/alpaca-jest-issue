import { AlpacaClient } from "@master-chief/alpaca";

export const client = new AlpacaClient({
    credentials: {
        access_token: "TEST",
        secret: "TEST",
    },
});

export const helloWorld = "Hello world, this shouldn't fail";
