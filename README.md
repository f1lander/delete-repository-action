# GitHub Action to delete a Repository

This action can be used to delete a repository from your workflows.

Using Octokit to delete a repository from a organization or simple user.

## Usage

```yaml
uses: f1lander/delete-repository-action@v1
with:
  owner: 'YOUR_GITHUB_USERNAME'
  repo: 'YOUR_REPO_NAME'
  access-token: 'accessTokenWithRepoOrOrgAdminScope'
```
