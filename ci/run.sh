/usr/bin/bash -eo pipefail
npm ci
npm run typecheck
npm run lint
npm run build
npm run test:ci
