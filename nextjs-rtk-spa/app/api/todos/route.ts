import {NextRequest, NextResponse} from "next/server";

interface Context {
    params: undefined;
}
export async function GET(request: NextRequest, context: Context) {
    console.log('Todo API routes');
    let todos= [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        },
        {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
        },
    ];
    return NextResponse.json({ data: todos });
}
