function comments(array) {
    let users = {};
    let articles = {};
    for (let index = 0; index < array.length; index++) {
      const tokens = array[index].split(" ");
      if (tokens.length === 2) {
        const [action, element] = tokens;
        if (action === "user") {
          users[element] = { username: element };
        } else {
          articles[element] = { articleName: element, comments: [] };
        }
      } else {
        let dotIndex = array[index].indexOf(":");
        const [user, article] = array[index]
          .slice(0, dotIndex)
          .split(" posts on ");
        if (users.hasOwnProperty(user) && articles.hasOwnProperty(article)) {
          const [commentTitle, content] = array[index]
            .slice(dotIndex + 2)
            .split(", ");
          articles[article].comments.push({
            username: user,
            commentTitle: commentTitle,
            commentContent: content,
          });
        }
      }
    }
    printResult();
  
    function printResult() {
      const keys = Object.keys(articles).sort(
        (articleA, articleB) =>
          articles[articleB].comments.length - articles[articleA].comments.length
      );
      for (let index = 0; index < keys.length; index++) {
        console.log(`Comments on ${articles[keys[index]].articleName}`);
        articles[keys[index]].comments
          .sort((commentA, commentB) =>
            commentA.username.localeCompare(commentB.username)
          )
          .forEach((comment) => {
            console.log(
              `--- From user ${comment.username}: ${comment.commentTitle} - ${comment.commentContent}`
            );
          });
      }
    }
  }