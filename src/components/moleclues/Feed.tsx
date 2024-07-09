import { bucket } from "../../lib/firebase";
import NewPostForm from "./NewPostForm"
import {ref ,getDownloadURL} from "firebase/storage"

const feed = () => {
const postRef = ref(bucket,"posts/post1")
getDownloadURL(postRef).then((url)=>console.log(url))

  return (
    <main className="p-5">
      <NewPostForm></NewPostForm>
    </main>
  );
};

export default feed;
