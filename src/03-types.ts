type ID = number | string

const userId: ID = 5555;
const postId: ID = "fhruhfeurhf";

type Coords = [number, number];
const coords: Coords = [50.789, 60.9877]

type ReqStatus = "request" | "success" | "error";
const requestStatus: ReqStatus = "success"

type CellSize = 2 | 4 | 8 | 16;

const cell: CellSize = 4;

console.log(userId, postId, coords)


export { }