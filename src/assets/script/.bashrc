# pnpm
export PNPM_HOME="/Users/estarlincito/Library/pnpm"
case ":$PATH:" in
  *":$PNPM_HOME:"*) ;;
  *) export PATH="$PNPM_HOME:$PATH" ;;
esac
# pnpm end
PATH=~/.console-ninja/.bin:$PATH