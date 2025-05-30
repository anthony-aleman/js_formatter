import * as ts from 'typescript';
import * as fs from 'fs';
import * as path from 'path';

const soureFile = path.join(__dirname, 'example_input.js');
let sourceCode = fs.readFileSync(soureFile, "utf8");
let tsxFile = path.join(__dirname, 'component.tsx');
let tsxSourceCode = fs.readFileSync(tsxFile, 'utf8');
console.log("Source File Opened");
//console.log(sourceCode);

let jsSourceFile = ts.createSourceFile(
    soureFile,
    sourceCode,
    ts.ScriptTarget.Latest,
    true,
)

function Print(node: ts.Node) {
    console.log(ts.SyntaxKind[node.kind]);
    ts.forEachChild(node, Print);
}

console.log("AST created: ", ts.SyntaxKind[jsSourceFile.kind]);
//Print(jsSourceFile);

let declList: ts.LineAndCharacter[] = [];
/*
for (let statement of jsSourceFile.statements) {

    const current = statement
    if (ts.isVariableStatement(statement)) {
        const declarationList = statement.declarationList;
        if (declarationList) {

            for (const decl of declarationList.declarations) {
                const line = jsSourceFile.getLineAndCharacterOfPosition(decl.getEnd());
                declList.push(line);
                console.log(line);
                console.log("Variable:", decl.name.getText());
                console.log("Wdith", decl.getWidth());
                console.log("Text: ", decl.getText());
                console.log("Start: ", decl.getStart());
                console.log("Full Start: ", decl.getFullStart());
                console.log(decl.parent.getFullText());

            }


            for (let index = 0; index < declList.length; index++) {
                for (let j = index + 1; j < declList.length; j++) {
                    if (declList[index].line === declList[j].line) {
                        console.log("Two Statements one line")
                        declList = [];
                        console.log(current.getFullText());
                    }

                }
            }
        }

    }

    // ✅ For-Of Loop
    if (ts.isForOfStatement(statement)) {
        const init = statement.initializer;
        const expr = statement.expression;
        const body = statement.statement;

        console.log("For-Of initializer:", init.getText());
        console.log("For-Of expression:", expr.getText());
    }
    console.log("\n");
}

*/



const sourceJsxFile = ts.createSourceFile(
    tsxFile,
    tsxSourceCode,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX

);

Print(sourceJsxFile);