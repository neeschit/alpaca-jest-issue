import { helloWorld, client } from "./index";

test("this shouldn't fail", () => {
    expect(helloWorld).toBeTruthy();
});
