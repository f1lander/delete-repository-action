/**
 * This is a script that can be run manually to delete a repository.
 * author: @f1lander
 */
const { Octokit } = require("@octokit/core");

async function run() {
  try {
    const owner = "YOUR_USERNAME"
    const repo = "YOUR_REPO_NAME"    

    const octokit = new Octokit({
      auth: "AUTH_TOKEN"
    })
    
    await octokit.request('DELETE /repos/{owner}/{repo}', {
      owner,
      repo
    });
    
    console.info('Repository deleted.');
  } catch (error) {
    console.setFailed(error.message);
  }
}

run();
