export async function GET(request) {
    const data = {
        name: 'Vova',
        age: 12,
        bio: 'jhgsdhg dskjbd dbkjdb'
    }
    return new Response(JSON.stringify(data));
}


export async function POST(request) {
    return new Response(request.body);
}