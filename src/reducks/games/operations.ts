import { push } from "connected-react-router"
import { db, FirebaseTimeStamp } from "../../firebase"

const GamesRef = db.collection('games')

export const saveGame = (title: string, rule: string, win: string, minNum: number, maxNum: number, place: string, genre: string) =>{
    return async (dispatch: any) => {
        const timestamp = FirebaseTimeStamp.now()

        const ref = GamesRef.doc()
        const id = ref.id;

        const data = {
            title: title,
            rule: rule,
            win: win,
            minNum: minNum,
            maxNum: maxNum,
            place: place,
            genre: genre,
            updated_at: timestamp,
            id: id
        }

        return GamesRef.doc(id).set(data)
        .then(()=>dispatch(push('/')))
        .catch((error)=>{
            throw new Error(error)
        })
    }
}
