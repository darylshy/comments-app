import { useEffect } from "react";
import { useCommentManager } from "./hooks/use-comment-manager";

function App() {
  const {
    createComment,
    fetchCommentById,
    fetchAllComments,
    deleteCommentById,
    deleteAllComments,
    cleanup,
  } = useCommentManager();

  useEffect(() => {
    fetchCommentById(2);
    fetchAllComments();
    deleteAllComments();
    (async () => {
      const response = await createComment({
        name: "Henry",
        id: 10,
        created: new Date(),
        message: "This Bud's for you!",
      });
      deleteCommentById(response?.data.id);
    })();

    return cleanup;
  }, [
    cleanup,
    createComment,
    deleteAllComments,
    deleteCommentById,
    fetchAllComments,
    fetchCommentById,
  ]);

  return <div className="App">Hello World</div>;
}

export default App;
