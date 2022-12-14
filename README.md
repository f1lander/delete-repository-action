# GitHub Action to delete a Repository

This action can be used to delete a repository from your workflows.

Octobay uses this action as part of its CI/CD pipline to delete temporary repositories that host app deployments as GitHub pages. Whenever we receive a pull request, the app is automatically built and pushed into such a temporary "GitHub page host" repository. Once the pull request is merged or closed, the repository is deleted automatically.

## Usage

```yaml
uses: f1lander/delete-repository-action@v1
with:
  name: 'owner/repository'
  access-token: 'accessTokenWithRepoOrOrgAdminScope'
```
