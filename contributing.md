# Git Workflow
  1. Fork the main repo
  2. Clone your fork to your local workstation
  3. git remote add upstream (main repo)
  4. Create a branch with the feature or hotfix labeled ex. feat/some-feature   hotfix/broken-feature
  5. Do work
  6. Commit on your local branch
  7. git pull --rebase upstream master 
  8. Fix any conflicts and finish rebase
  9. git push origin (branch name)
  10. Submit pull request
  11. Go back to step 4 and repeat | make sure to rebase your local master before creating new feature branch (step 7)