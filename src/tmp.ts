import { ai_block } from "./ai-block";
import * as fs from 'fs';

async function main() {
    try {
        const html = `
            <h2>ユーザープロフィール</h2>
            <p>名前: 石田隼基</p>
        `;

        const Result = await ai_block("モダンなカードデザインにして", html);

        console.log(Result.html);
        console.log("-----------------------------------");
        console.log(Result.css);

        const tmp = `
            html:
            ${Result.html}

            css:
            ${Result.css}
        `

        fs.writeFileSync('save-code.txt', tmp);
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        } else {
            console.error("不明なエラーです。", error);
        }
    }
}

main();