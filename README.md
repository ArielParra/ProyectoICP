# ICP-Developer

## Instructions


Clone the project

```bash
git clone https://github.com/ArielParra/ProyectoICP.git
```
Go to the project directory
`cd ProyectoICP`

Install the npm dependencies
`npm install`

Start a replica:
`dfx start --background --clean`

Deploy your canisters:
`dfx deploy`

Finally:
`npm run serve`

# Troubleshoot

Fix nvm/dfx environment issue: add the envs to your shell config (.bashrc for bash or .zshrc for zsh):
```bash
echo 'source /usr/share/nvm/init-nvm.sh' >> ~/.bashrc
echo 'source "$HOME/.local/share/dfx/env"' >> ~/.bashrc
source ~/.bashrc
```

Fix some dfx errors:
```bash
dfx generate #after this you need to do `dfx deploy` again 
```

Fix some npm packages errors:

`npm audit fix --force`
or 
`rm -r -d node_modules && npm install`
